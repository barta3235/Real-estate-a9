import 'animate.css'

// https://i.ibb.co/f8LXXNv/wave3.png

const EstateIntro = () => {
    return (
        <div className="my-[15px] md:mx-[10px] flex justify-center animate__slideInLeft animate__animated"  style={{backgroundImage: `url(https://i.ibb.co/f8LXXNv/wave3.png)`}}>
                 <h1 className="py-[40px] px-[10px] md:px-[0px] text-[30px] font-bold text-white">We make luxury affordable</h1>
            </div>
    );
};

export default EstateIntro;