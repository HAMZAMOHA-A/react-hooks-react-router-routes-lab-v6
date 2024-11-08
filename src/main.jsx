import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";
import ErrorPage from "./pages/ErrorPage"; // We'll create this component

// Create the router with the necessary routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />, // In case of errors
  },
  {
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/movie/:id", // Movie page with dynamic URL parameter `id`
    element: <Movie />,
    errorElement: <ErrorPage />,
  },
]);

// Render the RouterProvider
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
