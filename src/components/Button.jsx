import React from 'react'

const Button = () => {
  return (
    <button
      className={`py-4 px-6 bg-black text-white border-solid border-black font-dm text-sm font-bold hover:bg-white hover:text-black hover:border-black duration-500`}
    >
      Add to card
    </button>
  );
}

export default Button