import React, { useState } from 'react';
import { FaTachometerAlt, FaShoppingCart, FaDownload, FaCreditCard, FaMapMarkerAlt, FaUser, FaSignOutAlt } from 'react-icons/fa';
import ActivePage from '../Components/ActivePage';
import AccountDetails from '../Components/ProfileTabsContent/AccountDetails';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import Address from '../Components/ProfileTabsContent/Address';
import PaymentMethod from '../Components/ProfileTabsContent/PaymentMethod';
import Download from '../Components/ProfileTabsContent/Download';
import Orders from '../Components/ProfileTabsContent/Orders';

const tabs = [
    { name: 'Dashboard', icon: <FaTachometerAlt /> },
    { name: 'Orders', icon: <FaShoppingCart /> },
    { name: 'Download', icon: <FaDownload /> },
    { name: 'Payment Method', icon: <FaCreditCard /> },
    { name: 'Address', icon: <FaMapMarkerAlt /> },
    { name: 'Account Details', icon: <FaUser /> },
    { name: 'Logout', icon: <FaSignOutAlt /> },
];

const Profile = () => {
    const [activeTab, setActiveTab] = useState('Dashboard');
    const { user, userSignOut } = useAuth();


    const handleLogout = () => {
        userSignOut()
            .then(() => {
                toast.success('Logged out successfully. See you again soon!');
            })
            .catch(error => {
                toast.error(error)
            })
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'Dashboard':
                return (
                    <>
                        <h1 className="font-primary text-2xl font-semibold pb-3 mb-3 border-b-2 border-dotted border-[#E8E8E8]">Dashboard</h1>
                        <p className="text-[#666666] font-secondary">
                            Hello, <span className="text-red-500 font-bold">Alex Aya</span> (If Not Aya! <span className="cursor-pointer text-blue-500">Logout</span>)<br />
                            From your account dashboard, you can easily check & view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
                        </p>
                    </>
                );
            case 'Orders':
                return <Orders />;
            case 'Download':
                return <Download />;
            case 'Payment Method':
                return <PaymentMethod />;
            case 'Address':
                return <Address />;
            case 'Account Details':
                return <div>
                    <AccountDetails />
                </div>
            default:
                return null;
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <ActivePage route={'My Account'} mainRoute={'Home'} />
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-center py-20">
                <div className="w-full md:w-1/4">
                    {tabs.map((tab) => (
                        <div
                            key={tab.name}
                            className={`font-secondary flex items-center gap-3 px-4 hover:bg-red-500 hover:text-white mx-3 md:mx-0 py-3 mb-2 font-medium uppercase border-2 border-[#E8E8E8] cursor-pointer ${activeTab === tab.name ? 'bg-red-500 text-white' : ' text-[#212121]'
                                }`}
                            onClick={() => {
                                if (tab.name === 'Logout') {
                                    handleLogout();
                                } else {
                                    setActiveTab(tab.name);
                                }
                            }}
                        >
                            <span className="text-lg">{tab.icon}</span>
                            {tab.name}
                        </div>
                    ))}
                </div>
                <div className="w-full md:w-3/4">
                    <div className="border-2 border-[#E8E8E8] mx-3 md:mx-0 p-6">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;