import React from "react";
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { downloadFormation } from "../../utilities/utilitiesFunc";

const Installed = ({ data }) => {
  const { id, image, title, ratingAvg, downloads, size } = data;

  const handleUnInstallation = (id) => {
    console.log(id);
  };

  return (
    <div className="bg-white flex h-20 gap-4 my-4 p-1 justify-between rounded ">
      <div className="flex gap-4 w-10/12">
        <img className="" src={image} alt="" />
        <div className="space-y-2">
          <h5 className="font-bold text-xl">{title}</h5>
          <div className="flex gap-3 items-center">
            <p className="flex gap-1 bg-gray-200 rounded items-center p-1 text-green-800">
              <FaDownload size={18} color="green" />
              {downloadFormation(downloads)}
            </p>
            <p className="flex gap-1 bg-gray-200 rounded items-center p-1 text-orange-400">
              <FaStar size={18} color="orange" />
              {ratingAvg}
            </p>

            <p>{size}MB</p>
          </div>
        </div>
      </div>
      <div className="">
        <button
          onClick={() => handleUnInstallation(id)}
          className="btn bg-[#00D390] text-white text-lg mt-4 "
        >
          Uninstall
        </button>
      </div>
    </div>
  );
};

export default Installed;
