import * as t from "drizzle-orm/pg-core";

export const users = t.pgTable("user", {
    id: t.text("id").primaryKey().$defaultFn(()=>crypto.randomUUID()),
    name: t.text("name"),
    email: t.text("email").notNull(),
    emailVerified: t.timestamp("emailVerified", { mode: "date" }),
    image: t.text('image'),
})

export const accounts = t.pgTable("account", {
    userId: t.text("userId").notNull().references(() => users.id, { onDelete: "cascade" }),
    type: t.text("type").notNull(),
    provider: t.text("provider").notNull(),
    providerAccountId: t.text("providerAccountId").notNull(),
    refresh_token: t.text("refresh_token"),
    access_token: t.text("access_token"),
    expires_at: t.integer("expires_at"),
    token_type: t.text("token_type"),
    scope: t.text("scope"),
    id_token: t.text("id_token"),
    session_state: t.text("session_state"),
},
    (account) => [
        t.primaryKey({ columns: [account.provider, account.providerAccountId] })
    ])

export const sessions = t.pgTable("session", {
    sessionToken: t.text("sessionToken").primaryKey(),
    userId: t.text("userId")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    expires: t.timestamp("expires", { mode: "date" }).notNull(),
})


export const orderStatusEnum = t.pgEnum('status',[
    'Pending',
    'Preparing',
    'Out for Delivery',
    'Delivered',
    'Cancelled'
])

export const pizzaOrders = t.pgTable('pizza_orders',{
    id : t.serial('id').primaryKey(),
    customerName: t.text('customer_name').notNull(),
    pizzaType: t.text('pizza_type').notNull(),
    quantity: t.integer('quantity').notNull(),
    orderDate: t.timestamp('order_date', { withTimezone: true }).notNull(),
    status: orderStatusEnum('status').notNull(),
})
