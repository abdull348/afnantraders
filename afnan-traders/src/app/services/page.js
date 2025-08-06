import { Stethoscope, FlaskConical, Microscope, Seedling, Heart, TestTube, Cpu, Leaf, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
  const mainServices = [
    {
      icon: <Stethoscope className="h-16 w-16 text-blue-600" />,
      title: "Medical Equipment",
      description: "Comprehensive range of medical devices and equipment for healthcare institutions",
      features: [
        "Patient monitoring systems",
        "Surgical instruments",
        "Diagnostic imaging equipment",
        "Hospital furniture and fixtures",
        "Emergency medical devices"
      ],
      color: "blue"
    },
    {
      icon: <FlaskConical className="h-16 w-16 text-green-600" />,
      title: "Diagnostic Solutions",
      description: "Advanced diagnostic instruments and analytical tools for accurate results",
      features: [
        "Laboratory analyzers",
        "Blood chemistry systems",
        "Immunoassay equipment",
        "Molecular diagnostics",
        "Point-of-care testing devices"
      ],
      color: "green"
    },
    {
      icon: <Microscope className="h-16 w-16 text-purple-600" />,
      title: "Research Instruments",
      description: "Cutting-edge research equipment for laboratories and research institutes",
      features: [
        "High-resolution microscopes",
        "Spectrophotometers",
        "Centrifuges and separators",
        "Incubators and ovens",
        "Data analysis software"
      ],
      color: "purple"
    },
    {
      icon: <Seedling className="h-16 w-16 text-emerald-600" />,
      title: "Agricultural Solutions",
      description: "Modern agricultural tools and equipment for enhanced productivity",
      features: [
        "Soil analysis equipment",
        "Plant growth chambers",
        "Irrigation systems",
        "Pest detection tools",
        "Crop monitoring devices"
      ],
      color: "emerald"
    }
  ];

  const specializedServices = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Veterinary Research",
      description: "Specialized equipment for veterinary research institutes and animal health facilities"
    },
    {
      icon: <TestTube className="h-8 w-8 text-blue-500" />,
      title: "Molecular Biology",
      description: "Advanced tools for molecular biological research and genetic analysis"
    },
    {
      icon: <Cpu className="h-8 w-8 text-indigo-500" />,
      title: "Analytical Chemistry",
      description: "Precision instruments for chemical analysis and quality control"
    },
    {
      icon: <Leaf className="h-8 w-8 text-green-500" />,
      title: "Environmental Testing",
      description: "Equipment for environmental monitoring and sustainability research"
    }
  ];

  const supportServices = [
    "Installation and setup",
    "Training and education",
    "Technical support",
    "Maintenance services",
    "Warranty coverage",
    "Parts and accessories"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for Medical, Diagnostic, Analytical, Agriculture, 
              Vet Research Institutes and Molecular Biological Institutions
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Integrated solutions across multiple sectors of life sciences
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition duration-300">
                <div className="mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored equipment and services for specific research areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedServices.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Extensive range of products from leading manufacturers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Laboratory Equipment</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Microscopes & Imaging Systems</li>
                <li>• Analytical Balances</li>
                <li>• pH Meters & Electrodes</li>
                <li>• Pipettes & Dispensers</li>
                <li>• Laboratory Glassware</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Medical Devices</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Patient Monitors</li>
                <li>• Defibrillators</li>
                <li>• Ultrasound Systems</li>
                <li>• ECG Machines</li>
                <li>• Surgical Instruments</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Research Tools</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• PCR Systems</li>
                <li>• Gel Electrophoresis</li>
                <li>• Cell Culture Equipment</li>
                <li>• Protein Analysis Tools</li>
                <li>• DNA Sequencers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Support Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We don't just supply equipment – we provide complete solutions with 
                ongoing support to ensure your success.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {supportServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Features</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expert Installation</h4>
                    <p className="text-gray-600 text-sm">Professional setup and calibration by certified technicians</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                    <p className="text-gray-600 text-sm">Round-the-clock technical assistance and troubleshooting</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Training Programs</h4>
                    <p className="text-gray-600 text-sm">Comprehensive user training and certification programs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our experts can help you find the perfect equipment and services 
            tailored to your specific requirements.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 inline-flex items-center"
          >
            Get Expert Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}