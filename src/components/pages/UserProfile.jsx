import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const UserProfile = () => {

    const {user}=useContext(AuthContext);
    const {displayName,email,photoURL}=user

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col md:flex-row">
                <img src={photoURL} className="md:max-w-sm rounded-full shadow-2xl mb-[20px] md:mb-[20px]" />
                <form className="md:ml-[30px]">
                    <h1 className="text-5xl font-bold ">Hello, <span className="text-red-700">{displayName}</span></h1>
                    <p className="text-[20px] font-medium mb-7"></p>
                    <div className="border p-2 rounded-xl bg-gradient-to-r from-red-800 to-red-500 text-white">
                      <h1 className=" font-medium text-[20px]"><span className="font-bold">User name: </span>{displayName}</h1>
                      <h1 className="mt-5 font-medium text-[20px]"><span className="font-bold">Email: </span>{email}</h1>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserProfile;