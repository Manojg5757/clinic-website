import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
          Electropathy is a revolutionary natural healing system that harnesses 
          the power of plant-based remedies to restore your body's natural 
          balance and vitality. Our specialized practice focuses exclusively on 
          electropathic treatments, offering safe, effective, and side-effect-free 
          solutions for various health conditions through nature's own healing 
          mechanisms.
        </p>
        <p className="text-justify lg:text-start">
          Dr. K.R. Senthil Kumar and B. Lakshmi bring years of dedicated 
          experience in electropathy, combining traditional knowledge with 
          modern understanding of natural healing. Our clinic specializes in 
          treating chronic diseases, digestive disorders, skin conditions, 
          stress-related ailments, and various other health issues using 
          carefully selected plant-based remedies.
        </p>
        <p className="text-justify lg:text-start">
          At Sara Electro Herbs, we believe in the body's innate ability to 
          heal itself when given the right natural support. Our personalized 
          approach ensures each patient receives customized treatment plans 
          tailored to their specific needs. Experience the gentle yet powerful 
          healing of electropathy in a caring, professional environment dedicated 
          to your wellness journey.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;