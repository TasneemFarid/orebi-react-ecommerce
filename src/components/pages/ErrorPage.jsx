import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import error from "../../assets/404.svg";
import Button from "../Button";
import Container from "../Container";
import Image from "../Image";

const ErrorPage = () => {
  return (
    <section className="my-20">
      <Container>
        <Image src={error} />
        <div className="max-w-644 my-14">
          <p className="font-dm font-normal text-base">
            The page you were looking for couldn't be found. The page could be
            removed or you misspelled the word while searching for it. Maybe try
            a search?
          </p>
        </div>
        <div className="max-w-644 relative mb-14">
          <input
            type="text"
            placeholder="Type to search"
            className="w-full px-5 py-4 border border-solid border-offwhite"
          />
          <BsSearch className="absolute top-1/2 -translate-y-1/2 right-4" />
        </div>
        <Link to="/">
          <Button text="Back to Home" />
        </Link>
      </Container>
    </section>
  );
};

export default ErrorPage;
