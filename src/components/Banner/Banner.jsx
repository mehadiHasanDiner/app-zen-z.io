import React from "react";
import heroImage from "./../../assets/hero.png";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <h1 className="text-5xl font-bold text-center">
        We Build <br /> <span className="color-primary">Productive</span> Apps
      </h1>
      <p className="text-center text-gray-400">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div>
        <button></button>
      </div>
      <img className="block mx-auto" src={heroImage} alt="" />
    </div>
  );
};

export default Banner;
