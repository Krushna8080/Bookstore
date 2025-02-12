import { Book, Category } from '@/types'

export const categories: Category[] = [
  {
    id: 'fiction',
    name: 'Fiction',
    description: 'Explore imaginative stories and narratives'
  },
  {
    id: 'non-fiction',
    name: 'Non-Fiction',
    description: 'Discover real-world knowledge and insights'
  },
  {
    id: 'mystery',
    name: 'Mystery',
    description: 'Unravel intriguing puzzles and suspenseful tales'
  },
  {
    id: 'science-fiction',
    name: 'Science Fiction',
    description: 'Journey through futuristic and speculative worlds'
  },
  {
    id: 'romance',
    name: 'Romance',
    description: 'Experience love stories and relationships'
  },
  {
    id: 'biography',
    name: 'Biography',
    description: 'Read about remarkable lives and experiences'
  },
  {
    id: 'history',
    name: 'History',
    description: 'Learn about past events and civilizations'
  },
  {
    id: 'self-help',
    name: 'Self-Help',
    description: 'Improve your life with practical guidance'
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Insights into entrepreneurship and management'
  },
  {
    id: 'technology',
    name: 'Technology',
    description: 'Explore the digital frontier'
  }
]

export const books: Book[] = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=800&h=1200&q=80",
    category: "Fiction",
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
    tags: ["literary fiction", "fantasy", "contemporary"],
    rating: 4.5,
    reviews: 1250,
    featured: true
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800&h=1200&q=80",
    category: "Self-Help",
    description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day.",
    tags: ["productivity", "self-improvement", "psychology"],
    rating: 4.8,
    reviews: 2300,
    featured: true
  },
  {
    id: 3,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&h=1200&q=80",
    category: "Mystery",
    description: "A woman shoots her husband five times and then never speaks another word.",
    tags: ["thriller", "psychological", "suspense"],
    rating: 4.3,
    reviews: 980,
    featured: false
  },
  {
    id: 4,
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&h=1200&q=80",
    category: "Science Fiction",
    description: "A lone astronaut must save the earth from disaster in this incredible new science-based thriller.",
    tags: ["sci-fi", "space", "adventure"],
    rating: 4.7,
    reviews: 1560,
    featured: true
  },
  {
    id: 5,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: 18.99,
    image: "/books/book-5.jpg",
    category: "Business",
    description: "Timeless lessons on wealth, greed, and happiness doing well with money isn't necessarily about what you know.",
    tags: ["finance", "economics", "personal development"],
    rating: 4.6,
    reviews: 890,
    featured: false
  },
  {
    id: 6,
    title: "The Invisible Life of Addie LaRue",
    author: "V.E. Schwab",
    price: 23.99,
    image: "/books/book-6.jpg",
    category: "Fantasy",
    description: "A life no one will remember. A story you will never forget.",
    tags: ["fantasy", "historical", "romance"],
    rating: 4.4,
    reviews: 1100,
    featured: true
  },
  {
    id: 7,
    title: "Think Again",
    author: "Adam Grant",
    price: 21.99,
    image: "/books/book-7.jpg",
    category: "Non-Fiction",
    description: "The power of knowing what you don't know.",
    tags: ["psychology", "business", "leadership"],
    rating: 4.5,
    reviews: 750,
    featured: false
  },
  {
    id: 8,
    title: "The Paris Library",
    author: "Janet Skeslien Charles",
    price: 20.99,
    image: "/books/book-8.jpg",
    category: "Historical Fiction",
    description: "Based on the true story of the American Library in Paris during World War II.",
    tags: ["historical", "war", "literary"],
    rating: 4.2,
    reviews: 680,
    featured: false
  },
  {
    id: 9,
    title: "Deep Work",
    author: "Cal Newport",
    price: 19.99,
    image: "/books/book-9.jpg",
    category: "Self-Help",
    description: "Rules for focused success in a distracted world.",
    tags: ["productivity", "career", "focus"],
    rating: 4.7,
    reviews: 1200,
    featured: true
  },
  {
    id: 10,
    title: "The Code Breaker",
    author: "Walter Isaacson",
    price: 27.99,
    image: "/books/book-10.jpg",
    category: "Biography",
    description: "Jennifer Doudna, Gene Editing, and the Future of the Human Race.",
    tags: ["science", "biography", "technology"],
    rating: 4.6,
    reviews: 890,
    featured: false
  },
  {
    id: 11,
    title: "Cloud Cuckoo Land",
    author: "Anthony Doerr",
    price: 24.99,
    image: "/books/book-11.jpg",
    category: "Literary Fiction",
    description: "A triumph of imagination and compassion, a soaring story about children on the cusp of adulthood.",
    tags: ["literary", "historical", "contemporary"],
    rating: 4.4,
    reviews: 670,
    featured: true
  },
  {
    id: 12,
    title: "The Lincoln Highway",
    author: "Amor Towles",
    price: 23.99,
    image: "/books/book-12.jpg",
    category: "Historical Fiction",
    description: "A captivating piece of historical fiction and an exploration of fate and friendship.",
    tags: ["historical", "adventure", "literary"],
    rating: 4.5,
    reviews: 920,
    featured: false
  },
  {
    id: 13,
    title: "Four Thousand Weeks",
    author: "Oliver Burkeman",
    price: 22.99,
    image: "/books/book-13.jpg",
    category: "Self-Help",
    description: "Time Management for Mortals - a unique and entertaining approach to life's biggest challenge.",
    tags: ["productivity", "philosophy", "lifestyle"],
    rating: 4.6,
    reviews: 580,
    featured: true
  },
  {
    id: 14,
    title: "The Dawn of Everything",
    author: "David Graeber & David Wengrow",
    price: 28.99,
    image: "/books/book-14.jpg",
    category: "History",
    description: "A new history of humanity that fundamentally transforms our understanding of the human past.",
    tags: ["history", "anthropology", "society"],
    rating: 4.7,
    reviews: 450,
    featured: false
  },
  {
    id: 15,
    title: "The Every",
    author: "Dave Eggers",
    price: 25.99,
    image: "/books/book-15.jpg",
    category: "Science Fiction",
    description: "A provocative exploration of the intersection of technology, democracy, and human nature.",
    tags: ["tech", "dystopian", "contemporary"],
    rating: 4.3,
    reviews: 340,
    featured: true
  }
] 