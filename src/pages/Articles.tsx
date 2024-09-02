import React from "react";
import CheungChap from "../assets/articles/CheungChap.jpg";
import Detail from "../components/Detail";
function Articles() {
  return (
    <div className="flex flex-row justify-between ">
      <div className="w-1/2">
        <img
          src={CheungChap}
          alt="CheungChap"
          className=" h-screen w-full p-5"
        />
      </div>
      <Detail />
    </div>
  );
}

export default Articles;
