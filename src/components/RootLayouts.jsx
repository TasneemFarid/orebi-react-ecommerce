import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import Searchbar from "./layouts/Searchbar";

const RootLayouts = () => {
  return (
    <>
      <Navbar />
      <Searchbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayouts;
