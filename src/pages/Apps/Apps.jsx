import React from "react";
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const Apps = ({ app }) => {
  const { image, title, ratingAvg, downloads } = app;

  const downloadFormation = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    } else {
      return num;
    }
  };

  return (
    <div className="card  shadow-sm hover:shadow-xl ">
      <figure className="bg-gray-200 pb-3 ">
        <img
          className=" w-5/6 p-3 rounded-xl pb-0"
          src={image}
          alt="app image"
        />
      </figure>
      <div className="card-body p-2">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between">
          <button className="btn bg-gray-200 text-[#00D390]">
            <IoMdDownload /> {downloadFormation(downloads)}
          </button>
          <button className="btn bg-gray-200 text-[#FF8811]">
            <FaStar /> {ratingAvg}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Apps;
