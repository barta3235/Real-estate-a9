import { useLoaderData, useParams } from "react-router-dom";
import { GiHouse } from "react-icons/gi";
import { Helmet } from "react-helmet-async";
import 'animate.css'

const MoreOnEstate = () => {

    const { id } = useParams();
    const intId = parseInt(id)
    const data = useLoaderData();

    const targetEstate = data.find((adata) => adata.id === intId);
    console.log(targetEstate);

    const { description, img_url, estate_title, segment_name, status, area,price,location,facilities } = targetEstate;

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-[40px] mx-[5px] md:mx-[6px]">
            <Helmet>
                 <title>South Stay | Details</title>
            </Helmet>
            <div className="col-span-2 animate__slideInUp animate__animated">
                <img className="rounded-xl w-full h-full" src={img_url} alt="" />
            </div>

            <div className="col-span-2 animate__slideInDown animate__animated">
                <h1 className="flex items-center gap-2 text-[25px] my-[10px] bg-red-700 py-[5px] text-white rounded-xl pl-1"><GiHouse></GiHouse><strong>{estate_title}</strong> </h1>
                <h1 className="my-[10px] text-[24px]"><strong>Segment:</strong> {segment_name}</h1>
                <h1 className="my-[22px] font-normal text-justify">{description}</h1>

                <hr className="mb-[10px]" />
                <div className="flex flex-col text-center md:flex-row">
                {
                    facilities.map((item,idx)=> <h1 className="inline mr-6 p-1 bg-red-700 text-white rounded-xl" key={idx}><strong>#{item}</strong></h1>)
                }
                </div>
                <hr className="mt-[10px]" />

                <div className="mt-[20px] mb-[10px] flex flex-col md:flex-row items-center md:justify-between text-[22px]">
                    <h1><strong>For: </strong> {status}</h1>
                    <h1><strong>Area: </strong> {area} sq/ft</h1>
                </div>
                <h1 className="my-[15px] font-medium text-[22px] text-red-800 animate__bounceIn animate__animated"><strong>Price:</strong> ${price} </h1>
                <h1 className="my-[15px] text-[22px]"><strong>Location:</strong> {location} </h1>
              

            </div>
        </div>
    );
};

export default MoreOnEstate;