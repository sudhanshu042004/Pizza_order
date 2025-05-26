import Header from "@/components/Header"
import { Providers } from "./providers"
import { Footer } from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Order Pizza",
  description:
    "A responsive and modern dashboard with Google OAuth, built using Next.js, Tailwind CSS, and NextAuth. Designed for the Frontend AI Engineer Assignment.",
  authors: [{ name: "Sudhanshu Sodiyal" }],
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
        <Footer/>
      </body>
    </html>
  )
}
