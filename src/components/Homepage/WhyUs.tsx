import React from "react";
import WhyUS from "../../assets/pageHomepage/WhyUs.jpg";

function WhyUs() {
  return (
    <div className="flex flex-row mt-10 bg-white">
      <img src={WhyUS} alt="righ side of Why us" className="w-1/2 h-1/2 p-2" />
      <div className="text-center p-20">
        <p className="font-bold text-4xl p-4 pb-7">Why Us?</p>
        <p className="text-xl">
          At CamForest we inspire and educate people to appreciate and protect
          forests.
        </p>
        <p className="text-xl">
          Our informative and interactive platform offers a unique learning
          experience for nature lovers of all ages.
        </p>
        <p className="text-xl">
          Join us in exploring, understanding, and conserving the world’s
          forests.
        </p>
      </div>
    </div>
  );
}

export default WhyUs;
