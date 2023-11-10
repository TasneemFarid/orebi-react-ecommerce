import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { pagename } from "../../slices/breadcrumbSlices";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import List from "../List";

const Navbar = () => {
  let dispatch = useDispatch();
  let handleBreadCrumb = (name) => {
    dispatch(pagename(name));
  };
  return (
    <nav className="py-8">
      <Container>
        <Flex className="justify-between">
          <div className="w-1/5">
            <Image src={logo} />
          </div>
          <Flex className="w-4/5 justify-end">
            <ul className="flex gap-x-10">
              <Link onClick={() => handleBreadCrumb("Home")} to="/">
                <List text="Home" />
              </Link>
              <Link onClick={() => handleBreadCrumb("Shop")} to="/shop">
                <List text="Shop" />
              </Link>
              <List text="About" />
              <List text="Contacts" />
              <List text="Journal" />
            </ul>
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
