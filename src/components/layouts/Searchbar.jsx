import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import Container from "../Container";
import Flex from "../Flex";

const Searchbar = () => {
  return (
    <section className="py-6 bg-ash">
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
              <Link to="/sign-up">
                <BiSolidUser />
              </Link>
              <AiFillCaretDown />
            </Flex>
            <FaShoppingCart />
          </Flex>
        </Flex>
      </Container>
    </section>
  );
};

export default Searchbar;
