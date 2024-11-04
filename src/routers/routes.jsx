import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";

import NewComponent from "../components/shared/NewComponent";
import Category from "../pages/category/Category";
import Allissues from "../pages/Allissues";

const mainRoutes = [
  { path: "/", element: <Home /> },
  { path: "/ismam", element: <Category /> },
  { path: "/allIssues" , element:<Allissues/>}
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: mainRoutes,
  },
]);

export default router;
