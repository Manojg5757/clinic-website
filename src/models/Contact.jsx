import React, { useState } from "react";
import emailjs from "emailjs-com";
import Button from "../layouts/Button";

const Contact = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    userFirstName: "",
    userLastName: "",
    userEmail: "",
    userNumber: "",
    userDistrict: "", // Added district field
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

    // Specify only the data fields you need
    const emailData = {
      userFirstName: formData.userFirstName,
      userEmail: formData.userEmail,
      userNumber: formData.userNumber,
      userDistrict: formData.userDistrict, // Include district in email data
    };

    emailjs
      .send(serviceID, templateID, emailData, userID)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Appointment booked successfully!");
          setLoading(false);
          closeForm(); // Close form after successful submission
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Failed to book appointment. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form
          className="w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-semibold text-center text-backgroundColor">
            Book Now
          </h1>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
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
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
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
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Your Email"
              value={formData.userEmail}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
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
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="userDistrict"
              id="userDistrict"
              placeholder="District"
              value={formData.userDistrict}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex gap-5">
            <Button
              title={loading ? "Sending..." : "Book Appointment"}
              type="submit"
              disabled={loading}
            />
            <button
              className="bg-backgroundColor text-white px-10 rounded-md active:bg-red-500"
              type="button"
              onClick={closeForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
