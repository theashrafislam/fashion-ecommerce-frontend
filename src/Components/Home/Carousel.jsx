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
                        <SwiperSlide key={slide}> {/* Key should be here */}
                            <div
                                className="w-full h-[500px] md:h-[500px] lg:h-[700px] bg-cover bg-center flex items-center text-white"
                                style={{ 
                                    backgroundImage: `url('/carousel/${slide}.jpg')`,
                                    // backgroundSize: 'cover',
                                    backgroundPosition: '80%',
                                }}
                            >
                                <div className='flex flex-col md:flex-row justify-center md:justify-between items-center w-full px-10 md:px-20 lg:px-40'>
                                    {/* Left Text Content */}
                                    <div className='w-full md:w-1/2 text-center md:text-left'>
                                        <h1 className='font-primary font-bold text-4xl md:text-6xl lg:text-7xl text-[#2e2e2e]'>
                                            <span className='text-nowrap'>Women New</span> Collection
                                        </h1>
                                        <p className='text-[#2e2e2e] py-2 text-lg md:text-xl font-secondary'>
                                            Up to 70% off selected Product
                                        </p>
                                        <button
                                            className='w-full md:w-fit px-6 md:px-10 py-3 hover:bg-black rounded-md text-white bg-red-500 hover:text-white font-semibold font-primary mt-5 md:mt-7'>
                                            Shop Now
                                        </button>
                                    </div>

                                    {/* Right Empty Space for Image (if needed) */}
                                    <div className='hidden md:block md:w-1/2'></div>
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