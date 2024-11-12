/* eslint-disable react/no-unescaped-entities */



import Link from 'next/link';
import { FaPercentage } from 'react-icons/fa';     // Percentage icon for discount
import { FaAward } from 'react-icons/fa';          // Award icon for experience
import { FaHandshake } from 'react-icons/fa';  
import { FaUserShield, FaWrench, FaThumbsUp, FaDollarSign, FaRegClock } from 'react-icons/fa';
import Image from 'next/image';




const services = [
  {
    title: 'RO Routine Service',
    description:
      'Thorough inspection and repair of your RO for issues like leakage, low water flow, dirty or smelly water, etc.',
    price: '₹399',
    includes: [
      'Cleaning of Machine and Filters',
      'Complete Water Purifier Checkup',
      'Water Quality Test (TDS)',
      'Filter / Spare Parts rate as per rate card',
    ],
  },
  {
    title: 'RO Repair Service',
    description:
      'Cleaning of filters, water tank, and outer body for smooth functioning of your RO water purifier. ',
    price: '₹399',
    includes: [
      'Price includes visit & diagnosis charges',
      'Spare part rates as per rate card',
      'Chip, control box repair charges extra',
      'Water Quality Test (TDS)',
    ],
  },
  {
    title: 'RO Installation',
    description: 'Water Purifier Installation by our expert technician.',
    price: '₹599',
    includes: [
      'Fixing of water purifier stand on wall',
      'Connecting inlet water assembly to purifier',
      'Connecting electricity supply',
      'Free Water Quality Test (TDS)',
    ],
  },
  {
    title: 'RO Uninstallation',
    description: 'Water Purifier Uninstallation by our expert technician.',
    price: '₹499',
    includes: [
      'Dismantling purifier from wall',
      'Disconnecting inlet water assembly',
      'Disconnecting electricity supply',
      'Packing purifier at safe place',
    ],
  },
];





  const benefits = [
    {
      title: 'Experienced Technicians',
      description: 'Our team is highly skilled in RO installation, maintenance, and repair.',
      icon: <FaUserShield className="text-blue-600 w-12 h-12" />,
    },
    {
      title: 'Comprehensive Services',
      description: 'From cleaning to full repair, we handle every aspect of water purifiers.',
      icon: <FaWrench className="text-blue-600 w-12 h-12" />,
    },
    {
      title: 'Customer Satisfaction',
      description: 'With a focus on service quality, we ensure every customer leaves happy.',
      icon: <FaThumbsUp className="text-blue-600 w-12 h-12" />,
    },
    {
      title: 'Affordable Pricing',
      description: 'Our services are priced competitively, making quality accessible to all.',
      icon: <FaDollarSign className="text-blue-600 w-12 h-12" />,
    },
    {
      title: 'Quick Response Time',
      description: 'Our team responds promptly, so you get reliable service when you need it.',
      icon: <FaRegClock className="text-blue-600 w-12 h-12" />,
    },
    {
      title: 'Trusted in Bareilly',
      description: 'With years of service in Bareilly, we’re a trusted local choice.',
      icon: <FaHandshake className="text-blue-600 w-12 h-12" />,
    },
  ];



export default function page() {

  return (
    <div>
    <div className="relative h-[116vh] w-full">
        <Image
          src="/coverImage.jpg"
          alt="Cover Image"
          layout="responsive"
          width={1920}  // Adjust as needed
          height={1080} // Adjust as needed
          style={{ objectFit: 'cover' }}
          className="z-10"
        />
        <div className="absolute bg-custom-gradient z-10 top-0 left-0 w-full h-[116vh]  flex justify-center  flex-col">
          <div className="flex flex-col items-center   gap-y-4  ">
            <h1 className="text-7xl font-bold text-[#081F46] font-dosis">PURE WATER</h1>
            <p className="text-7xl font-bold font-dosis text-[#1E65FF]">FOR YOUR HOME</p>
            <p className="text-xl font-nunito font-normal text-[#081F46] w-[700px] text-center">Bringing safe, pure water to Bareilly with advanced RO solutions—your health, our priority every day!</p>
            <div> 
              <button className="bg-white shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] text-custom-gradient rounded-full px-4 py-2 mt-4">Learn More</button>
              <button className=" text-white shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-full px-4 py-2 mt-4 ml-4 bg-[#1E65FF]">Contact Us</button>
            </div>
          </div>
        </div>

          <div className="absolute top-[100%] left-[50%] z-50 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-y-4">
          <div className="bg-white shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] px-7 py-10 rounded-xl flex items-center justify-center gap-x-16">
      <div className="flex  flex-col items-center    space-x-2">
        <FaPercentage className="text-blue-500 text-3xl" />
        <div className='text-center mt-2'>
          <h2 className="text-xl font-semibold text-nowrap">Special Offer</h2>
          <p>30% Discount</p>
        </div>
      </div>

      <div className='border-l-2 border-gray-300 h-16'></div>

      <div className="flex flex-col items-center   space-x-2">
        <FaAward className="text-blue-500 text-3xl" />
        <div className='text-center mt-2'>

          <h2 className="text-xl font-semibold">Experience</h2>
          <p>25+ years  </p>
        </div>
      </div>



      <div className='border-l-2 border-gray-300 h-16'></div>


      <div className="flex  flex-col items-center space-x-2">
        <FaHandshake className="text-blue-500 text-3xl" />
        <div className='text-center mt-2'>

          <h2 className="text-xl font-semibold">Service</h2>
          <p className='text-nowrap'>Free Consultation</p>
        </div>
      </div>
    </div>

    </div>
      </div>

      <div className='relative mt-56 flex flex-col items-center gap-y-10 max-w-[900px]  mx-auto'>
        <h1 className='font-bold text-3xl font-dosis'>About Us- <span className='text-[#1E65FF]'>Balaji RO Services</span></h1>
        <p className='font-nunito text-gray-700 text-center'>Balaji RO Services, Bareilly's trusted choice for clean, safe drinking water. Founded by Mukesh Kumar, our mission is to provide high-quality RO solutions tailored to Bareilly’s unique water needs. With expertise in RO installation, maintenance, filter replacement, and water quality testing, we deliver reliable, affordable services to both homes and businesses in the region. 

Our experienced technicians are dedicated to customer satisfaction and transparency, ensuring you get the best care every step of the way. Mukesh Kumar’s commitment to Bareilly’s health and safety has made Balaji RO Services a respected name in water purification. Pure water, healthier life—choose Balaji RO Services today!</p>
<Link href={'/about'}>
<button className='bg-[#1E65FF] text-white shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-full px-4 py-2 mt-4'>Know More</button></Link>
      </div>
      <section>
      <div className="  py-12 mt-36 px-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-10 font-dosis">Our RO Services</h1>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] p-6 max-w-sm">
              <h2 className="text-2xl font-semibold text-blue-700 font-dosis">{service.title}</h2>
              <p className="text-gray-600 mt-2 font-nunito">{service.description}</p>
              <p className="text-blue-600 font-bold text-xl mt-4 font-dosis">{service.price}/- <span className='text-sm text-gray-500 font-thin'>*Excluding GST</span></p>
              <ul className="mt-4 space-y-2">
                {service.includes.map((item, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center">
                    <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mr-2 font-nunito"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Call Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
      </section>
      <section>
      <div className='relative mt-32 flex flex-col items-center gap-y-10 max-w-[900px]  mx-auto'>
        <h1 className='font-bold text-3xl font-dosis'>Why Choose- <span className='text-[#1E65FF]'>Balaji RO Services</span></h1>
</div>
<div className="  py-12">
      <div className="container mx-auto px-20">
       
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white max-w-72 rounded-xl shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] p-6 text-center">
              <div className="flex justify-center mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 font-dosis">{benefit.title}</h3>
              <p className="text-gray-600 mt-2 font-nunito">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
      </section>
      <section>
      <div className='relative mt-24 flex flex-col items-center gap-y-10 max-w-[1150px]  mx-auto'>
        <div className='bg-[#1E65FF] shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] max-h-56 w-full flex justify-end rounded-xl  '>
          <div className='p-10'>
          <p className='text-4xl text-white font-bold font-dosis'>
            No.1 Water Purifier in <br />Bareilly
          </p>
          <button className='bg-white text-[#1E65FF] shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] rounded-full px-4 py-2 mt-4'>Know More</button>
          </div>
          <div className="relative max-w-xl mx-auto">
        <Image
          src="/5hyy.png"
          alt="RO Purifier Image"
          
          width={400}  // Adjust width based on your requirement
          height={300} // Adjust height based on your requirement
        
          className="rounded-xl object-cover"
        />
      </div>
        </div>
        </div>
      </section>
    </div>
    
  )
}

