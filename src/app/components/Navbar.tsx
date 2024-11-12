'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {   X, MapPin, Phone } from 'lucide-react';
import '../globals.css';
import { BiMenuAltRight } from 'react-icons/bi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <div className='flex justify-between px-4 md:px-10 py-4 items-center font-nunito text-sm absolute z-50 w-full bg-white/95 shadow-sm'>
        {/* Logo */}
        <div>
          <h1 className='font-nunito text-lg font-semibold'>Balaji RO Service</h1>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:block'>
          <ul className='flex gap-x-5 text-lg'>
            <Link href="/"><li className='hover:text-blue-600 transition-colors'>Home</li></Link>
            <Link href="/services"><li className='hover:text-blue-600 transition-colors'>Services</li></Link>
            <Link href="/about"><li className='hover:text-blue-600 transition-colors'>About</li></Link>
            <Link href="/contact"><li className='hover:text-blue-600 transition-colors'>Contact</li></Link>
          </ul>
        </div>

        {/* Desktop Contact Info */}
        <div className='hidden md:flex gap-x-6'>
          <div className='flex items-center gap-2'>
            <MapPin size={20} className="text-blue-600" />
            <p className='text-sm'>
              Rajendra Nagar,<br />
              Bareilly
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <Phone size={20} className="text-blue-600" />
            <p className='text-sm'>
              Call Us:<br />
              +91 123456789
            </p>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className='md:hidden text-gray-600 hover:text-blue-600 transition-colors'
          onClick={() => setIsOpen(true)}
        >
         <BiMenuAltRight  size={24}/>
        </button>
      </div>

      {/* Mobile Slide-out Menu */}
      <div 
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className='p-4'>
          {/* Close Button */}
          <button 
            className='absolute top-4 right-4 text-gray-600 hover:text-blue-600 transition-colors'
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>

          {/* Mobile Logo */}
          <h1 className='font-nunito text-lg font-semibold mb-8 pt-2'>Balaji RO Service</h1>

          {/* Mobile Navigation Links */}
          <ul className='space-y-4'>
            <li>
              <Link 
                href="/" 
                className='block text-lg py-2 hover:text-blue-600 transition-colors'
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/services" 
                className='block text-lg py-2 hover:text-blue-600 transition-colors'
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className='block text-lg py-2 hover:text-blue-600 transition-colors'
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className='block text-lg py-2 hover:text-blue-600 transition-colors'
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Contact Info */}
          <div className='mt-8 space-y-4'>
            <div className='flex items-center gap-2 text-sm'>
              <MapPin size={18} className="text-blue-600" />
              <p>
                Rajendra Nagar,<br />
                Bareilly
              </p>
            </div>
            <div className='flex items-center gap-2 text-sm'>
              <Phone size={18} className="text-blue-600" />
              <p>
                Call Us:<br />
                +91 123456789
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;