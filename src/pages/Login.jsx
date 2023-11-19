import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Input from "../components/Input";
import Subheading from "../components/Subheading";
import Button from "../components/Button";

const Login = () => {
  const pageName = useSelector((state) => state.breadcrumb.previousname);
  return (
    <Container>
      <Subheading text="Login" />
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
        <Subheading text="Returning Customer" className="mb-12" />
        <Flex className="flex-wrap justify-between">
          <div className="w-48">
            <Input
              title="Email address"
              type="email"
              placeholder="company@domain.com"
            />
          </div>
          <div className="w-48">
            <Input
              title="Password"
              type="password"
              placeholder="Enter Password"
            />
          </div>
        </Flex>
        <Button text="Log in" className="mt-5"
        />
      </div>
      <div className="border-t border-solid border-offwhite py-12">
        <Subheading text="New Customer" />
        <p className="max-w-644 mt-8 mb-11">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the.
        </p>
        <Button text="Continue" />
      </div>
    </Container>
  );
};

export default Login;
