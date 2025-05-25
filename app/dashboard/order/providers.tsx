"use client";
import { getAllPizzaOrders } from '@/actions/Orders/orders.action';
import { PizzaOrder } from '../../../types/PizzaOrder';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react'


type PizzaOrdersContextType = {
    orders: PizzaOrder[];
    setOrders: React.Dispatch<React.SetStateAction<PizzaOrder[]>>;
    loading: boolean;
    error: string | null;
}

const PizzaOrdersContext = createContext<PizzaOrdersContextType | undefined>(undefined);


const PizzaOrderProvider = ({ children }: { children: ReactNode }) => {
    const [orders, setOrders] = useState<PizzaOrder[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function getOrdersData() {
            setLoading(true);
            setError(null);
            try {
                 const res =  await getAllPizzaOrders();
                 setOrders(res);
             } catch (error:any) {
                console.error(error)
                setError(error.message)
            } finally {
                setLoading(false);
            }
        }
        getOrdersData();
    }, [])

    return (
        <PizzaOrdersContext.Provider value={{orders,setOrders,error,loading}} >
            {children}
        </PizzaOrdersContext.Provider>
    )
}

export default PizzaOrderProvider


export const usePizzaOrders = () =>{
    const context = useContext(PizzaOrdersContext);
    if(!context){
        throw new Error('usePizzaOrders must be used within a PizzaOrdersProvider');
    }
    return context;
};
