import wave3 from '../../assets/images/wave3.svg'
import 'animate.css'

const EstateIntro3 = () => {
    return (
        <div className="my-[15px] md:mx-[10px] flex justify-end md:justify-center animate__slideInRight animate__animated"  style={{backgroundImage: `url(${wave3})`}}>
                 <h1 className="py-[40px] px-[10px] md:px-[0px] text-[30px] font-bold text-white text-end">Our Agents</h1>
            </div>
    );
};

export default EstateIntro3;