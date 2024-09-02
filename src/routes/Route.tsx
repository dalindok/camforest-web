import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
// import Type from "../components/Type/TypeOfTree";
import Types from "../pages/Types";

const RouteNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/type" element={<Types />} />
    </Routes>
  );
};

export default RouteNavigation;
