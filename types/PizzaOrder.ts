import { pizzaOrders } from "@/src/db/schema";

export type PizzaOrder = typeof pizzaOrders.$inferSelect;

export const ORDER_STATUS = [
    'Pending',
    'Preparing',
    'Out for Delivery',
    'Delivered',
    'Cancelled',
] as const;

export type OrderStatus = typeof ORDER_STATUS[number];
