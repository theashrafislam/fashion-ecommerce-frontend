import React from 'react';

const PaymentMethod = () => {
    return (
        <div>
            <h1 className="font-primary text-2xl font-medium pb-3 mb-3 border-b-2 border-dotted border-[#E8E8E8]">Payment Method</h1>
            <div className="text-[#666666] font-secondary mt-5">
                <div className="bg-gray-100 border-t-4 border-red-500 p-4 rounded shadow-md">
                    <p className="font-medium">You Can't Save Your Payment Method yet.</p>
                </div>
            </div>
        </div>
    );
};

export default PaymentMethod;