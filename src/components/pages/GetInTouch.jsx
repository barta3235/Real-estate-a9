import { useLoaderData } from "react-router-dom";
import GetMoreInTouch from "./GetMoreInTouch";
import 'animate.css'
import EstateIntro3 from '../estate/EstateIntro3'

const GetInTouch = () => {


    const data = useLoaderData();
    const agentsData = data;

    return (
        <div>
            <EstateIntro3></EstateIntro3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3 mb-[40px] animate__slideInUp animate__animated">
                {
                    agentsData.map((agentData, idx) => <GetMoreInTouch key={idx} agentData={agentData}></GetMoreInTouch>)
                }
            </div>
        </div>
    );
};

export default GetInTouch;