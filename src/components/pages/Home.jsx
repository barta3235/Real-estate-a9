import Estates from "../estate/Estates";
import Slider from "../slider/Slider";
import { Helmet } from "react-helmet-async";

const Home = () => {
    return (
        <div>
            <Helmet>
                 <title>South Stay | Home</title>
            </Helmet>
            <Slider></Slider>
            <Estates></Estates>
        </div>
    );
};

export default Home;