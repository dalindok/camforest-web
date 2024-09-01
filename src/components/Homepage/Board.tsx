import React from "react";
import leaf from "../../assets/pageHomepage/leaf.jpg";
import logo from "../../assets/pageHomepage/logo.png";

function Board() {
  return (
    <div className="relative p-5">
      <img src={leaf} alt="board" className="w-full h-screen object-cover" />
      <img
        src={logo}
        alt="logo"
        className="absolute top-10 right-72 w-60 h-auto rounded-full"
      />
      <div className="absolute top-64 right-28 p-10">
        <p className="text-4xl font-bold italic">CamForest</p>
        <p className="text-5xl m-10 font-light">We care about nature.</p>
      </div>
    </div>
  );
}

export default Board;
