import { ArrowRight, Microscope, Shield, Award, Users, CheckCircle, FlaskConical, Stethoscope, Seedling, Play, TrendingUp, Globe, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const features = [
    {
      icon: <Stethoscope className="h-12 w-12 text-blue-600" />,
      title: "Medical Equipment",
      description: "Comprehensive range of medical devices and equipment for healthcare institutions",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center"
    },
    {
      icon: <FlaskConical className="h-12 w-12 text-blue-600" />,
      title: "Diagnostic Solutions",
      description: "Advanced diagnostic instruments and analytical tools for accurate results",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop&crop=center"
    },
    {
      icon: <Microscope className="h-12 w-12 text-blue-600" />,
      title: "Research Instruments",
      description: "Cutting-edge research equipment for laboratories and research institutes",
      image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&h=600&fit=crop&crop=center"
    },
    {
      icon: <Seedling className="h-12 w-12 text-blue-600" />,
      title: "Agricultural Solutions",
      description: "Modern agricultural tools and equipment for enhanced productivity",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop&crop=center"
    }
  ];

  const stats = [
    { number: "18+", label: "Years of Experience", icon: <Award className="h-8 w-8 text-blue-600" /> },
    { number: "500+", label: "Satisfied Clients", icon: <Users className="h-8 w-8 text-green-600" /> },
    { number: "1000+", label: "Products Delivered", icon: <TrendingUp className="h-8 w-8 text-purple-600" /> },
    { number: "24/7", label: "Customer Support", icon: <Globe className="h-8 w-8 text-orange-600" /> }
  ];

  const benefits = [
    "Reliable and innovative solutions",
    "Comprehensive product range",
    "Expert technical support",
    "Competitive pricing",
    "Nationwide service coverage",
    "Quality assurance guarantee"
  ];

  const testimonials = [
    {
      quote: "Afnan Traders has been our trusted partner for over 5 years. Their medical equipment quality and service support is exceptional.",
      author: "Dr. Ahmad Hassan",
      position: "Chief Medical Officer",
      company: "Karachi Medical Center",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "The diagnostic solutions provided by Afnan Traders have significantly improved our laboratory efficiency and accuracy.",
      author: "Prof. Sarah Khan",
      position: "Lab Director",
      company: "University Research Institute",
      image: "https://images.unsplash.com/photo-1594824850467-fccce0831f97?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Outstanding agricultural equipment and technical support. Our crop research has never been more productive.",
      author: "Muhammad Ali",
      position: "Research Manager",
      company: "Agricultural Research Center",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const newsAndInsights = [
    {
      title: "Latest Advancements in Molecular Diagnostics",
      excerpt: "Exploring cutting-edge technologies that are revolutionizing molecular diagnostic capabilities in Pakistani laboratories.",
      date: "December 15, 2024",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop&crop=center",
      readTime: "5 min read"
    },
    {
      title: "Sustainable Laboratory Practices",
      excerpt: "How modern laboratories are adopting eco-friendly practices while maintaining scientific excellence.",
      date: "December 10, 2024",
      category: "Sustainability",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=250&fit=crop&crop=center",
      readTime: "4 min read"
    },
    {
      title: "Agricultural Innovation in Pakistan",
      excerpt: "Revolutionary farming technologies improving crop yields and sustainability across Pakistan.",
      date: "December 5, 2024",
      category: "Agriculture",
      image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=400&h=250&fit=crop&crop=center",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop&crop=center"
            alt="Laboratory background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Leading Pakistan's
              <span className="text-blue-300 block">Life-Science Community</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Delivering reliable and innovative services and products for Medical, Diagnostic, 
              Analytical, Agriculture, Vet Research Institutes and Molecular Biological Institutions since 2006.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center shadow-lg"
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300 flex items-center justify-center"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-105 transition duration-300">
                <div className="mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section with Images */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions across multiple sectors of life sciences and healthcare
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-500 group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    {feature.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <Link 
                    href="/services" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Trusted by leading institutions across Pakistan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-blue-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News and Insights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest Insights
              </h2>
              <p className="text-xl text-gray-600">
                Stay updated with industry trends and innovations
              </p>
            </div>
            <Link 
              href="/news" 
              className="hidden md:inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              View All Articles
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsAndInsights.map((article, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <time>{article.date}</time>
                    <span className="mx-2">•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link 
                    href="#" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Read Article
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop&crop=center"
                alt="Laboratory professional"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">2006</div>
                <div className="text-sm">Established</div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Afnan Traders?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 18 years of experience in the life sciences industry, we have built 
                a reputation for excellence and reliability. Our commitment to innovation and 
                customer satisfaction sets us apart.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Link 
                href="/about" 
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=800&fit=crop&crop=center"
            alt="Laboratory background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900 bg-opacity-90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Laboratory?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to find the perfect solutions for your research and diagnostic needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-flex items-center justify-center"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300 inline-flex items-center justify-center"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
