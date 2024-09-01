import React from "react";
import logo from "../../assets/pageHomepage/logo.png";
import { TbLanguage } from "react-icons/tb";

function TapBar() {
  return (
    <div className="justify-between flex flex-row seld-center pt-3 px-5">
      <img src={logo} alt="logo page" className="w-8 h-8 rounded-full" />
      <div className="flex space-x-8 font-bold">
        <p className="underline"> Home</p>
        <p>Tree</p>
        <p>About</p>
      </div>
      <TbLanguage className="w-8 h-8" />
    </div>
  );
}

export default TapBar;
