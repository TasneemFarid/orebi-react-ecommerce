import React from "react";
import logo from "../../assets/logo.svg";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import List from "../List";

const Navbar = () => {
  return (
    <nav className="py-8">
      <Container>
        <Flex className="justify-between">
          <div className="w-1/5">
            <Image src={logo} />
          </div>
          <Flex className="w-4/5 justify-end">
            <ul className="flex gap-x-10">
              <List text="Home" />
              <List text="Shop" />
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
