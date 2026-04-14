import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {
  getInstalledApp,
  removeInstalledAppFromLS,
} from "../../utilities/utilitiesFunc";
import Installed from "../Installed/Installed";
import { IoMdArrowDropdown } from "react-icons/io";
import { ToastContainer } from "react-toastify";

const Installation = () => {
  const appsData = useLoaderData();
  const [installedAppData, setInstalledAppData] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const installedAppId = getInstalledApp();
    const installedAppIdToNo = installedAppId.map((id) => parseInt(id));

    const installedApp = appsData.filter((app) =>
      installedAppIdToNo.includes(app.id)
    );
    setInstalledAppData(installedApp);
  }, []);
  // console.log(installedAppData);

  const handleSort = (type) => {
    setSort(type);
    if (type === "Low-High") {
      const sortLowToHigh = [...installedAppData].sort(
        (a, b) => a.size - b.size
      );
      setInstalledAppData(sortLowToHigh);
    }
    if (type === "High-Low") {
      const sortLowToHigh = [...installedAppData].sort(
        (a, b) => b.size - a.size
      );
      setInstalledAppData(sortLowToHigh);
    }
  };

  const handleUnInstallation = (id) => {
    const remainingInstalledApp = installedAppData.filter(
      (app) => app.id !== id
    );
    removeInstalledAppFromLS(String(id));
    setInstalledAppData(remainingInstalledApp);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <title>Installed App</title>
      <ToastContainer />

      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-center">Your Installed Apps</h2>
        <p className="text-sm text-gray-500 text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="my-4 flex sm:flex-row flex-col justify-between items-center">
        <h4 className="text-xl font-bold">
          ({installedAppData.length}) Apps Found
        </h4>

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort by {sort ? sort : ""} <IoMdArrowDropdown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => handleSort("Low-High")}>
              <a>Low-High</a>
            </li>
            <li onClick={() => handleSort("High-Low")}>
              <a>High-Low</a>
            </li>
          </ul>
        </div>
      </div>
      {installedAppData.map((data) => (
        <Installed
          key={data.id}
          data={data}
          handleUnInstallation={handleUnInstallation}
        ></Installed>
      ))}
    </div>
  );
};

export default Installation;
