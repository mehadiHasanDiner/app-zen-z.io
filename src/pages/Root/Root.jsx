import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Outlet, useNavigation } from "react-router";
import loading from "./../../assets/loading.gif";
import Loader from "../../components/Loader/Loader";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div className="font-display">
      <div className="border border-[#E9E9E9]  ">
        <Header></Header>
      </div>
      <div className="mt-24">
        {isNavigating ? <Loader src={loading} size={500} /> : <Outlet></Outlet>}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
