import React from "react";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
import Apps from "../Apps/Apps";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Card></Card>
      <div className="max-w-6xl mx-auto my-10">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-center">Trending Apps</h3>
          <p className="text-xs text-gray-500 mt-4">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
        <div>
          <Apps></Apps>
        </div>
      </div>
    </div>
  );
};

export default Home;
