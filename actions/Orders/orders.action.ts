"use server";

import { db } from "@/src/db";
import { pizzaOrders } from "@/src/db/schema";

export const getAllPizzaOrders = async() =>{
    try{
        const res = await db.select().from(pizzaOrders).orderBy(pizzaOrders.orderDate);
        return res;
    } catch (err){
        console.error(err);
        throw new Error("could not load pizza orders!!");
    }
}
