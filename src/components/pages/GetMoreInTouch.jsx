import { FaStar } from "react-icons/fa";

const GetMoreInTouch = ({ agentData }) => {
    const { agent_id, agent_rating, agent_experience, agent_designation, agent_photo,contact,agent_name,office_number } = agentData
    return (
            <div className="font-medium border p-[10px] md:p-[20px] rounded-xl md:mx-[4px]" style={{backgroundImage: `url(https://i.ibb.co/KG3C1hn/wave1.png)`}} >
                <img className="w-full h-[300px] rounded-xl" src={agent_photo} alt="" />
                <h1 className="flex items-center gap-2 text-[20px] my-[10px]"><strong>Agent Id:</strong> {agent_id}</h1>
                <hr />
                <h1 className="my-[15px] text-[20px]"><strong>Name: </strong> {agent_name}</h1>
                <h1 className="my-[15px] text-[20px]"><strong>Designation: </strong> {agent_designation}</h1>
                <hr />
                <h1 className="my-[15px] text-[20px]"><strong>Contact: </strong> {contact}</h1>
                <h1 className="my-[15px] text-[20px]"><strong>Office: </strong> {office_number}</h1>
                <hr />
                <h1 className="my-[20px] text-[20px] font-normal text-justify"><strong>Experience: </strong>{agent_experience}</h1>
                <hr />
                <div className="my-[10px] flex flex-col md:flex-row items-center md:justify-between text-[20px]">
                    <h1 className="flex gap-[5px] items-center"><strong>Rating: </strong> {agent_rating}<FaStar className="text-yellow-500" /></h1>
                    <h1><strong>Availability: </strong> Free</h1>
                </div>
            </div>
    );
};

export default GetMoreInTouch;