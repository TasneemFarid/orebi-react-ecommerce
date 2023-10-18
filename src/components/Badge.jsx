import React from 'react'

const Badge = ({text, className}) => {
  return <button className={`font-dm text-sm font-bold text-white bg-black py-2 px-8 absolute top-5 left-5 ${className}`}>{text}</button>;
}

export default Badge