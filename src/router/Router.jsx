import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../root/Root";
import Home from "../components/pages/Home";
import MoreOnEstate from "../components/estate/MoreOnEstate";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";
import UserProfile from "../components/pages/UserProfile";
import UpdateProfile from "../components/pages/UpdateProfile";
import ErrorPage from "../components/pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import GetInTouch from "../components/pages/GetInTouch";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/moreOnEstate/:id',
            element:<PrivateRoute>
              <MoreOnEstate></MoreOnEstate>
            </PrivateRoute>,
            loader:()=> fetch('/RealEstate.JSON')
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/register',
          element:<Register></Register>
        },
        {
          path:'/userprofile',
          element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
        },
        {
          path: '/updateprofile',
          element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
        },
        {
          path: '/getintouch',
          element: <PrivateRoute><GetInTouch></GetInTouch></PrivateRoute>,
          loader:()=>fetch('/Agent.JSON')
        }
    ]
  },
]);

export default Router;