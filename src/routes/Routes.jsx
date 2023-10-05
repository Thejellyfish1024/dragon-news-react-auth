import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import ReadMore from "../pages/Home/ReadMore/ReadMore";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/register",
          element:<Register></Register>
        },
        {
          path:"/about",
          element:<About></About>
        },
        {
          path:"/career",
          element:<Career></Career>
        },
        {
          path:"/card/:id",
          element:<PrivateRoute><ReadMore></ReadMore></PrivateRoute>,
          loader:() => fetch('/news.json')
        }

      ]
    },
  ]);