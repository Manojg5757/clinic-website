import React, { useState } from "react";
import { createPortal } from "react-dom";
import emailjs from "emailjs-com";
import Button from "../layouts/Button";

const Contact = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userNumber: "",
    userDistrict: "",
    visitPurpose: "",
    preferredDate: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = "service_7v4jmdv";
    const templateID = "template_hif89td";
    const userID = "EX7QonUgEDJHoaE5H";

    const emailData = {
      userFirstName: formData.userFirstName,
      userLastName: formData.userLastName,
      userEmail: formData.userEmail,
      userNumber: formData.userNumber,
      userDistrict: formData.userDistrict,
      visitPurpose: formData.visitPurpose,
      preferredDate: formData.preferredDate,
    };

    emailjs
      .send(serviceID, templateID, emailData, userID)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Appointment booked successfully!");
          setLoading(false);
          closeForm();
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to book appointment. Please try again.");
          setLoading(false);
        }
      );
  };

  const modalContent = (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-[9999]">
      <div className="popup-form w-full max-w-md max-h-screen overflow-y-auto text-black scrollbar-hide bg-white rounded-xl shadow-xl">
        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          
          .custom-btn {
            background-color: #3a7bd5;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.375rem;
            font-weight: 500;
            transition: background-color 0.2s;
            text-align: center;
            border: none;
            cursor: pointer;
            width: 100%;
          }
          
          .custom-btn:hover {
            background-color: #2c5fb3;
          }
          
          .custom-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }
          
          .close-btn {
            background-color: #1f2937;
            color: white;
            padding: 0.75rem 1.5rem;
            border-radius: 0.375rem;
            font-weight: 500;
            transition: background-color 0.2s;
            text-align: center;
            border: none;
            cursor: pointer;
            width: 100%;
          }
          
          .close-btn:hover {
            background-color: #111827;
          }
          
          .close-btn:active {
            background-color: #ef4444;
          }

          @media (min-width: 640px) {
            .custom-btn,
            .close-btn {
              width: auto;
            }
          }
        `}</style>
        <form
          className="w-full space-y-5 p-5"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-semibold text-center text-gray-800">
            Book Now
          </h1>
          
          <div className="flex flex-col">
            <input
              className="py-3 px-4 bg-[#d5f2ec] rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-sm"
              type="text"
              name="userFirstName"
              id="userFirstName"
              placeholder="First Name"
              value={formData.userFirstName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="flex flex-col">
            <input
              className="py-3 px-4 bg-[#d5f2ec] rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="userLastName"
              id="userLastName"
              placeholder="Last Name"
              value={formData.userLastName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="flex flex-col">
            <input
              className="py-3 px-4 bg-[#d5f2ec] rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Your Email (Optional)"
              value={formData.userEmail}
              onChange={handleChange}
            />
          </div>
          
          <div className="flex flex-col">
            <input
              className="py-3 px-4 bg-[#d5f2ec] rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="tel"
              name="userNumber"
              maxLength={10}
              id="userNumber"
              placeholder="Phone No."
              value={formData.userNumber}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="flex flex-col">
            <input
              className="py-3 px-4 bg-[#d5f2ec] rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              name="userDistrict"
              id="userDistrict"
              placeholder="District"
              value={formData.userDistrict}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="flex flex-col">
            <select
              className="py-3 px-4 bg-[#d5f2ec] rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              name="visitPurpose"
              id="visitPurpose"
              value={formData.visitPurpose}
              onChange={handleChange}
              required
            >
              <option value="">Select Purpose of Visit</option>
              <option value="General Consultation">General Consultation</option>
              <option value="Routine Checkup">Routine Checkup</option>
              <option value="Follow-up Visit">Follow-up Visit</option>
              <option value="Diagnostic Test">Diagnostic Test</option>
              <option value="Specialist Consultation">Specialist Consultation</option>
              <option value="Emergency Care">Emergency Care</option>
              <option value="Preventive Care">Preventive Care</option>
              <option value="Chronic Disease Management">Chronic Disease Management</option>
              <option value="Mental Health Consultation">Mental Health Consultation</option>
              <option value="Other">Other</option>
            </select>
          </div>
          
          <div className="flex flex-col">
            <input
              className="py-3 px-4 bg-[#d5f2ec] rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="date"
              name="preferredDate"
              id="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              required
            />
            <label className="text-sm text-gray-600 mt-1 px-2">
              Preferred Visit Date
            </label>
          </div>
          
          <div className="flex flex-row gap-3 flex-wrap">
  <Button
    title={loading ? "Sending..." : "Book"}
    type="submit"
    disabled={loading}
    className="custom-btn px-3 py-2 text-sm"
  />
  <Button
    title="Close"
    className="close-btn !bg-red-600 px-3 py-2 text-sm"
    type="button"
    onClick={closeForm}
  />
</div>

        </form>
      </div>
    </div>
  );

  // Render the modal using React Portal to the document body
  return createPortal(modalContent, document.body);
};

export default Contact;