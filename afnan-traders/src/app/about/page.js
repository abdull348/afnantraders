import { Calendar, Target, Eye, Users, Award, Globe, Building2, MapPin, Heart, Lightbulb } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const milestones = [
    {
      year: "2006",
      title: "Company Founded",
      description: "Afnan Traders was established with a vision to serve Pakistan's life science community",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&crop=center"
    },
    {
      year: "2010",
      title: "Expanded Services", 
      description: "Added diagnostic and analytical equipment to our product portfolio",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center"
    },
    {
      year: "2015",
      title: "Research Partnerships",
      description: "Formed strategic partnerships with leading research institutes",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop&crop=center"
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Modernized operations and expanded online presence",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center"
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as a leading provider in Pakistan's life science sector",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop&crop=center"
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Reliability",
      description: "Consistent delivery of high-quality products and services that our clients can depend on",
      color: "blue"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-green-600" />,
      title: "Innovation",
      description: "Staying at the forefront of technology to provide cutting-edge solutions",
      color: "green"
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Customer Focus",
      description: "Putting our clients' needs first and building lasting relationships",
      color: "red"
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Excellence",
      description: "Maintaining the highest standards in everything we do",
      color: "purple"
    }
  ];

  const leadership = [
    {
      name: "Muhammad Afnan",
      position: "Chief Executive Officer",
      bio: "Leading the company's strategic vision and growth for over 18 years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      expertise: ["Strategic Leadership", "Life Sciences", "Business Development"]
    },
    {
      name: "Dr. Fatima Ahmed",
      position: "Chief Technology Officer",
      bio: "Driving innovation and technology advancement in life sciences solutions",
      image: "https://images.unsplash.com/photo-1594824850467-fccce0831f97?w=300&h=300&fit=crop&crop=face",
      expertise: ["Biotechnology", "Research & Development", "Innovation"]
    },
    {
      name: "Syed Hassan Ali", 
      position: "Chief Operations Officer",
      bio: "Ensuring operational excellence and customer satisfaction across all divisions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      expertise: ["Operations", "Quality Management", "Customer Relations"]
    }
  ];

  const achievements = [
    {
      title: "ISO 9001:2015 Certified",
      description: "Quality management systems certification",
      icon: <Award className="h-6 w-6 text-blue-600" />
    },
    {
      title: "500+ Successful Projects",
      description: "Delivered across Pakistan",
      icon: <Building2 className="h-6 w-6 text-green-600" />
    },
    {
      title: "50+ Research Partners",
      description: "Collaborating institutions",
      icon: <Users className="h-6 w-6 text-purple-600" />
    },
    {
      title: "Nationwide Coverage",
      description: "Service centers across Pakistan",
      icon: <MapPin className="h-6 w-6 text-orange-600" />
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=800&fit=crop&crop=center"
            alt="Laboratory background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Afnan Traders
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Since 2006, we have been dedicated to delivering reliable and innovative 
              services and products for Pakistan's Life-Science Community
            </p>
          </div>
        </div>
      </section>

      {/* Company Story with Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop&crop=center"
                alt="Modern laboratory"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-600">
                <div className="text-3xl font-bold text-blue-600">18+</div>
                <div className="text-sm text-gray-600">Years Serving Science</div>
              </div>
            </div>
            
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
              <p className="text-lg text-gray-600 mb-8">
                Our commitment to excellence and innovation has made us a trusted partner 
                for leading institutions throughout the country.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision with Enhanced Design */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Driving the future of life sciences in Pakistan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="absolute -top-4 left-8">
                  <div className="bg-blue-600 p-4 rounded-xl shadow-lg">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="pt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To deliver reliable and innovative services and products for the Life-Science 
                    Community, enabling breakthrough discoveries and advancing healthcare, research, 
                    and agricultural development across Pakistan.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl transform rotate-3 -z-10"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="absolute -top-4 left-8">
                  <div className="bg-green-600 p-4 rounded-xl shadow-lg">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="pt-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    To be the leading provider of life science solutions in Pakistan, 
                    recognized for our commitment to quality, innovation, and customer 
                    satisfaction while contributing to the advancement of scientific research 
                    and healthcare in the region.
                  </p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800 rounded-2xl transform rotate-3 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Timeline with Images */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey Through Time
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth and development over the years
            </p>
          </div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <Image
                      src={milestone.image}
                      alt={milestone.title}
                      width={500}
                      height={300}
                      className="rounded-xl shadow-lg"
                    />
                    <div className="absolute -top-4 -left-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                      <div className="text-xl font-bold">{milestone.year}</div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="bg-gray-50 p-8 rounded-xl">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{milestone.title}</h3>
                    <p className="text-gray-600 text-lg">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the visionaries driving our mission forward
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
                <div className="relative h-64">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{leader.position}</p>
                  <p className="text-gray-600 mb-4">{leader.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {leader.expertise.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group text-center hover:scale-105 transition duration-300">
                <div className={`mb-6 p-6 bg-${value.color}-50 rounded-full w-20 h-20 mx-auto flex items-center justify-center group-hover:bg-${value.color}-100 transition duration-300`}>
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

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-blue-100">
              Measurable results that demonstrate our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">18+</div>
              <div className="text-blue-200">Years of Experience</div>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-200">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <Building2 className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">1000+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-blue-200 mx-auto mb-4" />
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-200">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Afnan Traders for their 
            life science equipment and solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get in Touch
            </Link>
            <Link 
              href="/services" 
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}