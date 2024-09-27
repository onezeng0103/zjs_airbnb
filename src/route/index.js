import React from "react"
import { Navigate } from "react-router-dom"
const Home = React.lazy(() => import('@/views/home/index.jsx'))
const Details = React.lazy(() => import('@/views/details/index.jsx'))
const Entire = React.lazy(() => import('@/views/entire/index.jsx'))
const NotFound = React.lazy(() => import('@/views/notFound/index.jsx'))
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
    path: "/details",
    element: <Details />,
  },
  {
    path: "/entire",
    element: <Entire />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]
export default router