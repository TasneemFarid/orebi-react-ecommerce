import React from "react";
import { Outlet } from "react-router-dom";

const RootLayouts = () => {
  return (
    <>
      <div>Navbar</div>
      <Outlet />
      <div>Footer</div>
    </>
  );
};

export default RootLayouts;
