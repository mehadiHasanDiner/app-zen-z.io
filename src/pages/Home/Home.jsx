import React, { useState } from "react";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
import Apps from "../Apps/Apps";
import { useLoaderData } from "react-router";

const Home = () => {
  const appsData = useLoaderData();
  const [appsDataCount, setAppsDataCount] = useState(8);
  const slicedAppData = appsData.slice(0, appsDataCount);
  // console.log(slicedAppData);

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
          {slicedAppData.map((app) => (
            <Apps key={app.id} app={app}></Apps>
          ))}
        </div>
        <div className="block text-center">
          {appsDataCount <= slicedAppData.length && (
            <button
              className="btn bg-linear-to-r from-purple-600 to-pink-500 text-white"
              onClick={() => setAppsDataCount(appsDataCount + 8)}
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
