import React, { useRef, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";
import { useDispatch } from "react-redux";
import productImage from "../assets/basket.png";
import { addtocart } from "../slices/cartSlices";
import Badge from "./Badge";
import Flex from "./Flex";
import Image from "./Image";
import PortionHeading from "./PortionHeading";

const Product = ({ className, heading }) => {
  let dispatch = useDispatch();
  let handleCart = () => {
    dispatch(
      addtocart({
        title: heading,
        price: 44,
        image: productImage,
        quantity: 1,
      })
    );
  };

  let [count, setCount] = useState(0);
  let [error, setError] = useState(false);
  let countRef = useRef(0);

  let handleClick1 = () => {
    count++;
    setCount(count);
  };
  let handleClick2 = () => {
    countRef.current++;
    if (countRef.current == 5) {
      setError(true);
    }
  };
  return (
    <div className={className}>
      <h1>{count}</h1>
      <button onClick={handleClick1}>Click</button>
      <h1>{countRef.current}</h1>
      <button onClick={handleClick2}>Click</button>
      {error && <p>blocked for 5 mins</p>}

      <div className="relative overflow-hidden group">
        <Image src={productImage} className="w-full" />
        <Badge text="New" />
        <div className="bg-white absolute -bottom-32 left-0 w-full p-6 group-hover:bottom-0 duration-500">
          <Flex className="items-center justify-end gap-x-2">
            <p className="mr-2 font-dm text-base font-normal text-[#767676]">
              Add to Wish List
            </p>
            <AiFillHeart />
          </Flex>
          <Flex className="items-center justify-end gap-x-2 my-3">
            <p className="mr-2 font-dm text-base font-normal text-[#767676]">
              Compare
            </p>
            <TfiReload />
          </Flex>
          <Flex className="items-center justify-end gap-x-2">
            <p
              onClick={handleCart}
              className="mr-2 font-dm text-base font-bold cursor-pointer"
            >
              Add to Cart
            </p>
            <BsFillCartFill />
          </Flex>
        </div>
      </div>
      <Flex className="justify-between mt-4">
        <PortionHeading text={heading} />
        <p className="font-dm text-base font-normal text-[#767676]">$44.00</p>
      </Flex>
    </div>
  );
};

export default Product;
