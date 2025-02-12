// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {
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
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div
                        className="w-full h-[600px] bg-cover bg-center flex items-center text-white"
                        style={{ backgroundImage: "url('/carousel/slide-1-2.jpg')" }}
                    >
                        <div className='flex flex-col md:flex-col justify-start px-40'>
                            <div className='w-[50%]'>
                                <h1 className='font-primary font-bold text-7xl'><span className='text-nowrap'>Women New</span> Collection</h1>
                            </div>
                            <div className='w-[50%'></div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-full h-[800px] bg-cover bg-center flex items-center justify-center text-white"
                        style={{ backgroundImage: "url('/carousel/slide-1-2.jpg')" }}
                    >
                        <h1 className="text-3xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">
                            Hello, I am Ashraful Islam
                        </h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="w-full h-[800px] bg-cover bg-center flex items-center justify-center text-white"
                        style={{ backgroundImage: "url('/carousel/slide-1-2.jpg')" }}
                    >
                        <h1 className="text-3xl font-bold bg-black bg-opacity-50 p-4 rounded-lg">
                            Hello, I am Ashraful Islam
                        </h1>
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    );
};

export default Carousel;