import React from "react";

const Button = ({ title, type = "button", onClick, className = "", disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor transition duration-300 ease-in-out ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
