import React from 'react';
import logo from '../../assets/photoaboutus/2.png';
import aboutus from '../../assets/photoaboutus/aboutus.png';
import { MdOutlineLanguage } from "react-icons/md";

function Aboutus() {
  return (
    <div className="w-full h-screen flex flex-row">
      <nav className="w-full bg-white py-4 shadow-md fixed top-0 left-0 z-10">
        <div className="container mx-auto flex justify-between items-center px-6">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
          <div className="flex space-x-6">
            <a href="/home" className="text-black font-bold hover:underline">Home</a>
            <a href="/trees" className="text-black font-bold hover:underline">Trees</a>
            <a href="/about" className="text-black font-bold hover:underline">About</a>
          </div>
          <button className="text-2xl">
            <MdOutlineLanguage />
          </button>
        </div>
      </nav>
      <div className="flex-grow flex flex-col items-center justify-center bg-cover bg-center"
           style={{ backgroundImage: `url(${aboutus})` }}>
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mt-2">About Us</h1>
          <p className="text-2xl text-white mt-8">Welcome to CamForesty! Discover detailed information</p>
          <p className="text-2xl text-white mt-2">about different tree species, their benefits, and where to find them.</p>
          <p className="text-2xl text-white mt-2">We’re excited to help you explore and appreciate the beauty and importance of trees.</p>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
