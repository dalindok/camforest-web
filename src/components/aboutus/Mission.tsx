import React from "react";
import jab from "../../assets/photoaboutus/jab.png";
import kury from "../../assets/photoaboutus/kury.png";
import tectorius from "../../assets/photoaboutus/tectorius.png";

function Mission() {
  return (
    <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto h-full flex flex-col justify-center px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="text-left">
            <h2 className="text-5xl font-bold">Our Mission</h2>
            <p className="text-2xl mt-4 max-w-md">
              To connect people with the world of trees by providing detailed
              information on various species. We offer insights into the
              benefits of each tree, such as their ecological roles and uses,
              and guide you on where you can find and observe them.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 pr-4">
            <img src={jab} alt="Tree 1" className="rounded-lg shadow-lg" />
            <img src={kury} alt="Tree 2" className="rounded-lg shadow-lg" />
            <img
              src={tectorius}
              alt="Tree 3"
              className="col-span-2 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
