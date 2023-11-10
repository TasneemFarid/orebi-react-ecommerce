import React from "react";
import Flex from "./Flex";
import { useSelector } from "react-redux";

const Breadcrumb = () => {
   const pagename = useSelector((state) => console.log(state.breadcrumb.name));
  return (
     
    <Flex>
      <p> {pagename}</p>
      <p className="first-letter:uppercase ml-1">
        {window.location.pathname.replace("/", "").replace("-", " ")}
      </p>
    </Flex>
  );
};

export default Breadcrumb;
