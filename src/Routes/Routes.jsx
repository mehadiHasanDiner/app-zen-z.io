import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AppDetails from "../pages/appDetails/appDetails";
import AllApps from "../pages/AllApps/AllApps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/appsData.json"),
        Component: Home,
      },
      {
        path: "appDetails",
        loader: () => fetch("/appsData.json"),
        Component: AllApps,
      },
      {
        path: "appDetails/:id",
        loader: () => fetch("/appsData.json"),
        Component: AppDetails,
      },
    ],
    errorElement: <ErrorPage></ErrorPage>,
  },
]);
