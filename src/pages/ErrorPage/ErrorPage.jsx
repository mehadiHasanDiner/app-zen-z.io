import React from "react";
import pageNotFound from "./../../assets/page-not-found.jpg";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white flex flex-col items-center justify-center h-screen">
      <title>Erorr - 404</title>
      <div className="w-11/12 mx-auto ">
        <img className="w-5/12 block mx-auto" src={pageNotFound} alt="" />
      </div>
      <h3 className="text-3xl text-center font-bold text-purple-700 my-2">
        Page Not Found 😱
      </h3>
      <p className="text-center text-gray-500 italic text-lg">
        The page your are looking for is not found
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

export default ErrorPage;
