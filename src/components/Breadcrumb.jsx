import React from "react";

const Breadcrumb = () => {
  return (
    <div className="first-letter:uppercase">
      Home > {window.location.pathname.replace("/", "").replace("-", " ")}
    </div>
  );
};

export default Breadcrumb;
