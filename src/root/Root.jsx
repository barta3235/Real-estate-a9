import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Root = () => {
    return (
        <div>
            <ToastContainer></ToastContainer>
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