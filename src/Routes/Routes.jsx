import Layout from "../Layout";
import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../Screens/Dashboard";
import Customers from "../Screens/Customers";
import Orders from "../Screens/Orders";
import Settings from "../Screens/Settings";
import Security from "../Components/Security";
import Billing from "../Components/Billing";
import Plans from "../Components/Plans";
import Shopping from "../Components/Shopping";
import Personal from "../Components/Personal";
import Register from "../Components/Register";
import Login from "../Components/Login";

export const router = createBrowserRouter([
  {
    path: "auth/login",
    element: <Login />,
  },
  {
    path: "auth/register",
    element: <Register />,
  },
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
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/settings",
        element: <Settings />,
        children: [
          {
            path: "",
            element: <Personal />,
          },
          {
            path: "security",
            element: <Security />,
          },
          {
            path: "billing-tax",
            element: <Billing />,
          },
          {
            path: "plans",
            element: <Plans />,
          },
          {
            path: "shop",
            element: <Shopping />,
          },
        ],
      },
    ],
  },
]);
