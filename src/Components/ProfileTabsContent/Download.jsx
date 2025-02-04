import React from 'react';
import { FaCloudDownloadAlt } from 'react-icons/fa';

const Download = () => {
    return (
        <div>
            <h1 className="font-primary text-2xl font-medium pb-3 mb-3 border-b-2 border-dotted border-[#E8E8E8]">Downloads</h1>
            <div className="text-[#666666] font-secondary">

                {/* table  */}

                <div className="overflow-x-auto mt-5">
                    <table className="min-w-full bg-white border border-gray-200">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="text-center px-6 py-3 text-sm font-semibold text-[#212121] border-r border-gray-300">Product</th>
                                <th className="px-6 py-3 text-center text-sm font-semibold text-[#212121] border-r border-gray-300">Date</th>
                                <th className="px-6 py-3 text-center text-sm font-semibold text-[#212121] border-r border-gray-300">Expire</th>
                                <th className="px-6 py-3 text-center text-sm font-semibold text-[#212121] border-r border-gray-300">Download</th>
                            </tr>
                        </thead>
                        < tbody>
                            <tr className="border-t border-gray-200">
                                <td className="text-center px-6 py-4 text-sm text-[#666666] border-r border-gray-300">Haven - Free Real Estate PSD Template</td>
                                <td className="text-center px-6 py-4 text-sm text-[#666666] border-r border-gray-300">Aug 22, 2023</td>
                                <td className="text-center px-6 py-4 text-sm text-[#666666] border-r border-gray-300">Yes</td>
                                <td className="text-center px-6 py-4 flex items-center justify-center">
                                    <button className="flex flex-col text-nowrap md:flex-row items-center justify-center gap-2 bg-black text-white px-4 py-2 hover:bg-red-500 hover:text-white">
                                        <FaCloudDownloadAlt />
                                        Download File
                                    </button>
                                </td>
                            </tr>
                            <tr className="border-t border-gray-200">
                                <td className="text-center px-6 py-4 text-sm text-[#666666] border-r border-gray-300">Haven - Free Real Estate PSD Template</td>
                                <td className="text-center px-6 py-4 text-sm text-[#666666] border-r border-gray-300">Aug 22, 2023</td>
                                <td className="text-center px-6 py-4 text-sm text-[#666666] border-r border-gray-300">Yes</td>
                                <td className="text-center px-6 py-4 flex items-center justify-center">
                                    <button className="flex text-nowrap flex-col md:flex-row items-center justify-center gap-2 bg-black text-white px-4 py-2 hover:bg-red-500 hover:text-white">
                                        <FaCloudDownloadAlt />
                                        Download File
                                    </button>
                                </td>
                            </tr>
                            <tr className="border-t border-gray-200">
                                <td className="text-center px-6 py-4 text-sm text-[#666666] border-r border-gray-300">Haven - Free Real Estate PSD Template</td>
                                <td className="text-center px-6 py-4 text-sm text-[#666666] border-r border-gray-300">Aug 22, 2023</td>
                                <td className="text-center px-6 py-4 text-sm text-[#666666] border-r border-gray-300">Yes</td>
                                <td className="text-center px-6 py-4 flex items-center justify-center">
                                    <button className="flex text-nowrap flex-col md:flex-row items-center justify-center gap-2 bg-black text-white px-4 py-2 hover:bg-red-500 hover:text-white">
                                        <FaCloudDownloadAlt />
                                        Download File
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    );
};

export default Download;