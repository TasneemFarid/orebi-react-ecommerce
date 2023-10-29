import React from "react";

const Button = ({ text, className }) => {
  return (
    <button
      className={`py-4 px-6 bg-dark text-ash border-solid border-black font-dm text-sm font-bold hover:bg-white hover:text-black hover:border-black duration-500 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
