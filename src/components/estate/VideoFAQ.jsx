import video from '../../assets/images/3b90fa4d-13ac-4020-b589-20999fcc901f.mp4'


const VideoFAQ = () => {
    return (
        <div className="my-[30px] mx-[5px] md:mx-[10px] grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className='col-span-2 h-full border bg-red-800 rounded-lg' >
                <video className='h-full' controls autoPlay muted  src={video}></video>
            </div>
            <div className='col-span-2'>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-[17px] font-medium">
                    What amenities can I expect in your luxury apartments?
                    </div>
                    <div className="collapse-content">
                        <p className='bg-red-800 rounded-lg p-2 text-white'> Our luxury apartments feature gourmet kitchens, spa-like bathrooms, floor-to-ceiling windows, fitness centers, swimming pools, landscaped outdoor spaces, and concierge services.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-[17px] font-medium">
                    What sets your luxury apartments apart from other residential properties?
                    </div>
                    <div className="collapse-content">
                        <p className='bg-red-800 rounded-lg p-2 text-white'>Our luxury apartments stand out for their exceptional quality, attention to detail, and commitment to providing a luxurious lifestyle.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-[17px] font-medium">
                    How do I schedule a tour of your luxury apartments?
                    </div>
                    <div className="collapse-content">
                        <p className='bg-red-800 rounded-lg p-2 text-white'>Visit our website or contact our agents or office to arrange a convenient time for a personalized tour.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-[17px] font-medium">
                    Are your luxury apartments located in desirable neighborhoods?
                    </div>
                    <div className="collapse-content">
                        <p className='bg-red-800 rounded-lg p-2 text-white'>Yes, our luxury apartments are strategically located in sought-after neighborhoods, offering convenience and proximity to amenities.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-[17px] font-medium">
                    Do your luxury apartments offer flexible lease options?
                    </div>
                    <div className="collapse-content">
                        <p className='bg-red-800 rounded-lg p-1 text-white'>Yes, we offer flexible lease options to accommodate your lifestyle. Whether you're looking for short-term or long-term leasing, we have options tailored to your needs. Contact our leasing office for more information on lease terms and availability.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoFAQ;