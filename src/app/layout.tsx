import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import PageTransition from '@/components/animations/PageTransition'
import { CartProvider } from '@/contexts/CartContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BookStore - Your Online Book Shop',
  description: 'Discover your next great read at BookStore. Browse our vast collection of books across all genres.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <CartProvider>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <PageTransition>
              <main className="flex-grow pt-20">
                {children}
              </main>
            </PageTransition>
          </div>
        </CartProvider>
      </body>
    </html>
  )
} 