import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../root/Root";
import Home from "../components/pages/Home";
import MoreOnEstate from "../components/estate/MoreOnEstate";

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
        }
    ]
  },
]);

export default Router;