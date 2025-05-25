"use client";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React, { useState } from 'react'
import { usePizzaOrders } from './providers'
import { Calendar, Filter, User } from 'lucide-react';
import StatusBadge from '@/components/StatusBadge';
import Loading from '@/components/Loading';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { SelectValue } from '@radix-ui/react-select';

const page = () => {
  const { loading, error, orders } = usePizzaOrders();
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredOrders = statusFilter === 'All'
    ? orders
    : orders.filter(order => order.status === statusFilter);

  const statusOptions = ['All', ...new Set(orders?.map(order => order.status) || [])];

  const formatDate = (dateString: Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen' >
        <Loading />
      </div>
    )
  }
  if (error) {
    console.log(error);
  }

  return (

    <div className="bg-white rounded-xl pt-32 pl-10 pr-10 shadow-sm border border-gray-100 overflow-hidden">

      <div className="mb-6 flex items-center gap-3">
        <Filter className="w-4 h-4 text-gray-600" />
        <label className="text-sm font-medium text-gray-700">Filter by Status:</label>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            {statusOptions.map(status => (
              <SelectItem key={status} value={status}>
                {status} {status !== 'All' ? `(${orders.filter(order => order.status === status).length})` : `(${orders.length})`}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Table>
        <TableCaption className="py-4 text-gray-500">
          Recent pizza orders and their current status
        </TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-50 hover:bg-gray-50">
            <TableHead className="font-semibold text-gray-700 py-4">Order ID</TableHead>
            <TableHead className="font-semibold text-gray-700">Customer</TableHead>
            <TableHead className="font-semibold text-gray-700">Pizza Type</TableHead>
            <TableHead className="font-semibold text-gray-700">Quantity</TableHead>
            <TableHead className="font-semibold text-gray-700">Order Date</TableHead>
            <TableHead className="font-semibold text-gray-700">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredOrders.map((order) => (
            <TableRow key={order.id} className="hover:bg-gray-50 transition-colors">
              <TableCell className="font-mono font-medium text-gray-900 py-4">
                PZA{String(order.id).padStart(3, '0')}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                  <span className="font-medium text-gray-900">{order.customerName}</span>
                </div>
              </TableCell>
              <TableCell>
                <div>{order.pizzaType} </div>
              </TableCell>
              <TableCell>
                <span className="inline-flex items-center justify-center w-8 h-8 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold">
                  {order.quantity}
                </span>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{formatDate(order.orderDate)}</span>
                </div>
              </TableCell>
              <TableCell>
                <StatusBadge status={order.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>

  )
}

export default page
