import React, { useState } from "react";
import Button from "../layouts/Button";
import Contact from "../models/Contact";

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    console.log("Opening form..."); // Debug line
    setShowForm(true);
  };

  const closeForm = () => {
    console.log("Closing form..."); // Debug line
    setShowForm(false);
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
          Natural Healing Through Electropathy - Your Path to Holistic Wellness
        </h1>
        <p className="text-lg leading-relaxed">
          Experience the power of electropathy, a revolutionary natural healing system that harnesses plant-based remedies to restore your body's natural balance. Our specialized electropathy treatments offer safe, effective, and side-effect-free solutions for chronic diseases, digestive disorders, skin conditions, and stress-related ailments.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
         
          <button 
            onClick={openForm}
            className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out"
          >
            Book Now
          </button>
          
         
        </div>
      </div>

      {/* Debug: Show form state */}
      <div className="fixed top-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded">
        Form State: {showForm ? "OPEN" : "CLOSED"}
      </div>

      {/* Contact form rendering */}
      {showForm && <Contact closeForm={closeForm} />}
    </div>
  );
};

export default Home;