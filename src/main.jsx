import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello From React router</div>,
  },
  {
    path: "/about",
    element: <h1> About us This is react router dom </h1>,
  },
  {
    path: "/contact",
    element: <h3>Contact us on Mobile</h3>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
