export interface Book {
  id: number
  title: string
  author: string
  price: number
  image: string
  category: string
  description: string
  tags: string[]
  rating: number
  reviews: number
  featured: boolean
}

export interface Review {
  id: number
  user: string
  rating: number
  comment: string
  date: string
}

export interface CartItem extends Book {
  quantity: number
}

export interface Category {
  id: string
  name: string
  description: string
}

export interface User {
  id: string
  name: string
  email: string
  role: 'user' | 'admin'
} 