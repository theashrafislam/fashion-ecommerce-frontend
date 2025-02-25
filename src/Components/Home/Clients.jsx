import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { FreeMode, Autoplay } from 'swiper/modules';

const logos = [
    '/about/1.webp',
    '/about/2.webp',
    '/about/3.webp',
    '/about/4.webp',
    '/about/5.webp',
    '/about/1.webp',
    '/about/2.webp',
    '/about/3.webp',
    '/about/4.webp',
    '/about/5.webp'
];

const Clients = () => {
    return (
        <div className='font-primary max-w-7xl mx-auto'>
            <div className='mb-12'>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    freeMode={true}
                    loop={true}
                    autoplay={{ delay: 0, disableOnInteraction: false }}
                    speed={4000}
                    modules={[FreeMode, Autoplay]}
                    className="mySwiper"
                >
                    {logos.map((logo, i) => (
                        <SwiperSlide key={i}>
                            <img src={logo} alt={`Logo ${i + 1}`} className="w-24 mx-auto" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Clients;