'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Star, Minus, Plus, Heart } from 'lucide-react'

interface Review {
  id: number
  user: string
  rating: number
  comment: string
  date: string
}

export default function BookDetails({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState<'description' | 'details' | 'reviews'>('description')

  // Mock data - In a real app, this would come from an API
  const book = {
    id: params.id,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 24.99,
    image: "/books/midnight-library.jpg",
    category: "Fiction",
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices...",
    details: {
      publisher: "Viking",
      language: "English",
      paperback: "304 pages",
      isbn: "978-0525559474",
      dimensions: "5.5 x 0.7 x 8.2 inches",
      weight: "12 ounces"
    },
    reviews: [
      {
        id: 1,
        user: "John Doe",
        rating: 5,
        comment: "A beautiful and thought-provoking story that will stay with you long after you've finished reading.",
        date: "2024-01-15"
      },
      {
        id: 2,
        user: "Jane Smith",
        rating: 4,
        comment: "Engaging narrative with deep philosophical undertones. Highly recommended!",
        date: "2024-01-10"
      }
    ]
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Book Details */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Image */}
            <div className="relative h-96 md:h-full min-h-[400px]">
              <Image
                src={book.image}
                alt={book.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <div className="text-sm text-blue-600 mb-1">{book.category}</div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
                <p className="text-xl text-gray-600">by {book.author}</p>
              </div>

              <div className="flex items-center gap-2">
                {renderStars(4)}
                <span className="text-gray-600 ml-2">(128 reviews)</span>
              </div>

              <div className="text-3xl font-bold text-gray-900">${book.price}</div>

              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="px-4 py-2 text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
                <button className="flex-1 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
                <button className="p-3 border rounded-lg hover:bg-gray-50">
                  <Heart className="h-6 w-6 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="border-t">
            <div className="flex border-b">
              <button
                onClick={() => setActiveTab('description')}
                className={`px-8 py-4 font-medium ${
                  activeTab === 'description'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('details')}
                className={`px-8 py-4 font-medium ${
                  activeTab === 'details'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Details
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-8 py-4 font-medium ${
                  activeTab === 'reviews'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Reviews
              </button>
            </div>

            <div className="p-8">
              {activeTab === 'description' && (
                <p className="text-gray-600 leading-relaxed">{book.description}</p>
              )}

              {activeTab === 'details' && (
                <div className="space-y-4">
                  {Object.entries(book.details).map(([key, value]) => (
                    <div key={key} className="grid grid-cols-2 gap-4">
                      <div className="text-gray-600 capitalize">{key}</div>
                      <div className="text-gray-900">{value}</div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-8">
                  {book.reviews.map((review: Review) => (
                    <div key={review.id} className="border-b pb-6 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">{review.user}</div>
                        <div className="text-gray-500">{review.date}</div>
                      </div>
                      <div className="flex items-center mb-2">
                        {renderStars(review.rating)}
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 