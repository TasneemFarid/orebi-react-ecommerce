import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="bg-[#a09b9b] text-white w-14 h-14 rounded-full flex justify-center items-center"
      onClick={onClick}
    >
      <AiOutlineArrowRight />
    </div>
  );
};

export default NextArrow;
