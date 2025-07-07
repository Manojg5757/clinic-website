import React from "react";
import { Link } from "react-scroll";
import fblogo from '../assets/fblogo.webp'
import instalogo from '../assets/instagramlogo.webp'
import whatsapplogo from '../assets/whatsapplogo.webp'
import youtubelogo from '../assets/youtubelogo.webp'

const Footer = () => {
  return (
    <div className="bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0 shadow-2xl">
      <div className="flex flex-col lg:flex-row justify-between p-8 lg:p-12 gap-8 lg:gap-12">
        
        {/* Clinic Information Section */}
        <div className="w-full lg:w-1/3 space-y-4">
          <h1 className="font-bold text-2xl lg:text-3xl pb-2 text-white border-b-2 border-hoverColor/30 inline-block">
            SARA ELECTRO HERBS
          </h1>
          <p className="text-sm lg:text-base leading-relaxed text-gray-200">
            A dedicated team of Electropathy practitioners specializing in natural, plant-based treatments for chronic diseases, skin conditions, digestive issues, stress management, and more — committed to holistic, side-effect-free healing.
          </p>
        </div>

        {/* Social Media Section */}
        <div className="w-full lg:w-1/3">
          <h1 className="font-bold text-xl lg:text-2xl pb-4 text-white border-b-2 border-hoverColor/30 inline-block mb-6">
            Social Media
          </h1>
          <nav className="flex flex-col gap-4">
            
            {/* Instagram - Commented */}
            {/* <div className="flex gap-3 items-center group hover:bg-white/10 p-3 rounded-lg transition-all duration-300">
              <div className="h-8 w-8 flex-shrink-0">
                <img src={instalogo} alt="thiraiyal instagram logo" className="w-full h-full object-contain" />
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-hoverColor transition-all cursor-pointer text-sm lg:text-base font-medium"
              >
                Clinic Name
              </a>
            </div> */}
            
            {/* WhatsApp */}
            <div className="flex gap-3 items-center group hover:bg-white/10 p-3 rounded-lg transition-all duration-300">
              <div className="h-8 w-8 flex-shrink-0">
                <img src={whatsapplogo} alt="thiraiyal whatsapp logo" className="w-full h-full object-contain" />
              </div>
              <a
                href="https://wa.me/919840529941"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-hoverColor transition-all whitespace-nowrap cursor-pointer text-sm lg:text-base font-medium"
              >
                9840529941
              </a>
            </div>
            
            {/* Facebook - Commented */}
            {/* <div className="flex gap-3 items-center group hover:bg-white/10 p-3 rounded-lg transition-all duration-300">
              <div className="h-8 w-8 flex-shrink-0">
                <img src={fblogo} alt="thiraiyal facebook logo" className="w-full h-full object-contain" />
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-hoverColor transition-all whitespace-nowrap cursor-pointer text-sm lg:text-base font-medium"
              >
                Clinic Name
              </a>
            </div> */}
            
            {/* YouTube - Commented */}
            {/* <div className="flex gap-3 items-center group hover:bg-white/10 p-3 rounded-lg transition-all duration-300">
              <div className="h-8 w-8 flex-shrink-0">
                <img src={youtubelogo} alt="thiraiyal youtube logo" className="w-full h-full object-contain" />
              </div>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-hoverColor whitespace-nowrap transition-all cursor-pointer text-sm lg:text-base font-medium"
              >
                Clinic Name
              </a>
            </div> */}
            
          </nav>
        </div>

        {/* Contact Section */}
        <div className="w-full lg:w-1/3">
          <h1 className="font-bold text-xl lg:text-2xl pb-4 text-white border-b-2 border-hoverColor/30 inline-block mb-6">
            Contact Us
          </h1>
          <nav className="flex flex-col gap-4">
            
            {/* Address */}
            <div className="group hover:bg-white/10 p-3 rounded-lg transition-all duration-300">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 text-hoverColor mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <Link 
                  to="/" 
                  spy={true} 
                  smooth={true} 
                  duration={500}
                  className="text-sm lg:text-base text-gray-200 hover:text-white transition-colors cursor-pointer leading-relaxed"
                >
                  <div className="space-y-1">
                    <div className="font-semibold text-hoverColor">
                      Eh.Dr.K.R.SENTHIL KUMAR<br />
                      B.LAKSHMI
                    </div>
                    <div>
                      Address: SARA ELECTRO HERBS NO .6 .POONIAMMAN KOVIL STREET PUZTHIVAKKAM CHENNAI 91
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Email */}
            <div className="group hover:bg-white/10 p-3 rounded-lg transition-all duration-300">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-hoverColor flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <a 
                  href="mailto:Senthilsaikumar@gmail.com"
                  className="text-sm lg:text-base text-gray-200 hover:text-hoverColor transition-colors cursor-pointer"
                >
                  Senthilsaikumar@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="group hover:bg-white/10 p-3 rounded-lg transition-all duration-300">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-hoverColor flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <a 
                  href="tel:+919840529941"
                  className="text-sm lg:text-base text-gray-200 hover:text-hoverColor transition-colors cursor-pointer"
                >
                  +91 9840529941
                </a>
              </div>
            </div>
            
          </nav>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-white/20 bg-black/20">
        <p className="text-center py-6 text-sm lg:text-base text-gray-300">
          @copyright developed by{' '}
          <span className="text-hoverColor font-semibold hover:text-white transition-colors cursor-pointer">
            Wandering Coders
          </span>{' '}
          | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;