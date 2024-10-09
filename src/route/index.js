import React from "react";
import { Navigate } from "react-router-dom";
const Home = React.lazy(() => import("@/views/home/index.jsx"));
const Detail = React.lazy(() => import("@/views/detail/index.jsx"));
const Entire = React.lazy(() => import("@/views/entire/index.jsx"));
const NotFound = React.lazy(() => import("@/views/notFound/index.jsx"));
const router = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/entire",
    element: <Entire />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
export default router;
