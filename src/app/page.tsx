'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Star, ArrowRight } from 'lucide-react'
import { books, categories } from '@/data/books'
import FadeIn from '@/components/animations/FadeIn'
import HoverCard from '@/components/animations/HoverCard'
import { motion } from 'framer-motion'

export default function Home() {
  const featuredBooks = books.filter(book => book.featured)
  const [isHovered, setIsHovered] = useState<number | null>(null)

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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-library.jpg"
            alt="Library"
            fill
            className="object-cover brightness-[0.35]"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Discover Your Next
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-blue-400"
              > Great Read</motion.span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Explore our vast collection of handpicked books across all genres
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/catalog"
                  className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
                >
                  Browse Catalog
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/about"
                  className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Books</h2>
              <p className="text-xl text-gray-600">Handpicked selections from our collection</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredBooks.slice(0, 4).map((book, index) => (
              <FadeIn key={book.id} delay={index * 0.1}>
                <HoverCard>
                  <div
                    className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    onMouseEnter={() => setIsHovered(book.id)}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <Link href={`/books/${book.id}`}>
                      <div className="relative h-[400px]">
                        <Image
                          src={book.image}
                          alt={book.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {isHovered === book.id && (
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <p className="text-sm line-clamp-3">{book.description}</p>
                          </div>
                        )}
                      </div>
                    </Link>
                    <div className="p-6">
                      <div className="text-sm text-blue-600 mb-2 font-medium">{book.category}</div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        <Link href={`/books/${book.id}`} className="hover:text-blue-600 transition-colors">
                          {book.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-3">{book.author}</p>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex">
                          {renderStars(Math.floor(book.rating))}
                        </div>
                        <span className="text-sm text-gray-500">({book.reviews})</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900">${book.price.toFixed(2)}</span>
                        <Link
                          href={`/books/${book.id}`}
                          className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 group"
                        >
                          View Details
                          <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </HoverCard>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/catalog"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
                >
                  View All Books
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
              <p className="text-xl text-gray-600">Find your perfect read by genre</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { id: 'fiction', name: 'Fiction', icon: '📚' },
              { id: 'non-fiction', name: 'Non-Fiction', icon: '📖' },
              { id: 'mystery', name: 'Mystery', icon: '🔍' },
              { id: 'science-fiction', name: 'Science Fiction', icon: '🚀' },
              { id: 'romance', name: 'Romance', icon: '💝' },
              { id: 'biography', name: 'Biography', icon: '👤' },
              { id: 'history', name: 'History', icon: '⏳' },
              { id: 'self-help', name: 'Self-Help', icon: '✨' },
            ].map((category, index) => (
              <FadeIn key={category.id} delay={index * 0.1}>
                <HoverCard>
                  <Link
                    href={`/catalog?category=${category.id}`}
                    className="group bg-white border border-gray-100 rounded-2xl p-8 block"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <motion.span 
                        className="text-4xl mb-2"
                        whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                        role="img" 
                        aria-label={category.name}
                      >
                        {category.icon}
                      </motion.span>
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h3>
                      <motion.div 
                        className="flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-sm font-medium">Explore</span>
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </motion.div>
                    </div>
                  </Link>
                </HoverCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden">
        <FadeIn>
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.h2 
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Stay Updated
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Subscribe to our newsletter for the latest releases and exclusive offers
            </motion.p>
            <motion.form 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-full text-gray-900 flex-grow max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                type="submit"
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </motion.form>
          </div>
        </FadeIn>
      </section>
    </main>
  )
} 