import React from "react";

const PromotionalBanners = () => {
    const banners = [
        {
            id: 1,
            title: "Sun Hat",
            subtitle: "Get Offer For Summer",
            image: "/banner-1.webp",
        },
        {
            id: 2,
            title: "Ladies Bag",
            subtitle: "Buy One Get One Free",
            image: "/banner-2.webp",
        },
        {
            id: 3,
            title: "Smart Watch",
            subtitle: "20% Off Smart Watch",
            image: "/banner-3.webp",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-20 max-w-7xl mx-auto font-primary">
                <div
                    className="relative overflow-hidden group"
                >
                    {/* Image Section with Hover Zoom Effect */}
                    <div
                        className="w-full h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundImage: `url('/banner-1.webp')` }}
                    ></div>

                    {/* Text Section - Correctly Positioned */}
                    <div className="absolute top-8 left-6 z-10">
                        <h4 className="text-[#6c6c6c] text-xl">Sun Hat</h4>
                        <h2 className="text-[#2E2E2E] font-bold text-2xl"><span>Get Offer</span> <br />For Summer</h2>
                        <button className="mt-3 px-4 py-2 bg-black text-white font-semibold text-sm rounded-md transition-colors duration-300 group-hover:bg-red-500">
                            Shop Now
                        </button>
                    </div>
                </div>
                <div
                    className="relative overflow-hidden group"
                >
                    {/* Image Section with Hover Zoom Effect */}
                    <div
                        className="w-full h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundImage: `url('/banner-2.webp')` }}
                    ></div>

                    {/* Text Section - Correctly Positioned */}
                    <div className="absolute top-8 left-6 z-10">
                        <h4 className="text-[#6c6c6c] text-xl">Smart Watch</h4>
                        <h2 className="text-[#2E2E2E] font-bold text-2xl"><span>20% Off</span><br />Smart Watch</h2>
                        <button className="mt-3 px-4 py-2 bg-black text-white font-semibold text-sm rounded-md transition-colors duration-300 group-hover:bg-red-500">
                            Shop Now
                        </button>
                    </div>
                </div>
                <div
                    className="relative overflow-hidden group"
                >
                    {/* Image Section with Hover Zoom Effect */}
                    <div
                        className="w-full h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundImage: `url('/banner-1.webp')` }}
                    ></div>

                    {/* Text Section - Correctly Positioned */}
                    <div className="absolute top-8 left-6 z-10">
                        <h4 className="text-[#6c6c6c] text-xl">Sun Hat</h4>
                        <h2 className="text-[#2E2E2E] font-bold text-2xl"><span>Get Offer</span><br />For Summer</h2>
                        <button className="mt-3 px-4 py-2 bg-black text-white font-semibold text-sm rounded-md transition-colors duration-300 group-hover:bg-red-500">
                            Shop Now
                        </button>
                    </div>
                </div>
        </div>
    );
};

export default PromotionalBanners;