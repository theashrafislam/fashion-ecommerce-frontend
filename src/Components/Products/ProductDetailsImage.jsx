import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

const ProductDetailsImage = () => {
    return (
        <div>
            <div className='p-4 border border-gray-300 rounded'>
                <Swiper
                    effect={'flip'}
                    grabCursor={true}
                    pagination={true}
                    navigation={true}
                    modules={[EffectFlip, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt='hello' className='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt='hello' className='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt='hello' className='' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt='hello' className='' />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default ProductDetailsImage;