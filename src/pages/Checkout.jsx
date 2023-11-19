import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Input from "../components/Input";
import Subheading from "../components/Subheading";
import TextArea from "../components/TextArea";

const Checkout = () => {
  const pageName = useSelector((state) => state.breadcrumb.previousname);
  return (
    <Container>
      <Subheading text="Checkout" />
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
        Have a coupon?{" "}
        <span className="text-dark">Click here to enter your code</span>
      </p>
      <div className="border-t border-solid border-offwhite py-12">
        <Subheading text="Billing Details" className="mb-12" />
        <Flex className="flex-wrap justify-between max-w-1055">
          <div className="w-48">
            <Input title="First Name *" type="text" placeholder="First Name" />
          </div>
          <div className="w-48">
            <Input title="Last Name *" type="text" placeholder="Last Name" />
          </div>
        </Flex>
        <div className="max-w-1055">
          <Input
            title="Company Name (optional)"
            type="text"
            placeholder="Company Name"
          />
        </div>
        <div className="max-w-1055">
          <Input title="Country *" type="text" placeholder="Please select" />
        </div>
        <div className="max-w-1055">
          <Input
            title="Street Address *"
            type="text"
            placeholder="House number and street name"
          />
        </div>
        <div className="max-w-1055">
          <Input
            title=""
            type="text"
            placeholder="Apartment, suite, unit etc. (optional)"
          />
        </div>
        <div className="max-w-1055">
          <Input title="Town/City *" type="text" placeholder="Town/City" />
        </div>
        <div className="max-w-1055">
          <Input title="County (optional)" type="text" placeholder="County" />
        </div>
        <div className="max-w-1055">
          <Input title="Post Code *" type="number" placeholder="Post Code" />
        </div>
        <div className="max-w-1055">
          <Input title="Phone *" type="tel" placeholder="Phone" />
        </div>
        <div className="max-w-1055">
          <Input title="Email Address *" type="email" placeholder="Email" />
        </div>
      </div>
      <div className="py-32">
        <Subheading text="Additional Information" className="mb-10" />
        <div className="max-w-1055">
          <TextArea
            title="Other Notes (optional)"
            placeholder="Notes about your order, e.g. special notes for delivery."
            className="row-span-5"
          />
        </div>
      </div>
      <div>
        <Subheading text="Your Order" className="mb-10" />
        <div className="">
     
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
