import React from "react";
import Flex from "./Flex";

const Breadcrumb = () => {
  return (
    <Flex className="mt-3 text-lightash">
      Home /
      <p className="first-letter:uppercase ml-1">
        {window.location.pathname.replace("/", "").replace("-", " ")}
      </p>
    </Flex>
  );
};

export default Breadcrumb;
