import React, { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { pagename } from "../../slices/breadcrumbSlices";
import { decrement, increment, removeFromCart } from "../../slices/cartSlices";
import Container from "../Container";
import Flex from "../Flex";

const Searchbar = () => {
  let [open, setOpen] = useState(false);
  let dispatch = useDispatch();
  let handleBreadCrumb = (name) => {
    dispatch(pagename(name));
  };
  let cart = useSelector((state) => state.cart.cartitem);
  let handleIncrement = (item) => {
    dispatch(increment(item));
  };
  let handleDecrement = (item) => {
    dispatch(decrement(item));
  };

  let [total, setTotal] = useState(0);
  useEffect(() => {
    let total = 0;
    cart.map((item) => {
      total += item.price * item.quantity;
    });
    setTotal(total);
  }, [cart]);

  return (
    <section className="py-6 mb-32 bg-ash">
      <Container>
        <Flex className="justify-between items-center">
          <Flex className="w-1/5 gap-2.5 items-center">
            <FiMenu />
            Shop by Category
          </Flex>
          <div className="w-3/5 relative">
            <input
              type="text"
              placeholder="Search Products"
              className="w-full px-5 py-4"
            />
            <BsSearch className="absolute top-1/2 -translate-y-1/2 right-4" />
          </div>
          <Flex className="w-1/5 gap-10 justify-end">
            <Flex>
              <Link onClick={() => handleBreadCrumb("Sign Up")} to="/sign-up">
                <BiSolidUser />
              </Link>
              <AiFillCaretDown />
            </Flex>
            <FaShoppingCart onClick={() => setOpen(true)} />
            {cart.length}
          </Flex>
        </Flex>
        {open && (
          <div className="w-2/6 bg-gray-700 h-screen absolute top-0 right-0 z-10 p-5">
            <FaShoppingCart onClick={() => setOpen(false)} />
            <ul className="flex justify-between bg-ash py-5 px-2">
              <li>Product</li>
              <li>Price</li>
              <li>Quantity</li>
              <li>Subtotal</li>
              <li>Action</li>
            </ul>
            {cart.length > 0 ? (
              cart.map((item) => (
                <ul className="flex justify-between items-center text-white py-5 px-2 border-t border-solid border-white">
                  <li>{item.title}</li>
                  <li>{item.price}</li>
                  <li className="border border-solid border-white py-1 px-5">
                    <button
                      className="mr-2"
                      onClick={() => handleDecrement(item)}
                    >
                      -
                    </button>
                    {item.quantity}
                    <button
                      className="ml-2"
                      onClick={() => handleIncrement(item)}
                    >
                      +
                    </button>
                  </li>
                  <li>{item.price * item.quantity}</li>
                  <li onClick={() => dispatch(removeFromCart(item))}>
                    <IoMdClose className="text-2xl" />
                  </li>
                </ul>
              ))
            ) : (
              <h3 className="text-white text-center pt-5">Cart is Empty</h3>
            )}
            <h3 className="absolute bottom-5 right-5 text-white">
              Total: {total}
            </h3>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Searchbar;
