import Layout from "../Layout";
import {createBrowserRouter} from "react-router-dom";

import Dashboard from "../Screens/Dashboard";
import Customers from "../Screens/Customers";
import Orders from "../Screens/Orders";
import Settings from "../Screens/Settings";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/Orders",
        element: <Orders />,
      },
      {
        path: "/Settings",
        element: <Settings />,
      },
    ],
  },
]);
