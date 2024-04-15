import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaHouseCrack } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const img="https://i.ibb.co/X7K2KK0/sss.jpg";

const Navbar = () => {

    const navlinks = <div>
        <NavLink to='/' className={({isActive})=> isActive? 'text-[19px] mr-5 font-semibold border border-red-700 text-red-700 rounded-2xl p-3': 'text-[19px] mr-5 font-semibold rounded-2xl p-3'}>Home</NavLink>
        <NavLink to='/updateProfile' className={({isActive})=> isActive? 'text-[19px] mr-5 font-semibold border border-red-700 text-red-700 rounded-2xl p-3': 'text-[19px] mr-5 font-semibold rounded-2xl p-3'}>Update Profile</NavLink>
        <NavLink to='/userProfile' className={({isActive})=> isActive? 'text-[19px] font-semibold border border-red-700 text-red-700 rounded-2xl p-3': 'text-[19px] font-semibold rounded-2xl p-3'}>User Profile</NavLink>
    </div>

    const {user,logOut}=useContext(AuthContext);

    const handleSignOut=()=>{
        logOut()
        .then((result)=>{
             console.log(result.user);
        })
        .catch((error)=>{
             console.log(error.message);
        })
    }


    return (
        <div className="navbar bg-white h-[85px] fixed z-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Link className="text-[18px] font-semibold py-[8px] pl-[7px] border-b rounded-lg" to='/'>Home</Link>
                        <Link className="text-[18px] font-semibold py-[8px] pl-[7px] border-b rounded-lg" to='/login'>Login</Link>
                        <Link className="text-[18px] font-semibold py-[8px] pl-[7px] border-b rounded-lg" to='/register'>Sign Up</Link>
                        <Link className="text-[18px] font-semibold py-[8px] pl-[7px] border-b rounded-lg" to='/userprofile'>User Profile</Link>
                        <Link className="text-[18px] font-semibold py-[8px] pl-[7px] border-b rounded-lg" to='/updateprofile'>Update Profile</Link>
                        {
                            user && <Link className="text-[18px] font-semibold py-[8px] pl-[7px] border-b rounded-lg" onClick={handleSignOut}>Logout</Link>
                        }
                    </ul>
                </div>
                <a href="/" className="text-3xl font-bold text-red-700 flex items-center gap-2">South Stay<FaHouseCrack className="hidden md:flex"></FaHouseCrack></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="avatar">
                    <div className=" w-[49px] rounded-full mr-2">
                        {
                            user ? <img src={user.photoURL} /> : <img src={img} />
                        }
                    </div>
                </div>
                {
                    user ? <Link onClick={handleSignOut} className="btn text-[19px] hidden md:flex hover:bg-red-700 hover:text-white">Logout</Link>
                    : <Link to='/login' className="btn text-[19px] hidden md:flex hover:bg-red-700 hover:text-white">Login</Link>
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Navbar;