import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Link } from "react-router-dom";
import Map from "../assets/map.svg";
import Button from "../components/Button";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "../components/Image";
import Input from "../components/Input";
import Subheading from "../components/Subheading";

const Contacts = () => {
  const pageName = useSelector((state) => state.breadcrumb.previousname);
  return (
    <Container>
      <Subheading text="Contacts" />
      <Flex className="mt-3 text-lightash">
        <Link to={pageName == "Home" ? "/" : `/${pageName.toLowerCase()}`}>
          {pageName}
        </Link>
        /
        <p className="first-letter:uppercase ml-1">
          {window.location.pathname.replace("/", "").replace("-", " ")}
        </p>
      </Flex>
      <div className=" py-12">
        <Subheading text="Fill up a Form" className="mt-32 mb-10" />
        <div className="w-1/2">
          <Input title="Name" type="text" placeholder="Your name here" />
        </div>
        <div className="w-1/2">
          <Input title="Email" type="email" placeholder="Your email here" />
        </div>
        <div className="w-1/2">
          <Input title="Message" type="text" placeholder="Your message here" />
        </div>
        <Button text="Post" className="mt-5" />
      </div>
      <Image src={Map} className="mt-32" />
    </Container>
  );
};

export default Contacts;
