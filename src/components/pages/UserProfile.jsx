import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Helmet } from "react-helmet-async";
import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";


// https://i.ibb.co/sPKRN0g/wave2.png

const UserProfile = () => {

    const { user } = useContext(AuthContext);
    const { displayName, email, photoURL } = user

    return (
        <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url(https://i.ibb.co/sPKRN0g/wave2.png)` }}>
            <Helmet>
                <title>South Stay | User Profile</title>
            </Helmet>
            <div className="hero-content flex-col md:flex-col lg:flex-row p-0">
                <img src={photoURL} className="animate__zoomInUp animate__animated md:w-[300px] rounded-full shadow-2xl mb-[20px] md:mb-[20px]" />
                <form className="md:ml-[30px] animate__zoomInDown animate__animated md:flex md:flex-col md:items-center lg:block">
                    <h1 className="text-3xl md:text-5xl font-bold mb-[20px] md:text-center lg:text-start">Hello, <span className="text-red-700">{displayName? displayName : 'User'}</span></h1>
                    <div className="border p-2 rounded-xl bg-gradient-to-r from-red-800 to-red-500 text-white md:w-[500px]">
                        <h1 className=" font-medium text-[16px] md:text-[20px] flex items-center gap-[5px] w-full"><IoMdPerson className="text-2xl"></IoMdPerson><span className="font-semibold">User name: </span><span className=" text-black bg-white rounded-lg p-1"> {displayName? displayName : 'User'}</span></h1>
                        <h1 className="mt-5 font-medium text-[16px] md:text-[20px] flex items-center gap-[5px] w-full"><MdEmail className="text-2xl"></MdEmail><span className="font-bold">Email: </span><span className=" text-black bg-white rounded-lg p-1"> {email ? email : 'No email found'}</span></h1>
                        <div className="mt-5 font-medium text-[16px] md:text-[20px] flex items-center gap-[5px] w-full">
                            <div className="flex gap-[5px]"><IoMdPhotos className="text-2xl"></IoMdPhotos><h1>PhotoURL: </h1></div>
                            <div className="overflow-x-scroll w-[200px] md:w-full text-black bg-white rounded-lg p-1 border-[5px]"> {photoURL}</div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserProfile;