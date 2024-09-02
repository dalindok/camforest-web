import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
// import Type from "../components/Type/TypeOfTree";
import Types from "../pages/Types";
import AboutUs from "../pages/AboutUs";

const RouteNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/type" element={<Types />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
};

export default RouteNavigation;
