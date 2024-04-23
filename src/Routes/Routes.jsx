import Layout from "../Layout";
import {createBrowserRouter} from "react-router-dom";

import Dashboard from "../Screens/Dashboard";
import Customers from "../Screens/Customers";
import Orders from "../Screens/Orders";
import Settings from "../Screens/Settings";
import Security from "../Components/Security"
import Billing from "../Components/Billing";
import Plans from "../Components/Plans";
import Shopping from "../Components/Shopping";


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
        children:[
         {
          path:"/user",
          element: <Settings />,
         },
         {
          path: "/security",
          element: <Security />,
         },
         {
          path:"/billing-tax",
          element:<Billing />,
         },
         {
          path:"/plans",
          element: <Plans />,
         },
         {
          path:"/shop",
          element: <Shopping />,
         }
        ]
      },
    ],
  },
]);
