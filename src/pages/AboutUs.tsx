import React from "react";
import Aboutus from "../components/aboutus/Aboutus";
import Mission from "../components/aboutus/Mission";
import Ourteam from "../components/aboutus/Ourteam";
import TapBar from "../components/Homepage/TapBar";

function AboutUsPage() {
  return (
    <div className="h-full w-screen bg-slate-100">
      <TapBar />
      <Aboutus />
      <Mission />
      <Ourteam />
    </div>
  );
}

export default AboutUsPage;
