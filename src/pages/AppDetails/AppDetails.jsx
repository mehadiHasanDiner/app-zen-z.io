import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import { FaDownload } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import {
  downloadFormation,
  getInstalledApp,
  installAppToLS,
} from "../../utilities/utilitiesFunc";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const appIdToNo = parseInt(id);
  const appData = useLoaderData();

  const [isInstalled, setIsInstalled] = useState(false);
  const [clicked, setClicked] = useState(false);

  const singleApp = appData.find((app) => app.id === appIdToNo);
  // console.log(singleApp);

  const handleInstallation = (appId) => {
    console.log(clicked);
    installAppToLS(appId);
  };

  useEffect(() => {
    const installedAppId = getInstalledApp();
    const installedAppIdToNo = installedAppId.map((id) => parseInt(id));
    const installedApp = installedAppIdToNo.includes(appIdToNo);
    setIsInstalled(installedApp);
  }, []);

  if (!singleApp) {
    return <h2>No item found 😨⛳😨</h2>;
  }
  const {
    image,
    companyName,
    reviews,
    downloads,
    ratingAvg,
    size,
    description,
    ratings,
    title,
  } = singleApp;

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div className="flex flex-col md:flex-row w-full justify-center items-center">
        <div className="mr-8 w-1/4">
          <img className="w-full" src={image} alt="" />
        </div>
        <div className="w-3/4 space-y-2">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mb-4 text-sm">
            Developed by: <span className="color-primary">{companyName}</span>
          </p>
          <div className="border-[0.5px] border-[#001931] opacity-10"></div>
          <div className="mt-6 flex gap-10">
            <div className="space-y-2">
              <p>
                <FaDownload size={24} color="green" />
              </p>
              <p>Downloads</p>
              <h3 className="font-bold text-2xl">
                {downloadFormation(downloads)}
              </h3>
            </div>
            <div className="space-y-2">
              <p>
                <FaStar size={24} color="orange" />
              </p>
              <p>Average Ratings</p>
              <h3 className="font-bold text-2xl">{ratingAvg}</h3>
            </div>
            <div className="space-y-2">
              <p>
                <MdReviews size={24} color="purple" />
              </p>
              <p>Reviews</p>
              <h3 className="font-bold text-2xl">
                {downloadFormation(reviews)}
              </h3>
            </div>
          </div>
          {isInstalled ? (
            <>
              <button
                disabled={clicked}
                className="btn bg-[#00D390] text-white mt-4 text-lg"
              >
                Installed
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  handleInstallation(id);
                  setClicked(true);
                }}
                disabled={clicked}
                className="btn bg-[#00D390] text-white mt-4 text-lg"
              >
                {clicked ? `Installed` : `Install Now ${size} MB`}
              </button>
            </>
          )}
        </div>
      </div>
      <div className="border-[0.5px] border-[#001931] opacity-10 my-5"></div>
      <div>
        <BarChart
          layout="vertical"
          style={{
            width: "100%",
            maxWidth: "100%",
            maxHeight: "70vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={ratings}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width="auto" />
          <Tooltip />
          <Legend />

          <Bar
            dataKey="count"
            fill="#82ca9d"
            activeBar={{ fill: "gold", stroke: "purple" }}
            radius={[0, 10, 10, 0]}
          />
          {/* <RechartsDevtools /> */}
        </BarChart>
      </div>
      <div className="border-[0.5px] border-[#001931] opacity-10 my-5"></div>
      <div className="space-y-3">
        <p className="font-bold ">Description</p>
        <p className="text-gray-400 text-sm ">
          {description} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Eaque quibusdam eligendi quaerat molestias quas ea, necessitatibus
          dicta quod aut illum consequuntur porro placeat veritatis aspernatur
          beatae optio omnis in vel laborum commodi. Inventore omnis quae minus
          nam alias suscipit nostrum dicta accusamus facilis ipsum, debitis,
          doloremque a optio sit voluptatum maiores repellendus? Velit modi vero
          odit aliquam voluptatem quod tempora cupiditate minima labore saepe,
          assumenda sequi nisi? Quaerat odit ipsam quam repellat nesciunt ad
          temporibus minima provident consequatur? Adipisci ex facilis
          consequatur ipsa laudantium vel placeat quas deleniti minus earum
          error sed non, porro incidunt aliquid architecto quo ducimus
          necessitatibus rerum? Repellendus non nihil eum ducimus itaque
          deserunt. <br />
          <br />
          Inventore repellat exercitationem voluptatum corporis corrupti qui
          totam odit iure saepe adipisci dolorem itaque, possimus soluta
          excepturi culpa expedita reiciendis vitae nulla earum? Sint possimus
          voluptatem facilis obcaecati doloremque nesciunt ad quae non
          dignissimos reprehenderit autem tempore magnam, illum culpa expedita
          voluptas excepturi minus eaque aut! Ex distinctio suscipit, facilis
          minima, reiciendis nihil pariatur voluptatibus est harum nam ipsam
          doloribus velit? Blanditiis reprehenderit ipsum perspiciatis mollitia
          doloremque, maiores iure! Reiciendis itaque voluptas porro cupiditate
          iure in at veritatis temporibus! Dolor consectetur vitae, maxime ut
          eaque ex voluptatum eos atque nisi, sequi fugit.
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
