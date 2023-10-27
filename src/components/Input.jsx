import React from "react";

const Input = ({ placeholder, type, title }) => {
  return (
    <>
      <h5 className="font-dm text-base">{title}</h5>
      <input
        className="border-b border-offwhite py-2 placeholder:font-dm placeholder:text-sm"
        placeholder={placeholder}
        type={type}
      ></input>
    </>
  );
};

export default Input;
