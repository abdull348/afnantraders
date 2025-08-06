import { Calendar, Target, Eye, Users, Award, Globe } from 'lucide-react';

export default function About() {
  const milestones = [
    {
      year: "2006",
      title: "Company Founded",
      description: "Afnan Traders was established with a vision to serve Pakistan's life science community"
    },
    {
      year: "2010",
      title: "Expanded Services",
      description: "Added diagnostic and analytical equipment to our product portfolio"
    },
    {
      year: "2015",
      title: "Research Partnerships",
      description: "Formed strategic partnerships with leading research institutes"
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Modernized operations and expanded online presence"
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as a leading provider in Pakistan's life science sector"
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Reliability",
      description: "Consistent delivery of high-quality products and services that our clients can depend on"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Innovation",
      description: "Staying at the forefront of technology to provide cutting-edge solutions"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Customer Focus",
      description: "Putting our clients' needs first and building lasting relationships"
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Excellence",
      description: "Maintaining the highest standards in everything we do"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Afnan Traders
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 2006, we have been dedicated to delivering reliable and innovative 
              services and products for Pakistan's Life-Science Community
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Afnan Traders was established in 2006 with a clear mission: to provide 
                integrated solutions for the field of Medical, Diagnostic, Analytical, 
                Agriculture, Vet Research Institutes and Molecular Biological Institutions 
                in Pakistan.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Over the years, we have developed a broad platform of different principals 
                and enabling technologies, offering a significant range of products that 
                serve the diverse needs of our clients across Pakistan.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to excellence and innovation has made us a trusted partner 
                for leading institutions throughout the country.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="text-center">
                  <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">18+</h3>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
                <div className="text-center">
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900">500+</h3>
                  <p className="text-gray-600">Satisfied Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Target className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                To deliver reliable and innovative services and products for the Life-Science 
                Community, enabling breakthrough discoveries and advancing healthcare, research, 
                and agricultural development across Pakistan.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <Eye className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                To be the leading provider of life science solutions in Pakistan, 
                recognized for our commitment to quality, innovation, and customer 
                satisfaction while contributing to the advancement of scientific research 
                and healthcare in the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth and development over the years
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8`}>
                <div className={`w-full max-w-sm ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <div className="text-blue-600 font-bold text-lg mb-2">{milestone.year}</div>
                    <h3 className="font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm">{milestone.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition duration-300">
                <div className="mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our Commitment to Excellence
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We are committed to maintaining the highest standards of quality and service, 
            ensuring that our clients receive the best possible solutions for their needs. 
            Our experienced team works tirelessly to stay ahead of industry trends and 
            provide innovative solutions that drive success.
          </p>
        </div>
      </section>
    </div>
  );
}