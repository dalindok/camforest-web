import React from "react";
import logo from "../../assets/pageHomepage/logo.png";
import { TbLanguage } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

function TapBar() {
  const navigation = useNavigate();
  const onNavigateHome = () => {
    navigation("home");
  };
  const onNavigateAbout = () => {
    navigation("about");
  };
  const onNavigateType = () => {
    navigation("type");
  };
  return (
    <div className="justify-between flex flex-row seld-center pt-3 px-5">
      <img src={logo} alt="logo page" className="w-8 h-8 rounded-full" />
      <div className="flex space-x-8 font-bold">
        <button onClick={onNavigateHome} className="">
          Home
        </button>
        <button onClick={onNavigateType} className="">
          Type
        </button>
        <button onClick={onNavigateAbout} className="">
          About Us
        </button>
      </div>
      <TbLanguage className="w-8 h-8" />
    </div>
  );
}

export default TapBar;
