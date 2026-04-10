import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Apps from "../Apps/Apps";
import { FaSearch } from "react-icons/fa";

const AllApps = () => {
  const allAppsData = useLoaderData();
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [displayApps, setDisplayApps] = useState(allAppsData);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      if (searchText === "") {
        setDisplayApps(allAppsData);
      } else {
        const filtered = allAppsData.filter((app) =>
          app.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setDisplayApps(filtered);
      }
      setLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchText, allAppsData]);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="space-y-2">
        {" "}
        <h2 className="text-3xl font-bold text-center">Our All Applications</h2>
        <p className="text-sm text-gray-500 text-center">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="my-4 flex sm:flex-row flex-col justify-between items-center">
        <h4 className="text-xl font-bold">({displayApps.length}) Apps Found</h4>

        <label className="input">
          <span>
            <FaSearch />
          </span>
          <input
            type="search"
            required
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading ? (
          <>
            <div className="flex col-span-full justify-center mt-10">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          </>
        ) : (
          displayApps.map((app) => (
            <Apps key={app.id} app={app} pathAll="showAll"></Apps>
          ))
        )}

        {displayApps.length === 0 && <p>No apps found 😢</p>}
      </div>
    </div>
  );
};

export default AllApps;
