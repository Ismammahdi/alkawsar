import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";

import Category from "../pages/category/Category";
import Allissues from "../pages/Allissues";
import SeptemBor from "../pages/SeptemBor";
import Agost from "../pages/Agost";
import Julie from "../pages/Julie";
import June from "../pages/June";
import More from "../pages/More";

const mainRoutes = [
  { path: "/", element: <Home /> },
  { path: "/ismam", element: <Category /> },
  { path: "/allIssues", element: <Allissues /> },
  { path: "/septembor", element: <SeptemBor /> },
  { path: "/agost", element: <Agost /> },
  { path: "/julie", element: <Julie /> },
  { path: "/june", element: <June /> },
  { path: "/more", element: <More /> },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: mainRoutes,
  },
]);

export default router;
