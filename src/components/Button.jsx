import React from 'react'
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <Link to="/">
      {" "}
      <button
        className={`py-4 px-6 bg-black text-white border-solid border-black font-dm text-sm font-bold hover:bg-white hover:text-black hover:border-black duration-500`}
      >
        Add to card
      </button>
    </Link>
  );
}

export default Button