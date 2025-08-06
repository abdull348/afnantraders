'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User, Tag, ExternalLink, ChevronRight } from 'lucide-react';

export const FeaturedBlog = ({ articles }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Technology', 'Research', 'Healthcare', 'Agriculture'];

  const filteredArticles = articles.filter(article => 
    activeCategory === 'All' || article.category === activeCategory
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Insights & News
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest developments in life sciences and our company updates
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Featured Article */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-500">
              <div className="relative h-80">
                <Image
                  src={filteredArticles[0]?.image}
                  alt={filteredArticles[0]?.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center space-x-4 text-sm mb-3">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{filteredArticles[0]?.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{filteredArticles[0]?.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 line-clamp-2">
                    {filteredArticles[0]?.title}
                  </h3>
                  <p className="text-gray-200 mb-4 line-clamp-2">
                    {filteredArticles[0]?.excerpt}
                  </p>
                  <Link 
                    href="#" 
                    className="inline-flex items-center text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar Articles */}
          <div className="space-y-6">
            {filteredArticles.slice(1, 4).map((article, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="flex">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
                      <span className="bg-gray-100 px-2 py-1 rounded">
                        {article.category}
                      </span>
                      <span>{article.date}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition duration-300">
                      <Link href="#">{article.title}</Link>
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProductShowcase = ({ products }) => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Equipment
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our latest and most advanced equipment solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="relative">
            <div className="relative h-96 bg-gray-100 rounded-2xl overflow-hidden">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.title}
                fill
                className="object-cover transition duration-500"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-blue-600">{selectedProduct.year}</div>
              <div className="text-sm text-gray-600">Latest Model</div>
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-6">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {selectedProduct.category}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedProduct.title}
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              {selectedProduct.description}
            </p>

            {/* Features */}
            <div className="space-y-3 mb-8">
              {selectedProduct.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* Product Navigation */}
            <div className="flex space-x-2 mb-8">
              {products.map((product, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedProduct(product)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition duration-300 ${
                    selectedProduct.id === product.id
                      ? 'border-blue-600'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            <div className="flex space-x-4">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center"
              >
                Request Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition duration-300 flex items-center">
                <ExternalLink className="mr-2 h-4 w-4" />
                View Specs
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TabbedContent = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions across multiple industries and applications
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-medium transition duration-300 flex items-center ${
                  activeTab === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-80 lg:h-auto">
              <Image
                src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {tabs[activeTab].title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {tabs[activeTab].description}
              </p>
              
              <div className="space-y-4 mb-8">
                {tabs[activeTab].highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <ChevronRight className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/services"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More About {tabs[activeTab].title}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default {
  FeaturedBlog,
  ProductShowcase,
  TabbedContent
};