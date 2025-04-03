import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "Portfólio de Arte | Seu Nome",
    template: "%s | Portfólio de Arte",
  },
  description: "Portfólio de obras de arte originais incluindo pinturas, arte digital e técnicas mistas.",
  keywords: "arte, pintura, artista, galeria, obras de arte, comprar arte",
  authors: [{ name: "Alison Eleotério" }], 
  creator: "Alison Eleotério", 
  publisher: "Alison Eleotério", 
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={inter.className}>{children}</body>
    </html>
  );
}



import './globals.css'
