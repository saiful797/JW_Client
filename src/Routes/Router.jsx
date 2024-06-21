import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomePage from "../Pages/Home/HomePage";
import DataTable from "../Pages/DataTable/DataTable";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
          path: '/',
          element: <HomePage />
        },
        {
          path:"/data-table",
          element: <DataTable />
        }
      ]
    },
]);