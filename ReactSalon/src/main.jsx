import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";
import BookNow from "./pages/BookNow.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Refund from "./pages/Refund.jsx";
import Services from "./pages/Services.jsx";
// All the service page imports:
import Detox from "./pages/services/Detox.jsx";
import Deep from "./pages/services/Deep.jsx";
import HotStone from "./pages/services/HotStone.jsx";
import Sport from "./pages/services/Sport.jsx";
import CBD from "./pages/services/CDB.jsx";
import Head from "./pages/services/Head.jsx";
import Prenatal from "./pages/services/Prenatal.jsx";
import Couples from "./pages/services/Couples.jsx";
import Reflexology from "./pages/services/Reflexology.jsx";
import Cupping from "./pages/services/Cupping.jsx";
import Facial from "./pages/services/Facial.jsx";
import Lymph from "./pages/services/Lymph.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1 className="display-2">Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/book-now",
        element: <BookNow />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/cancellation-and-refund-policy",
        element: <Refund />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      // Service Pages
      {
        path: "/services/detox-custom-swedish-massage",
        element: <Detox />,
      },
      {
        path: "/services/deep-tissue-massage",
        element: <Deep />,
      },
      {
        path: "/services/hot-stone-massage",
        element: <HotStone />,
      },
      {
        path: "/services/sport-massage",
        element: <Sport />,
      },
      {
        path: "/services/cbd-custom-massage",
        element: <CBD />,
      },
      {
        path: "/services/head-neck-shoulders-massage",
        element: <Head />,
      },
      {
        path: "/services/prenatal-and-postnatal-massage",
        element: <Prenatal />,
      },
      {
        path: "/services/couples-massage",
        element: <Couples />,
      },
      {
        path: "/services/reflexology-massage",
        element: <Reflexology />,
      },
      {
        path: "/services/cupping-massage",
        element: <Cupping />,
      },
      {
        path: "/services/facial-massage",
        element: <Facial />,
      },
      {
        path: "/services/lymph-drainage-massage",
        element: <Lymph />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
