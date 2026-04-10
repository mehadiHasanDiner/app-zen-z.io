import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="font-display">
      <div className="border border-[#E9E9E9]  ">
        <Header></Header>
      </div>
      <div className="mt-24">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
