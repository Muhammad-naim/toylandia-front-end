import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {  useEffect, useState } from 'react';




const SponsorsPage = () => {
    const [sponsor, setSponsor] = useState([])
    useEffect(() => {
        fetch('https://toylandia-server.vercel.app/sponsors')
            .then(res => res.json())
           .then(data=> setSponsor(data))
   },[])
    return (
        <div className='container mx-auto py-2 rounded-sm my-8 shadow-sm'>
            <h3 className='text-center my-8 text-5xl font-heading text-[#F61276]'>Our sponsors</h3>
            <Swiper
      spaceBetween={50}
      slidesPerView={3}
            >
                {
                    sponsor.map(item => {
                        return <SwiperSlide
                        key={item._id}
                        >
                            <div>
                                <img src={item.photo} className='max-h-40' />
                            </div>
                        </SwiperSlide>
                    })
                }
    </Swiper>
        </div>
    );
};

export default SponsorsPage;