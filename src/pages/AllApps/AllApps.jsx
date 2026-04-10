import React from "react";
import { useLoaderData } from "react-router";
import Apps from "../Apps/Apps";

const AllApps = () => {
  const allAppsData = useLoaderData();
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="space-y-2">
        {" "}
        <h2 className="text-4xl font-bold text-center">Our All Applications</h2>
        <p className="text-sm text-gray-500 text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8">
        {allAppsData.map((app) => (
          <Apps key={app.id} app={app} pathAll="showAll"></Apps>
        ))}
      </div>
    </div>
  );
};

export default AllApps;
