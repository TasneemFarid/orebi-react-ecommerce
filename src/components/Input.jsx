import React from "react";

const Input = ({ placeholder, type, title }) => {
  return (
    <>
      <h5 className="font-dm font-bold text-base">{title}</h5>
      <input
        className="w-100 mb-6 border-b border-offwhite py-4 placeholder:font-dm placeholder:text-sm"
        placeholder={placeholder}
        type={type}
      ></input>
    </>
  );
};

export default Input;
