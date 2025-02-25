import { Link } from "react-router-dom";
import { GiHouse } from "react-icons/gi";
import 'animate.css'

const EstateDetails = ({estate}) => {

    const {description,img_url,estate_title,segment_name,status,area,id}=estate;

    return (
        <div className="font-medium border p-[10px] md:p-[20px] rounded-xl md:mx-[4px]" >
            <img className="w-full h-[300px] rounded-xl" src={img_url} alt="" />
            <h1 className="flex items-center gap-2 text-[20px] my-[10px]"><GiHouse></GiHouse><strong>{estate_title}</strong> </h1>
            <h1 className="my-[10px] text-[20px]"><strong>Segment:</strong> {segment_name}</h1>
            <h1 className="my-[20px] font-normal text-justify">{description.slice(0,200)}   .....</h1>
            <div className="my-[10px] flex flex-col md:flex-row items-center md:justify-between text-[20px]">
                <h1><strong>For: </strong> {status}</h1>
                <h1><strong>Area: </strong> {area} sq/ft</h1>
            </div>
            <div className="animate__rollOut">
            <Link className="bg-gradient-to-r from-red-600 to-red-800 mt-[20px] py-3 pr-5 flex justify-end text-white rounded-lg" to={`/moreOnEstate/${id}`}>View Property</Link>
            </div>
        </div>
    );
};

export default EstateDetails;