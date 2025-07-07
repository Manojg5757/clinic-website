import React from "react";
import Button from "../layouts/Button";

const Blogs = () => {
  const reviews = [
    {
      name: "Rajesh Kumar",
      condition: "Diabetes Control Success",
      review: "Dr. Senthil's electropathy treatment helped me manage my diabetes naturally. My sugar levels are stable without side effects. Highly recommend!",
      rating: 5,
      location: "Chennai"
    },
    {
      name: "Priya Sharma",
      condition: "Skin Problem Solved",
      review: "Suffered from eczema for years. After 3 months of electropathy treatment, my skin is clear and healthy. Amazing natural healing!",
      rating: 5,
      location: "Karur"
    },
    {
      name: "Arun Patel",
      condition: "Digestive Issues Cured",
      review: "Chronic acidity and bloating troubled me daily. Electropathy medicines provided complete relief. No more digestive problems at all!",
      rating: 5,
      location: "Trichy"
    },
    {
      name: "Meera Devi",
      condition: "Stress Relief Achieved",
      review: "Work stress was affecting my health badly. The natural remedies helped me feel calm and energetic again. Life-changing experience!",
      rating: 5,
      location: "Salem"
    },
    {
      name: "Suresh Babu",
      condition: "Joint Pain Relief",
      review: "Arthritis pain made walking difficult. Electropathy treatment reduced inflammation naturally. I can move freely without pain now!",
      rating: 5,
      location: "Coimbatore"
    },
    {
      name: "Lakshmi Menon",
      condition: "Respiratory Health Improved",
      review: "Breathing problems from asthma were limiting my activities. Plant-based treatment improved my lung function significantly. Grateful for the care!",
      rating: 5,
      location: "Madurai"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({length: 5}, (_, i) => (
      <span key={i} className={`text-xl ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Patient Reviews
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Real experiences from patients who found healing through electropathy.
          </p>
        </div>
        {/* <div className=" mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div> */}
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
          {reviews.map((review, index) => (
            <div key={index} className=" w-full lg:w-1/4 p-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] space-y-3 rounded-lg cursor-pointer hover:scale-105 transition duration-300 ease-in-out bg-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-backgroundColor rounded-full flex items-center justify-center text-white font-semibold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{review.name}</h3>
                    <p className="text-xs text-gray-500">{review.location}</p>
                  </div>
                </div>
                <div className="flex">
                  {renderStars(review.rating)}
                </div>
              </div>
              <h2 className=" text-lg font-semibold text-backgroundColor">{review.condition}</h2>
              <p className=" text-sm text-gray-600 leading-relaxed">
                "{review.review}"
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-gray-400">Verified Patient</span>
                <span className="text-xs text-backgroundColor font-medium">⚡ Electropathy</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;