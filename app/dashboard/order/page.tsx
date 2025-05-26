"use client";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React, { useState } from 'react'
import { usePizzaOrders } from './providers'
import { Calendar, Filter, User, Pizza, TrendingUp, Clock, CheckCircle, XCircle } from 'lucide-react';
import StatusBadge from '@/components/StatusBadge';
import Loading from '@/components/Loading';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { SelectValue } from '@radix-ui/react-select';
import { motion, AnimatePresence } from 'framer-motion';

const PizzaOrdersPage = () => {
  const { loading, error, orders } = usePizzaOrders();
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  const filteredOrders = statusFilter === 'All'
    ? orders
    : orders.filter(order => order.status === statusFilter);

  const sortedOrders = [...(filteredOrders || [])].sort((a, b) => {
    if (sortBy === 'date') {
      const dateA = new Date(a.orderDate).getTime();
      const dateB = new Date(b.orderDate).getTime();
      return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
    }
    if (sortBy === 'id') {
      return sortOrder === 'desc' ? b.id - a.id : a.id - b.id;
    }
    return 0;
  });

  const statusOptions = ['All', ...new Set(orders?.map(order => order.status) || [])];

  const statusStats = {
    total: orders?.length || 0,
    pending: orders?.filter(o => o.status === 'Pending').length || 0,
    preparing: orders?.filter(o => o.status === 'Preparing').length || 0,
    delivered: orders?.filter(o => o.status === 'Delivered').length || 0,
    cancelled: orders?.filter(o => o.status === 'Cancelled').length || 0
  };

  const formatDate = (dateString: Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.2 }
    }
  };

  if (loading) {
    return (
     <Loading/>
    )
  }

  if (error) {
    return (
      <div className='flex pt-36 justify-center items-center h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
          className="text-center max-w-md mx-auto p-8"
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl">
              <XCircle className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent mb-4"
          >
            Oops! Something went wrong
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white/70 mb-6"
          >
            We couldn't load your pizza orders. Please try again in a moment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-6"
          >
            <p className="text-red-300 text-sm font-mono">
              Error: {error || 'Failed to fetch pizza orders'}
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(239, 68, 68, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
          >
            Try Again
          </motion.button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-orange-500/10 blur-[80px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-purple-500/10 blur-[100px]"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10 pt-20 px-4 mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
              className="inline-block mb-4"
            >
              <div className="p-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl">
                <Pizza className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent mb-4"
            >
              Pizza Orders
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-white/70"
            >
              Track and manage all your delicious pizza orders
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            {[
              { label: 'Total Orders', value: statusStats.total, icon: TrendingUp, color: 'from-blue-500 to-cyan-500' },
              { label: 'Pending', value: statusStats.pending, icon: Clock, color: 'from-yellow-500 to-orange-500' },
              { label: 'Delivered', value: statusStats.delivered, icon: CheckCircle, color: 'from-green-500 to-emerald-500' },
              { label: 'Cancelled', value: statusStats.cancelled, icon: XCircle, color: 'from-red-500 to-pink-500' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:border-white/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <motion.div
                    className={`p-2 rounded-lg bg-gradient-to-r ${stat.color}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-4 h-4 text-white" />
                  </motion.div>
                  <motion.div
                    className="text-2xl font-bold text-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                </div>
                <p className="text-white/70 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 mb-8"
          >
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Filter className="w-5 h-5 text-white/70" />
                </motion.div>
                <span className="text-white font-medium">Filter & Sort:</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="min-w-[200px]"
                >
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="bg-white/5 border-white/20 text-white hover:bg-white/10 transition-colors">
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
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
                  className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-medium transition-all duration-300 flex items-center gap-2"
                >
                  <TrendingUp className={`w-4 h-4 transition-transform ${sortOrder === 'asc' ? 'rotate-180' : ''}`} />
                  {sortOrder === 'desc' ? 'Newest First' : 'Oldest First'}
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden"
          >
            <Table>
              <TableCaption className="py-6 text-white/60 text-base">
                Recent pizza orders and their current status • {filteredOrders?.length || 0} orders shown
              </TableCaption>
              <TableHeader>
                <TableRow className="bg-white/5 hover:bg-white/5 border-white/10">
                  <TableHead className="font-semibold text-white/90 py-4">Order ID</TableHead>
                  <TableHead className="font-semibold text-white/90">Customer</TableHead>
                  <TableHead className="font-semibold text-white/90">Pizza Type</TableHead>
                  <TableHead className="font-semibold text-white/90">Quantity</TableHead>
                  <TableHead className="font-semibold text-white/90">Order Date</TableHead>
                  <TableHead className="font-semibold text-white/90">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <AnimatePresence mode="popLayout">
                  {sortedOrders?.map((order, index) => (
                    <motion.tr
                      key={order.id}
                      variants={rowVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={{ delay: index * 0.05 }}
                      className="hover:bg-white/5 transition-colors border-white/10 group"
                      whileHover={{ scale: 1.01, backgroundColor: 'rgba(255,255,255,0.05)' }}
                    >
                      <TableCell className="font-mono font-medium text-white py-4">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="inline-block px-2 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg border border-orange-500/30"
                        >
                          PZA{String(order.id).padStart(3, '0')}
                        </motion.div>
                      </TableCell>
                      <TableCell>
                        <motion.div
                          className="flex items-center gap-3"
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <motion.div
                            className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <User className="w-5 h-5 text-white" />
                          </motion.div>
                          <span className="font-medium text-white group-hover:text-orange-300 transition-colors">
                            {order.customerName}
                          </span>
                        </motion.div>
                      </TableCell>
                      <TableCell>
                        <motion.div
                          className="flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Pizza className="w-4 h-4 text-orange-400" />
                          <span className="text-white/90">{order.pizzaType}</span>
                        </motion.div>
                      </TableCell>
                      <TableCell>
                        <motion.span
                          className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-bold shadow-lg"
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          {order.quantity}
                        </motion.span>
                      </TableCell>
                      <TableCell>
                        <motion.div
                          className="flex items-center gap-2 text-white/70"
                          whileHover={{ x: 3 }}
                        >
                          <Calendar className="w-4 h-4 text-blue-400" />
                          <span className="text-sm">{formatDate(order.orderDate)}</span>
                        </motion.div>
                      </TableCell>
                      <TableCell>
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <StatusBadge status={order.status} />
                        </motion.div>
                      </TableCell>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </TableBody>
            </Table>

            {(!sortedOrders || sortedOrders.length === 0) && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block mb-4"
                >
                  <Pizza className="w-16 h-16 text-white/30" />
                </motion.div>
                <p className="text-white/60 text-lg">No orders found matching your criteria</p>
                <p className="text-white/40 text-sm mt-2">Try adjusting your filters or place a new order!</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PizzaOrdersPage;
