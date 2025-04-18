import React, { useState } from 'react';

const PriceFilter = () => {
    const [priceRange, setPriceRange] = useState({ min: 0, max: 500 });
    
    const handleRangeChange = (e) => {
        setPriceRange({ ...priceRange, [e.target.name]: parseInt(e.target.value) });
    };
    
    return (
        <div className='font-primary mb-10'>
            <div>
                <h4 className='text-xl text-[#2E2E2E] pb-1 mb-3 border-b-2 border-[#EBEBEB]'>Price Filter</h4>
                
                {/* Range slider container */}
                <div className="relative mt-6 mb-4">
                    {/* Track line */}
                    <div className="absolute w-full h-1 bg-gray-300 rounded top-1/2 transform -translate-y-1/2"></div>
                    
                    {/* Slider with two thumbs */}
                    <input 
                        type="range" 
                        name="min"
                        min="0" 
                        max="1000" 
                        value={priceRange.min} 
                        onChange={handleRangeChange}
                        className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none"
                        style={{
                            zIndex: 2,
                            '-webkit-appearance': 'none',
                        }}
                    />
                    
                    <input 
                        type="range" 
                        name="max"
                        min="0" 
                        max="1000" 
                        value={priceRange.max} 
                        onChange={handleRangeChange}
                        className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none"
                        style={{
                            zIndex: 2,
                            '-webkit-appearance': 'none',
                        }}
                    />
                    
                    {/* Custom thumb styling */}
                    <style jsx>{`
                        input[type="range"]::-webkit-slider-thumb {
                            -webkit-appearance: none;
                            appearance: none;
                            width: 18px;
                            height: 18px;
                            border-radius: 50%;
                            background: #000;
                            cursor: pointer;
                            pointer-events: auto;
                        }
                        
                        input[type="range"]::-moz-range-thumb {
                            width: 18px;
                            height: 18px;
                            border-radius: 50%;
                            background: #000;
                            cursor: pointer;
                            border: none;
                            pointer-events: auto;
                        }
                    `}</style>
                </div>
                
                {/* Filter button and price display */}
                <div className="flex items-center mt-12 gap-2">
                    <button className="bg-black text-white px-6 py-2 rounded-full font-medium">Filter</button>
                    <div className="flex-1">
                        <div className="border border-gray-300 rounded-full px-4 py-2 text-center">
                            ${priceRange.min} - ${priceRange.max}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceFilter;