'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star } from 'lucide-react'
import { books } from '@/data/books'
import { useCart } from '@/contexts/CartContext'

export default function Catalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('')
  const { addItem } = useCart()

  const filteredBooks = selectedCategory
    ? books.filter(book => book.category.toLowerCase() === selectedCategory.toLowerCase())
    : books

  const categories = Array.from(new Set(books.map(book => book.category)))

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Catalog</h1>
          <p className="text-lg text-gray-600">Discover your next favorite book</p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setSelectedCategory('')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
              ${!selectedCategory 
                ? 'bg-blue-600 text-white' 
                : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                ${selectedCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-blue-50'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBooks.map((book) => (
            <div 
              key={book.id} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/books/${book.id}`}>
                <div className="relative h-64">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="p-4">
                <div className="text-sm text-blue-600 mb-1">{book.category}</div>
                <h3 className="font-semibold text-lg mb-1">
                  <Link href={`/books/${book.id}`} className="hover:text-blue-600 transition-colors">
                    {book.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-2">{book.author}</p>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {renderStars(Math.floor(book.rating))}
                  </div>
                  <span className="text-sm text-gray-500">({book.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold">${book.price.toFixed(2)}</span>
                  <button
                    onClick={() => addItem(book)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No books found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
} 