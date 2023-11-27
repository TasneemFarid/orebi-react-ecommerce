import React, { useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { pagename } from "../../slices/breadcrumbSlices";
import Container from "../Container";
import Flex from "../Flex";

const Searchbar = () => {
  let [open, setOpen] = useState(false);
  let dispatch = useDispatch();
  let handleBreadCrumb = (name) => {
    dispatch(pagename(name));
  };
  
  let cart = useSelector((state) => state.cart.cartitem);
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
          <div className="w-2/6 bg-ash h-screen absolute top-0 right-0 z-10">
            <FaShoppingCart onClick={() => setOpen(false)} />
            <ul>
              {cart.map(item=>(
                <li>{item.title} {item.price} - {item.quantity}</li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Searchbar;
