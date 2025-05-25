"use client";
import PizzaOrderProvider from "./providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <>
        <PizzaOrderProvider >
          {children}
        </PizzaOrderProvider>
      </>
  )
}
