import { Link } from "react-router-dom";
import { FaHouseCrack } from "react-icons/fa6";
import { FaFacebook, FaInstagram,FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="py-[120px] bg-red-800 flex flex-col md:flex-row justify-center px-[5px]">
            <div className="mb-[35px] md:mb-0 md:border-r-2 md:pr-[40px]">
                <h1 className="mb-[10px]"><a href="/" className="text-3xl md:text-4xl font-bold flex text-white items-center gap-2">South Stay<FaHouseCrack></FaHouseCrack></a></h1>
                <div className="flex flex-col md:flex-row gap-5 mt-5 mb-[20px] ">
                    <Link className="text-[18px] text-white hover:bg-red-900 p-[6px] pl-0 rounded-xl" to='/'>Home</Link>
                    <Link className="text-[18px] text-white hover:bg-red-900 md:p-[6px] rounded-xl" to='/'>Contact Us</Link>
                    <Link className="text-[18px] text-white hover:bg-red-900 md:p-[6px] rounded-xl" to='/'>About</Link>
                </div>
                <h1 className="text-white text-[18px]"><strong>Hotmail:</strong> southstay@hotmail.com</h1>
            </div>

            <hr className="mb-[35px] md:mb-0 w-3/4 mx-auto flex md:hidden" />

            <div className="md:pl-[40px] border-l-2">
                 <h1 className="text-[25px] text-white font-semibold mb-[10px]">Connect with us</h1>
                 <button className="text-white text-[20px] flex items-center gap-2 mb-[8px] p-1 hover:bg-red-900 rounded-xl"><FaFacebook></FaFacebook>Facebook</button>
                 <button className="text-white text-[20px] flex items-center gap-2 mb-[8px] p-1 hover:bg-red-900 rounded-xl"><FaTwitter></FaTwitter>Twitter</button>
                 <button className="text-white text-[20px] flex items-center gap-2 p-1 hover:bg-red-900 rounded-xl"><FaInstagram></FaInstagram>Instagram</button>
            </div>

        </div>
    );
};

export default Footer;