import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";


// https://i.ibb.co/sPKRN0g/wave2.png

const UserProfile = () => {

    const {user}=useContext(AuthContext);
    const {displayName,email,photoURL}=user

    return (
        <div className="hero min-h-screen bg-base-200" style={{backgroundImage: `url(https://i.ibb.co/sPKRN0g/wave2.png)`}}>
            <Helmet>
                 <title>South Stay | User Profile</title>
            </Helmet>
            <div className="hero-content flex-col md:flex-row p-0">
                <img src={photoURL} className="animate__zoomInUp animate__animated md:w-[300px] rounded-full shadow-2xl mb-[20px] md:mb-[20px]" />
                <form className="md:ml-[30px] animate__zoomInDown animate__animated">
                    <h1 className="text-3xl md:text-5xl font-bold ">Hello, <span className="text-red-700">{displayName}</span></h1>
                    <p className="text-[20px] font-medium mb-7"></p>
                    <div className="border p-2 rounded-xl bg-gradient-to-r from-red-800 to-red-500 text-white w-full">
                      <h1 className=" font-medium text-[16px] md:text-[20px]"><span className="font-bold">User name: </span>{displayName}</h1>
                      <h1 className="mt-5 font-medium text-[16px] md:text-[20px]"><span className="font-bold">Email: </span>{email}</h1>
                      <h1 className="mt-5 font-medium text-[16px] md:text-[20px] w-[200px]"><span className="font-bold">PhotoURL: </span><span className="whitespace-normal break-words">{photoURL}</span></h1>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserProfile;