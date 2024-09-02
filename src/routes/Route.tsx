import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
// import Type from "../components/Type/TypeOfTree";
import Types from "../pages/Types";
import AboutUs from "../pages/AboutUs";
import Tree from "../pages/Tree";

const RouteNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/type" element={<Types />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/type/tree" element={<Tree />} />
    </Routes>
  );
};

export default RouteNavigation;
