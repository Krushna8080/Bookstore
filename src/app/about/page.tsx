import Image from 'next/image'
import { BookOpen, Users, Globe, Award } from 'lucide-react'

export default function About() {
  const stats = [
    {
      icon: <BookOpen className="h-8 w-8 text-blue-600" />,
      value: "50,000+",
      label: "Books Available"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      value: "100,000+",
      label: "Happy Customers"
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      value: "50+",
      label: "Countries Served"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      value: "25+",
      label: "Years of Excellence"
    }
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/team/sarah.jpg",
      bio: "Book enthusiast with 20+ years in publishing"
    },
    {
      name: "Michael Chen",
      role: "Head of Curation",
      image: "/team/michael.jpg",
      bio: "Literature professor turned book curator"
    },
    {
      name: "Emily Rodriguez",
      role: "Customer Experience",
      image: "/team/emily.jpg",
      bio: "Dedicated to creating amazing reading experiences"
    },
    {
      name: "David Kim",
      role: "Operations Director",
      image: "/team/david.jpg",
      bio: "Ensuring smooth delivery of books worldwide"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about-hero.jpg"
            alt="Library interior"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Story
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Bringing the joy of reading to book lovers worldwide since 1998
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At BookHaven, we believe that books have the power to transform lives, spark imagination,
            and foster understanding. Our mission is to make quality literature accessible to everyone,
            everywhere. We curate our collection with care, ensuring that every book we offer meets
            our high standards for both content and physical quality.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <div className="text-blue-600 mb-2">{member.role}</div>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Quality</h3>
              <p className="text-gray-600">
                We carefully select each book in our collection to ensure the highest
                quality in both content and physical form.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Accessibility</h3>
              <p className="text-gray-600">
                Making great literature available to everyone through competitive
                pricing and worldwide shipping.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">
                Building a global community of book lovers through shared
                experiences and discussions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 