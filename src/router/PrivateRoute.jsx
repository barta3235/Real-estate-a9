import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const location=useLocation();
    const {user,loading}=useContext(AuthContext);

    console.log(location)
    if(loading){
        return <div className="flex justify-center items-center min-h-screen"><div className="flex loading loading-spinner text-6xl w-16"></div></div>
    }
    if(user){
        return children
    }


    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;