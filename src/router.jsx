import React from "react";

import FlightsPage from "./pages/FlightsPage";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/error-pages/ErrorPage";

export default createBrowserRouter([
  {
    path: "/",
    element: <FlightsPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/flights",
        element: <FlightsPage />,
      },
    ],
  },
]);
