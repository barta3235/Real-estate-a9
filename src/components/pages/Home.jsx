import EstateIntro from "../estate/EstateIntro";
import Estates from "../estate/Estates";
import VideoFAQ from "../estate/VideoFAQ";
import Slider from "../slider/Slider";
import { Helmet } from "react-helmet-async";
import EstateIntro2 from "../estate/EstateIntro2";

const Home = () => {
    return (
        <div>
            <Helmet>
                 <title>South Stay | Home</title>
            </Helmet>
            <Slider></Slider>
            <EstateIntro></EstateIntro>
            <Estates></Estates>
            <EstateIntro2></EstateIntro2>
            <VideoFAQ></VideoFAQ>
        </div>
    );
};

export default Home;