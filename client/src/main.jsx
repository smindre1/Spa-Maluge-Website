import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.jsx";
import BookNow from "./pages/BookNow.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import History from "./pages/History.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Refund from "./pages/Refund.jsx";
import Manicure from "./pages/Manicure.jsx";
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
import Anticellulite from "./pages/services/Anticellulite.jsx";
import Aroma from "./pages/services/Aroma.jsx";
//Management/Settings Page Imports
import Management from "./pages/Management.jsx";
import Portal from './pages/Portal.jsx';
import Employees from './pages/Employees.jsx';
// import Profile from './pages/Profile.jsx';
import Reservation from './pages/Reservation.jsx';
import Reservations from './pages/Reservations.jsx';
import Settings from './pages/Settings.jsx';
import Salt from './pages/services/Salt.jsx';
import Medical from './pages/services/Medical.jsx';
import Shiatsu from './pages/services/Shiatsu.jsx';
import Orange from './pages/services/Orange.jsx';
import Myofascial from "./pages/services/Myofascial.jsx";
import Neuromuscular from "./pages/services/Neuromuscular.jsx";
import Orthopedic from "./pages/services/Orthopedic.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
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
        path: "/manicures",
        element: <Manicure />,
      },      
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/cancellation-and-refund-policy",
        element: <Refund />,
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
        path: "/services/sports-massage",
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
      },
      {
        path: "/services/anticellulite-massage",
        element: <Anticellulite />,
      },
      {
        path: "/services/aroma-therapy-massage",
        element: <Aroma />,
      },
      {
        path: "/services/himalayan-salt-stone-massage",
        element: <Salt />,
      },
      {
        path: "/services/medical-massage-therapy",
        element: <Medical />,
      },
      {
        path: "/services/shiatsu-massage",
        element: <Shiatsu />,
      },
      {
        path: "/services/hot-orange-massage",
        element: <Orange />,
      },
      {
        path: "/services/myofascial-release-therapy",
        element: <Myofascial />,
      },
      {
        path: "/services/neuromuscular-massage-therapy",
        element: <Neuromuscular />,
      },
      {
        path: "/services/orthopedic-massage",
        element: <Orthopedic />,
      },
      // //Management/Settings Pages
      {
        path: "/management",
        element: <Management />,
      },
      {
        path: "/management/login-or-signup",
        element: <Portal />,
      },
      {
        path: "/management/employee-roster",
        element: <Employees />,
      },
      // {
      //   path: "/management/me",
      //   element: <Profile />,
      // },
      {
        path: "/management/reservations",
        element: <Reservations />,
      },
      {
        path: "/management/reservations/:reservationId",
        element: <Reservation />,
      },
      {
        path: "/management/settings",
        element: <Settings />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
