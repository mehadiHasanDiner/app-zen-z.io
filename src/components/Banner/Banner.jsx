import React from "react";
import heroImage from "./../../assets/hero.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto mt-7">
      <h1 className="text-5xl font-bold text-center">
        We Build <br /> <span className="color-primary">Productive</span> Apps
      </h1>
      <p className=" max-w-3xl mx-auto text-center text-gray-400 mt-3">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting.Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="text-center my-5 space-x-4">
        <Link to="https://play.google.com/store/apps" target="_blank">
          <button className="btn">
            <img
              className="w-2/9"
              src="https://img.icons8.com/?size=100&id=rZwnRdJyYqRi&format=png&color=000000"
              alt=""
            />
            Google Play
          </button>
        </Link>
        <Link to="https://www.apple.com/app-store" target="_blank">
          <button className="btn">
            <img
              className="w-2/9"
              src="https://img.icons8.com/?size=100&id=4PbFeZOKAc61&format=png&color=000000"
              alt=""
            />
            App Store
          </button>
        </Link>
      </div>
      <img className="block mx-auto w-2/4" src={heroImage} alt="" />
    </div>
  );
};

export default Banner;
