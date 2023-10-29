import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import logo from "../assets/logo.svg";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import List from "./List";
import PortionHeading from "./PortionHeading";

const Footer = () => {
  return (
    <footer className="bg-ash py-14">
      <Container>
        <Flex className="">
          <div className="w-2/12">
            <PortionHeading text="MENU" className="mb-4" />
            <ul className="flex flex-col gap-x-10">
              <List text="Home" className="text-lightash" />
              <List text="Shop" className="text-lightash" />
              <List text="About" className="text-lightash" />
              <List text="Contacts" className="text-lightash" />
              <List text="Journal" className="text-lightash" />
            </ul>
          </div>
          <div className="w-2/12">
            <PortionHeading text="SHOP" className="mb-4" />
            <ul className="flex flex-col gap-x-10">
              <List text="Category 1" className="text-lightash" />
              <List text="Category 2" className="text-lightash" />
              <List text="Category 3" className="text-lightash" />
              <List text="Category 4" className="text-lightash" />
              <List text="Category 5" className="text-lightash" />
            </ul>
          </div>
          <div className="w-2/12">
            <PortionHeading text="HELP" className="mb-4" />
            <ul className="flex flex-col gap-x-10">
              <List text="Privacy Policy" className="text-lightash" />
              <List text="Terms & Conditions" className="text-lightash" />
              <List text="Special E-shop" className="text-lightash" />
              <List text="Shipping" className="text-lightash" />
              <List text="Secure Payments" className="text-lightash" />
            </ul>
          </div>
          <div className="w-3/12">
            <PortionHeading text="(052) 611-5711" />
            <PortionHeading text="company@domain.com" className="mb-4" />
            <ul className="flex flex-col gap-x-10">
              <List
                text="575 Crescent Ave. Quakertown, PA 18951"
                className="text-lightash"
              />
            </ul>
          </div>
          <div className="w-3/12">
            <Image src={logo} />
          </div>
        </Flex>
        <Flex className="justify-between mt-6">
          <Flex className="w-1/4 gap-6">
            <FaFacebookF className="text-dark" />
            <FaLinkedinIn className="text-dark" />
            <FaInstagram className="text-dark" />
          </Flex>
          <div className="w-1/4">
            <p className="font-dm font-normal text-[14px] text-lightash">
              2020 Orebi Minimal eCommerce Figma Template by Adveits
            </p>
          </div>
        </Flex>
      </Container>
    </footer>
  );
};

export default Footer;
