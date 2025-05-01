import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "swiper/swiper-bundle.css";
import "./assets/css/main.css";
import "./assets/css/Footer.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
