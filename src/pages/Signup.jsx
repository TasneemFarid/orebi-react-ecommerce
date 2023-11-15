import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Input from "../components/Input";
import Subheading from "../components/Subheading";

const Signup = () => {
  const pageName = useSelector((state) => state.breadcrumb.previousname);
  return (
    <Container>
      <Subheading text="Sign Up" />
      <Flex className="mt-3 text-lightash">
        <Link to={pageName == "Home" ? "/" : `/${pageName.toLowerCase()}`}>
          {pageName}
        </Link>
        /
        <p className="first-letter:uppercase ml-1">
          {window.location.pathname.replace("/", "").replace("-", " ")}
        </p>
      </Flex>
      <p className="font-dm font-normal text-base max-w-644 mt-32 mb-16 text-para">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the.
      </p>
      <div className="border-t border-solid border-offwhite py-12">
        <Subheading text="Your Personal Details" className="mb-12" />
        <Flex className="flex-wrap justify-between">
          <div className="w-48">
            <Input title="First Name" type="text" placeholder="First Name" />
          </div>
          <div className="w-48">
            <Input title="Last Name" type="text" placeholder="Last Name" />
          </div>
          <div className="w-48">
            <Input
              title="Email address"
              type="email"
              placeholder="company@domain.com"
            />
          </div>
          <div className="w-48">
            <Input
              title="Telephone"
              type="tel"
              placeholder="Your phone number"
            />
          </div>
        </Flex>
      </div>
      <div className="border-t border-solid border-offwhite py-12">
        <Subheading text="New Customer" className="mb-12" />
        <Flex className="flex-wrap justify-between">
          <div className="w-48">
            <Input
              title="Address 1"
              type="text"
              placeholder="4279 Zboncak Port Suite 6212"
            />
          </div>
          <div className="w-48">
            <Input title="Address 2" type="text" placeholder="-" />
          </div>
          <div className="w-48">
            <Input title="City" type="text" placeholder="Your City" />
          </div>
          <div className="w-48">
            <Input title="Post Code" type="number" placeholder="00955" />
          </div>
          <div className="w-48">
            <Input title="Division" type="text" placeholder="Please select" />
          </div>
          <div className="w-48">
            <Input title="District" type="text" placeholder="Please select" />
          </div>
        </Flex>
      </div>
      <div className="border-t border-solid border-offwhite py-12">
        <Subheading text="New Customer" className="mb-12" />
        <Flex className="flex-wrap justify-between">
          <div className="w-48">
            <Input title="Password" type="password" placeholder="Password" />
          </div>
          <div className="w-48">
            <Input
              title="Repeat Password"
              type="password"
              placeholder="Repeat Password"
            />
          </div>
        </Flex>
      </div>
      <div className="border-t border-solid border-offwhite py-12">bg</div>
    </Container>
  );
};

export default Signup;
