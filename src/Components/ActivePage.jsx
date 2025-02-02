import React from 'react';

const ActivePage = ({ route, mainRoute }) => {
    return (
        <div className="bg-gray-100 py-10">
            <div className="container mx-auto text-center">
                <h1 className="font-primary text-2xl md:text-3xl font-bold text-gray-800 mb-2">{route}</h1>
                <div className="font-secondary text-sm text-gray-600 font-semibold">
                    <span>{mainRoute}</span> <span className="mx-1">/</span> <span className='text-gray-800'>{route}</span>
                </div>
            </div>
        </div>
    );
};

export default ActivePage;