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


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/moreOnEstate/:id',
            element: <MoreOnEstate></MoreOnEstate>,
            loader:()=> fetch('RealEstate.JSON')
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
          element: <UserProfile></UserProfile>
        },
        {
          path: '/updateprofile',
          element:<UpdateProfile></UpdateProfile>
        }
    ]
  },
]);

export default Router;