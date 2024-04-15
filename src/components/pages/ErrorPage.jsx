import React from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import 'animate.css'

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen '>
            <Helmet>
                 <title>South Stay | Home</title>
            </Helmet>
            <h1 className='text-[180px] font-medium text-red-800 '>
                404
            </h1>
            <div>
            <Link  className='justify-center flex items-center gap-4 text-[17px] md:text-[25px] bg-red-700 p-2 md:p-3 rounded-full font-bold text-white hover:bg-red-900 md:w-[250px]'>
                <button>Return home</button>
                <FaArrowCircleRight></FaArrowCircleRight>
            </Link>
            </div>

        </div>
    );
};

export default ErrorPage;