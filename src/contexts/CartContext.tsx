'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface Book {
  id: number | string
  title: string
  author: string
  price: number
  image: string
  category: string
}

interface CartItem extends Book {
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addItem: (book: Book) => void
  removeItem: (bookId: number | string) => void
  updateQuantity: (bookId: number | string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setItems(JSON.parse(savedCart))
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  const addItem = (book: Book) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === book.id)
      
      if (existingItem) {
        return currentItems.map(item =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...currentItems, { ...book, quantity: 1 }]
    })
  }

  const removeItem = (bookId: number | string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== bookId))
  }

  const updateQuantity = (bookId: number | string, quantity: number) => {
    if (quantity < 1) {
      removeItem(bookId)
      return
    }

    setItems(currentItems =>
      currentItems.map(item =>
        item.id === bookId
          ? { ...item, quantity }
          : item
      )
    )
  }

  const clearCart = () => {
    setItems([])
  }

  const totalItems = items.reduce((total, item) => total + item.quantity, 0)
  
  const totalPrice = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
} 