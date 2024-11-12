import React from 'react';
import { MapPin, Phone, Mail, Clock, Shield, Droplet, CheckCircle, Hammer, Award, Users } from 'lucide-react';

const AboutUsPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12">
      {/* Hero Section */}
      <div className="bg-blue-50 rounded-xl p-8 text-center mt-28">
        <h1 className="text-4xl font-bold text-blue-800 mb-4 font-dosis">Balaji RO Services</h1>
        <p className="text-xl text-gray-700 mb-6 font-nunito">Bareilly's Most Trusted Water Purification Experts</p>
        <div className="flex justify-center items-center gap-2 text-blue-600">
          <MapPin size={20} />
          <span className="font-medium font-nunito">Civil Lines, Bareilly, Uttar Pradesh</span>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="bg-white rounded-lg   md:p-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 text-center font-dosis">About Us</h2>
        <p className="text-gray-700 leading-relaxed mb-6 font-nunito  text-justify">
        Founded by Mukesh Kumar in 2002, Balaji RO Services has been at the forefront of providing clean, safe drinking water solutions to Bareilly residents for over two decades. What began as a modest venture with just two technicians has flourished into the region's most trusted water purification enterprise,   Mukesh Kumar's journey in water purification was inspired by his firsthand experience of the challenges faced by Bareilly residents due to poor water quality.   he recognized the critical need for a local service provider who truly understood the unique characteristics of Bareilly's water supply.

 

What sets Balaji RO Services apart is our comprehensive understanding of Bareilly's unique water challenges. From varying TDS levels across different neighborhoods to seasonal fluctuations in water quality, we've developed specialized solutions that effectively address local concerns. Our service philosophy extends beyond mere technical expertise – we pride ourselves on prompt response times (within 2 hours for emergency services), transparent pricing, use of genuine components, and customized maintenance schedules that ensure optimal system performance.

 
 

At Balaji RO Services, pure water isn't just our business – it's our passion and commitment to a healthier Bareilly. Our success story is intertwined with the trust placed in us by thousands of residents who rely on our expertise for their daily water purification needs. From humble beginnings to becoming the region's leading water purification service provider, our journey has been marked by an unwavering dedication to quality, service, and community well-being. Whether you're a homeowner seeking reliable water purification solutions or a business requiring industrial-scale water treatment, our team stands ready to deliver excellence in every aspect of our service..
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
          <div className="flex items-center gap-3 ">
            <Shield className="text-blue-600" size={24} />
            <span className="text-gray-700">Certified Experts</span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="text-blue-600" size={24} />
            <span className="text-gray-700">24/7 Support</span>
          </div>
          <div className="flex items-center gap-3">
            <Droplet className="text-blue-600" size={24} />
            <span className="text-gray-700">Quality Testing</span>
          </div>
        </div>
      </div>

      {/* Bareilly Water Section */}
      <div className="bg-white rounded-lg   md:p-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 font-dosis text-center py-4">Understanding Bareilly's Water</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 font-dosis">Local Water Challenges</h3>
            <ul className="space-y-3 font-nunito">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 mt-1" size={20} />
                <span>High TDS levels ranging from 800-1200 ppm</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 mt-1" size={20} />
                <span>Significant water hardness affecting appliances</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 mt-1" size={20} />
                <span>Seasonal variations in water quality</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 mt-1" size={20} />
                <span>Ground water contamination concerns</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 font-dosis">Our Solutions</h3>
            <ul className="space-y-3 font-nunito">
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 mt-1" size={20} />
                <span>Customized RO systems for local water conditions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 mt-1" size={20} />
                <span>Regular water quality monitoring</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 mt-1" size={20} />
                <span>Advanced filtration technologies</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="text-blue-600 mt-1" size={20} />
                <span>Seasonal maintenance programs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white rounded-lg   md:p-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 font-dosis text-center py-4">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border border-blue-100 rounded-lg font-nunito">
            <Hammer className="text-blue-600 mb-3" size={24} />
            <h3 className="font-semibold mb-2 text-lg ">Installation Services</h3>
            <ul className="text-gray-600 space-y-2">
              <li>New RO system setup</li>
              <li>UV purifier installation</li>
              <li>Water softener installation</li>
              <li>Complete system upgrades</li>
            </ul>
          </div>
          <div className="p-4 border border-blue-100 rounded-lg font-nunito">
            <Hammer className="text-blue-600 mb-3" size={24} />
            <h3 className="font-semibold mb-2 text-lg">Maintenance</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Regular servicing</li>
              <li>Filter replacement</li>
              <li>System sanitization</li>
              <li>Performance optimization</li>
            </ul>
          </div>
          <div className="p-4 border border-blue-100 rounded-lg font-nunito">
            <Hammer className="text-blue-600 mb-3" size={24} />
            <h3 className="font-semibold mb-2 text-lg">Repair Services</h3>
            <ul className="text-gray-600 space-y-2">
              <li>Emergency repairs</li>
              <li>Parts replacement</li>
              <li>System diagnostics</li>
              <li>Performance troubleshooting</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white rounded-lg   md:p-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 font-dosis py-4 text-center">Why Choose Balaji RO Services?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center p-4 font-nunito">
            <Award className="text-blue-600 mb-3" size={32} />
            <h3 className="font-semibold mb-2">20+ Years Experience</h3>
            <p className="text-gray-600">Trusted by thousands of customers across Bareilly</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Users className="text-blue-600 mb-3" size={32} />
            <h3 className="font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">Certified technicians with extensive training</p>
          </div>
          <div className="flex flex-col items-center text-center p-4">
            <Shield className="text-blue-600 mb-3" size={32} />
            <h3 className="font-semibold mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">Using only genuine parts and materials</p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-blue-50 rounded-lg p-4 md:p-8">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 font-dosis">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-nunito">
          <div className="flex items-center gap-3">
            <Phone className="text-blue-600" size={24} />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">+91 XXXXX XXXXX</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="text-blue-600" size={24} />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">xyz@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-blue-600" size={24} />
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="text-gray-600">Civil Lines, Bareilly, UP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;