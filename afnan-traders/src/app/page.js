import { ArrowRight, Microscope, Shield, Award, Users, CheckCircle, FlaskConical, Stethoscope, Seedling } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: <Stethoscope className="h-12 w-12 text-blue-600" />,
      title: "Medical Equipment",
      description: "Comprehensive range of medical devices and equipment for healthcare institutions"
    },
    {
      icon: <FlaskConical className="h-12 w-12 text-blue-600" />,
      title: "Diagnostic Solutions",
      description: "Advanced diagnostic instruments and analytical tools for accurate results"
    },
    {
      icon: <Microscope className="h-12 w-12 text-blue-600" />,
      title: "Research Instruments",
      description: "Cutting-edge research equipment for laboratories and research institutes"
    },
    {
      icon: <Seedling className="h-12 w-12 text-blue-600" />,
      title: "Agricultural Solutions",
      description: "Modern agricultural tools and equipment for enhanced productivity"
    }
  ];

  const stats = [
    { number: "18+", label: "Years of Experience" },
    { number: "500+", label: "Satisfied Clients" },
    { number: "1000+", label: "Products Delivered" },
    { number: "24/7", label: "Customer Support" }
  ];

  const benefits = [
    "Reliable and innovative solutions",
    "Comprehensive product range",
    "Expert technical support",
    "Competitive pricing",
    "Nationwide service coverage",
    "Quality assurance guarantee"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Leading Pakistan's
              <span className="text-blue-600 block">Life-Science Community</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Delivering reliable and innovative services and products for Medical, Diagnostic, 
              Analytical, Agriculture, Vet Research Institutes and Molecular Biological Institutions since 2006.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/services" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center"
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
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

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions across multiple sectors of life sciences and healthcare
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Afnan Traders?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 18 years of experience in the life sciences industry, we have built 
                a reputation for excellence and reliability. Our commitment to innovation and 
                customer satisfaction sets us apart.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-100 p-6 rounded-lg text-center">
                <Shield className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">Quality Assured</h3>
                <p className="text-sm text-gray-600 mt-2">Certified products with warranty</p>
              </div>
              <div className="bg-green-100 p-6 rounded-lg text-center">
                <Award className="h-8 w-8 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">Industry Leader</h3>
                <p className="text-sm text-gray-600 mt-2">Trusted by leading institutions</p>
              </div>
              <div className="bg-purple-100 p-6 rounded-lg text-center col-span-2">
                <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">Expert Support</h3>
                <p className="text-sm text-gray-600 mt-2">Dedicated technical assistance and customer service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Laboratory?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our experts to find the perfect solutions for your research and diagnostic needs.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-flex items-center"
          >
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
