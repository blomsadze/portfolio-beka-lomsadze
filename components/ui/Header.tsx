import React from "react";
import { Navbar } from "./Navbar";

const Header = () => {
  return (
    <div className="w-full bg-[#0a0a0a] flex justify-center items-center bg-fwhite shadow-md fixed top-0 left-0 right-0 z-50">
      <Navbar />
    </div>
  );
};

export { Header };
