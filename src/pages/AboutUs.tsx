import React from "react";
import Aboutus from "../components/about_us/Aboutus";
import Mission from "../components/about_us/Mission";
import Ourteam from "../components/about_us/Ourteam";
import TapBar from "../components/home_page/TapBar";

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
