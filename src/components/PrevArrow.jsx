import React from "react";
import {AiOutlineArrowLeft} from "react-icons/ai"

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`bg-[#a09b9b] text-white w-14 h-14 rounded-full flex justify-center items-center ${props.class}`}
      onClick={onClick}
    >
      <AiOutlineArrowLeft />
    </div>
  );
};

export default PrevArrow;
