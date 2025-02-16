import React from "react";
import { Link } from "react-scroll";
import fblogo from '../assets/fblogo.webp'
import instalogo from '../assets/instagramlogo.webp'
import whatsapplogo from '../assets/whatsapplogo.webp'
import youtubelogo from '../assets/youtubelogo.webp'

const Footer = () => {
  return (
    <div className=" bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 ">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">Clinic Name</h1>
          <p className=" text-sm">
            Our team of dedicated doctors, each specializing in unique fields
            such as orthopedics, cardiology, pediatrics, neurology, dermatology,
            and more.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
            Social Media
          </h1>
          <nav className=" flex flex-col w-fit gap-2">
            <div className="flex gap-2 items-center h-[30px] w-[30px]">
              <img src={instalogo} alt="thiraiyal instagram logo" />
              <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Clinic Name
            </a>
            </div>
            
            <div className="flex gap-2 items-center h-[30px] w-[30px]">
              <img src={whatsapplogo} alt="thiraiyal whatsapp logo" />
              <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-hoverColor transition-all whitespace-nowrap cursor-pointer"
            >
              Clinic Name
            </a>
            </div>
            <div className="flex gap-2 items-center h-[30px] w-[30px]">
              <img src={fblogo} alt="thiraiyal facebook logo" />
              <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-hoverColor transition-all whitespace-nowrap cursor-pointer"
            >
              Clinic Name
            </a>
            </div>
            <div className="flex gap-2 items-center h-[30px] w-[30px]">
              <img src={youtubelogo} alt="thiraiyal youtube logo" />
              <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-hoverColor whitespace-nowrap transition-all cursor-pointer"
            >
              Clinic Name
            </a>
            </div>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
              Address
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              clinicname@gmail.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              <p>+91 9999999999</p>
              <p>+91 9999999999</p>
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          @copyright developed by
          <span className=" text-hoverColor">Wandering Coders</span> | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
