import { Stethoscope, FlaskConical, Microscope, Seedling, Heart, TestTube, Cpu, Leaf, CheckCircle, ArrowRight, Users, Clock, Shield, Zap, PlayCircle, Download, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Services() {
  const heroSections = [
    {
      title: "Transforming Healthcare Through Innovation",
      subtitle: "Advanced medical equipment for better patient outcomes",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=800&fit=crop&crop=center",
      cta: "Explore Medical Solutions",
      href: "#medical"
    }
  ];

  const mainServices = [
    {
      icon: <Stethoscope className="h-16 w-16 text-blue-600" />,
      title: "Medical Equipment",
      description: "Comprehensive range of medical devices and equipment for healthcare institutions across Pakistan",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",
      features: [
        "Patient monitoring systems",
        "Surgical instruments", 
        "Diagnostic imaging equipment",
        "Hospital furniture and fixtures",
        "Emergency medical devices"
      ],
      stats: { projects: "150+", clients: "75+" },
      color: "blue",
      testimonial: {
        quote: "Afnan Traders provided us with state-of-the-art medical equipment that has significantly improved our patient care capabilities.",
        author: "Dr. Ahmed Hassan",
        position: "Chief Medical Officer, Karachi General Hospital"
      }
    },
    {
      icon: <FlaskConical className="h-16 w-16 text-green-600" />,
      title: "Diagnostic Solutions",
      description: "Advanced diagnostic instruments and analytical tools for accurate and rapid results",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop&crop=center",
      features: [
        "Laboratory analyzers",
        "Blood chemistry systems",
        "Immunoassay equipment", 
        "Molecular diagnostics",
        "Point-of-care testing devices"
      ],
      stats: { projects: "200+", clients: "100+" },
      color: "green",
      testimonial: {
        quote: "The diagnostic solutions have transformed our laboratory's efficiency and accuracy, enabling us to serve more patients effectively.",
        author: "Prof. Sarah Khan",
        position: "Lab Director, University Medical Center"
      }
    },
    {
      icon: <Microscope className="h-16 w-16 text-purple-600" />,
      title: "Research Instruments",
      description: "Cutting-edge research equipment for laboratories and research institutes",
      image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=800&h=600&fit=crop&crop=center",
      features: [
        "High-resolution microscopes",
        "Spectrophotometers",
        "Centrifuges and separators",
        "Incubators and ovens",
        "Data analysis software"
      ],
      stats: { projects: "120+", clients: "60+" },
      color: "purple",
      testimonial: {
        quote: "Our research capabilities have expanded tremendously with the advanced instruments provided by Afnan Traders.",
        author: "Dr. Muhammad Ali",
        position: "Research Director, National Institute of Science"
      }
    },
    {
      icon: <Seedling className="h-16 w-16 text-emerald-600" />,
      title: "Agricultural Solutions", 
      description: "Modern agricultural tools and equipment for enhanced productivity and sustainability",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&h=600&fit=crop&crop=center",
      features: [
        "Soil analysis equipment",
        "Plant growth chambers",
        "Irrigation systems",
        "Pest detection tools",
        "Crop monitoring devices"
      ],
      stats: { projects: "80+", clients: "45+" },
      color: "emerald",
      testimonial: {
        quote: "The agricultural solutions have revolutionized our farming practices and significantly increased our crop yields.",
        author: "Ahmad Malik",
        position: "Agricultural Manager, Punjab Farms"
      }
    }
  ];

  const specializedServices = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Veterinary Research",
      description: "Specialized equipment for veterinary research institutes and animal health facilities",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: <TestTube className="h-8 w-8 text-blue-500" />,
      title: "Molecular Biology",
      description: "Advanced tools for molecular biological research and genetic analysis",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: <Cpu className="h-8 w-8 text-indigo-500" />,
      title: "Analytical Chemistry",
      description: "Precision instruments for chemical analysis and quality control",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=250&fit=crop&crop=center"
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: "Environmental Testing",
      description: "Equipment for environmental monitoring and sustainability research",
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=400&h=250&fit=crop&crop=center"
    }
  ];

  const supportServices = [
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Installation & Setup",
      description: "Professional installation and configuration by certified technicians"
    },
    {
      icon: <Clock className="h-6 w-6 text-green-600" />,
      title: "24/7 Support",
      description: "Round-the-clock technical assistance and troubleshooting"
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-600" />,
      title: "Warranty Coverage",
      description: "Comprehensive warranty and quality assurance"
    },
    {
      icon: <Zap className="h-6 w-6 text-orange-600" />,
      title: "Training Programs",
      description: "Comprehensive user training and certification"
    }
  ];

  const successStories = [
    {
      title: "Transforming Karachi's Largest Hospital",
      description: "How we helped upgrade a 500-bed hospital with modern medical equipment, improving patient care and operational efficiency.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center",
      results: ["50% faster diagnosis", "30% cost reduction", "95% patient satisfaction"],
      category: "Healthcare"
    },
    {
      title: "Revolutionary Research Lab Setup",
      description: "Establishing a world-class molecular biology research facility for groundbreaking genetic research.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&h=400&fit=crop&crop=center",
      results: ["10x research capacity", "5 published papers", "International recognition"],
      category: "Research"
    },
    {
      title: "Sustainable Agriculture Innovation",
      description: "Implementing smart farming solutions that increased crop yields while reducing environmental impact.",
      image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=600&h=400&fit=crop&crop=center",
      results: ["40% yield increase", "25% water savings", "Carbon footprint reduced"],
      category: "Agriculture"
    }
  ];

  const resources = [
    {
      title: "Product Catalog 2024",
      description: "Complete guide to our medical and diagnostic equipment",
      type: "PDF",
      size: "12 MB",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop&crop=center"
    },
    {
      title: "Installation Guidelines",
      description: "Step-by-step installation procedures for laboratory equipment",
      type: "PDF", 
      size: "8 MB",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop&crop=center"
    },
    {
      title: "Training Materials",
      description: "Comprehensive training resources for equipment operation",
      type: "Video",
      size: "45 min",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop&crop=center"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Dynamic Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop&crop=center"
            alt="Advanced laboratory equipment"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Advancing Science,
              <span className="text-blue-300 block">Improving Lives</span>
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Comprehensive solutions for Medical, Diagnostic, Analytical, Agriculture, 
              Vet Research Institutes and Molecular Biological Institutions across Pakistan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#solutions" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300 flex items-center justify-center">
                <PlayCircle className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 bg-blue-50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">550+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="p-6 bg-green-50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">280+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="p-6 bg-purple-50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">18+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="p-6 bg-orange-50 rounded-xl">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services with Enhanced Layout */}
      <section id="solutions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Integrated solutions designed to advance scientific research and improve healthcare outcomes
            </p>
          </div>
          
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-cols-2' : ''}`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="rounded-2xl shadow-xl group-hover:shadow-2xl transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <div className="flex items-center space-x-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold">{service.stats.projects}</div>
                          <div className="text-sm opacity-90">Projects</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">{service.stats.clients}</div>
                          <div className="text-sm opacity-90">Clients</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Client Testimonial */}
                  <div className="bg-gray-50 p-6 rounded-xl mb-6">
                    <blockquote className="text-gray-700 italic mb-4">
                      "{service.testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold text-gray-900">{service.testimonial.author}</div>
                      <div className="text-sm text-gray-600">{service.testimonial.position}</div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Link 
                      href="/contact" 
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center"
                    >
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored equipment and services for specific research areas and applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedServices.map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="mb-2">
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-1">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from our partnerships with leading institutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="relative h-48">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {story.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {story.description}
                  </p>
                  <div className="space-y-2">
                    {story.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Support Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We don't just supply equipment – we provide complete solutions with 
                ongoing support to ensure your success every step of the way.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {supportServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
                      <p className="text-sm text-gray-600">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center"
                alt="Technical support team"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <Phone className="h-8 w-8 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">24/7 Support</div>
                    <div className="text-sm text-gray-600">Always here to help</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Resources & Downloads
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access our comprehensive library of technical resources and documentation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="relative h-32">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {resource.type} • {resource.size}
                    </div>
                    <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            Ready to Transform Your Research?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let our experts help you find the perfect solutions tailored to your specific requirements and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-flex items-center justify-center"
            >
              Get Expert Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="tel:+92xxxxxxxxx" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition duration-300 inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}