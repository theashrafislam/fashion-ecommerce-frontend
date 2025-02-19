import React from 'react';
import ActivePage from '../Components/ActivePage';
import Us from '../Components/About/Us';
import OurServices from '../Components/About/OurServices';

const About = () => {
    return (
        <div className='font-primary'>
            <ActivePage mainRoute={'Home'} route={'About Us'} />
            <div className='max-w-7xl mx-auto'>
                <div className='flex flex-col md:flex-row gap-4 my-20 items-center mx-3 md:mx-0'>
                    <div className='space-y-3 w-full md:w-[50%]'>
                        <h1 className='text-3xl font-bold text-[#2E2E2E]'>About Our FashionEra Store</h1>
                        <h5 className='text-base font-semibold text-[#2E2E2E]'>We believe that every project existing in digital world is a result of an idea and every idea has a cause.</h5>
                        <p className='text-[#666666] text-sm font-secondary'>For this reason, our each design serves an idea. Our strength in design is reflected by our name, our care for details. Our specialist won't be afraid to go extra miles just to approach near perfection. We don't require everything to be perfect, but we need them to be perfectly cared for. That's a reason why we are willing to give contributions at best. Not a single detail is missed out under Billey's professional eyes.The amount of dedication and effort equals to the level of passion and by.</p>
                    </div>
                    <div className='w-full md:w-[50%] overflow-hidden'>
                        <img src="/about/about.webp" alt="" className='w-full hover:transition-transform hover:duration-300 hover:scale-110' />
                    </div>
                </div>
            </div>
            {/* Parallax Background */}
            <OurServices />

            {/* about  us section  */}
            <Us />
        </div>
    );
};

export default About;