// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Carousel = () => {

    const img = [1, 2, 3, 4, 5, 6, 7];

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {
                    img?.map((slide) => (
                        <SwiperSlide>
                            <div
                                key={slide}
                                className="w-full h-[700px] bg-cover bg-center flex items-center text-white"
                                style={{ backgroundImage: `url('/carousel/${slide}.jpg')` }}
                            >
                                <div className='flex flex-col md:flex-col justify-start px-40'>
                                    <div className='w-[50%]'>
                                        <h1 className='font-primary font-bold text-7xl text-[#2e2e2e]'><span className='text-nowrap'>Women New</span> Collection</h1>
                                        <p className='text-[#2e2e2e] py-2 text-lg font-secondary'>Up to 70% off selected Product</p>
                                        <button
                                            className='w-full mt-7 md:w-fit px-10 py-3 hover:bg-black rounded-md text-white bg-red-500 hover:text-white font-semibold font-primary'>Shop Now</button>
                                    </div>
                                    <div className='w-[50%'></div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
};

export default Carousel;