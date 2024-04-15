import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

import './styles.css';
import { FaArrowCircleRight } from "react-icons/fa";

// import required modules
import { Mousewheel, Pagination } from 'swiper/modules';
import 'animate.css'
const Slider = () => {



    const handlelocation=()=>{
        const loc= document.getElementById('thisone');
        if(loc){
            loc.scrollIntoView({behavior:'smooth'})
        }
    };


    return (
        <div className='bg-red-700 h-[600px] rounded-2xl mb-[40px] animate__slideInDown animate__animated'>
            <Swiper
                direction={'vertical'}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='one '><p className='text-[17px] md:text-[25px] p-2 md:p-3 rounded-full font-bold text-white bg-gray-700 bg-opacity-50'>Sky view apartment</p></SwiperSlide>
                <SwiperSlide className='two '><p className='text-[17px] md:text-[25px] p-2 md:p-3 rounded-full font-bold text-white bg-gray-700 bg-opacity-50'>Luxurious mansions</p></SwiperSlide>
                <SwiperSlide className='three '><p className='text-[17px] md:text-[25px] p-2 md:p-3 rounded-full font-bold text-white bg-gray-700 bg-opacity-50'>Beachfront paradise</p></SwiperSlide>
            <SwiperSlide className='four'>
                <div className='flex items-center gap-4 text-[17px] md:text-[25px] bg-red-700 p-2 md:p-3 rounded-full font-bold text-white hover:bg-red-900'>
                <button  onClick={handlelocation}>Experience Royalty</button>
                <FaArrowCircleRight></FaArrowCircleRight>
                </div>
            </SwiperSlide>
        </Swiper>
        </div >
    );
};

export default Slider;