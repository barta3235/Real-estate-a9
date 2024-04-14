import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div>
            <div>
               <Navbar></Navbar>
            </div>
            <div className="h-[90px]">

            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;