import React from "react";

const TextArea = ({title, placeholder, className}) => {
  return (
    <div>
      <h5 className="font-dm font-bold text-base">{title}</h5>
      <textarea
        className="w-100 mb-6 border-b border-offwhite py-4 placeholder:font-dm placeholder:text-sm"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

export default TextArea;
