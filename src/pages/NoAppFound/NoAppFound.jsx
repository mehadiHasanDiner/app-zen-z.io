import React from "react";
import pageNotFound from "./../../assets/app-not-found.jpg";
import { useNavigate } from "react-router";

const NoAppFound = ({ id, searchText }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#eae9ee] flex flex-col  h-screen">
      <div className="w-11/12 mx-auto ">
        <img className="w-4/12 block mx-auto" src={pageNotFound} alt="" />
      </div>
      <h3 className="text-3xl text-center text-purple-700 my-2">
        <span className="font-bold italic">[{id || searchText}]</span> App is
        not found
      </h3>
      <p className="text-center text-gray-500 italic text-lg">
        The app your are looking for is not found
      </p>
      <button
        onClick={() => navigate("/")}
        className="btn btn-primary block mx-auto my-3"
      >
        Home Page
      </button>
    </div>
  );
};

export default NoAppFound;
