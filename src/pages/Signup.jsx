import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../components/Button";
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
      <div className="border-t border-solid border-offwhite py-12">
        <div>
          <input id="test" type="checkbox" className="peer/test" hidden />
          <label
            for="test"
            className="relative pl-5 before:w-3 before:h-3 before:border before:border-solid before:border-para before:absolute before:top-1.5 before:left-0 before:content[''] after:w-2 after:h-2 after:border after:border-solid after:border-white after:absolute after:top-2 after:left-0.5 after:content[''] after:peer-checked/test:bg-para"
          >
            I have read and agree to the Privacy Policy
          </label>
        </div>
        <div className="my-5">
          <span className="mr-8">Subscribe Newsletter</span>
          <input
            id="yes"
            name="news"
            type="radio"
            className="peer/yes"
            hidden
          />
          <label
            for="yes"
            className="relative pl-5 pr-10 before:w-3 before:h-3 before:border before:border-solid before:border-para before:absolute before:top-1.5 before:left-0 before:content[''] after:w-2 after:h-2 after:border after:border-solid after:border-white after:absolute after:top-2 after:left-0.5 after:content[''] after:peer-checked/yes:bg-para"
          >
            Yes
          </label>
          <input id="no" name="news" type="radio" className="peer/no" hidden />
          <label
            for="no"
            className="relative pl-5 before:w-3 before:h-3 before:border before:border-solid before:border-para before:absolute before:top-1.5 before:left-0 before:content[''] after:w-2 after:h-2 after:border after:border-solid after:border-white after:absolute after:top-2 after:left-0.5 after:content[''] after:peer-checked/no:bg-para"
          >
            No
          </label>
        </div>
        <Button text="Log in" />
      </div>
    </Container>
  );
};

export default Signup;
