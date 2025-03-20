import React from 'react';
import { BsCart } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { GoHeart } from 'react-icons/go';
import { IoMenu } from 'react-icons/io5';
import { RiSearchLine } from 'react-icons/ri';
// import { Link as RouterLink } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { FaBlog } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';
import { FiLogIn } from 'react-icons/fi';

// import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import LgMenuOptions from './LgMenuOptions';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import ProfileIcon from './Icons/ProfileIcon';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const nagivate = useNavigate();
    // const { user, loading, userSignOut } = useAuth();
    const { user, loading } = useSelector((state) => state.auth);
    // console.log(user);

    // console.log(user);

    const handleLogOut = () => {
        userSignOut()
            .then(() => {
                toast.success("Logged out successfully! See you again! 👋");
                nagivate('/sign-in')
            })
            .catch(error => {
                toast.error(error)
            })
    }

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>

                <div className='p-7'>
                    <Link href='/' underline="none"><h1 className='text-[#8C8C8C] font-bold text-xl lg:text-2xl cursor-pointer text-center'>FashionEra</h1></Link>

                    <Divider className='py-2' />
                    <div className='flex flex-col gap-3 mt-4'>

                        <Link href="/" underline='none' color='none' className='flex items-center gap-2 ' ><AiFillHome className='text-xl' /><span className='text-base hover:text-red-500 relative group cursor-pointer font-medium text-[#212121]'>Home</span></Link>

                        <Link href="/shop" underline='none' color='none' className='flex items-center gap-2 ' ><FaShoppingCart className='text-xl' /><span className='text-base hover:text-red-500 relative group cursor-pointer font-medium text-[#212121]'>Shop</span></Link>

                        <Link href="/blog" underline='none' color='none' className='flex items-center gap-2 ' ><FaBlog className='text-xl' /><span className='text-base hover:text-red-500 relative group cursor-pointer font-medium text-[#212121]'>Blog</span></Link>

                        <Link href="/about" underline='none' color='none' className='flex items-center gap-2 ' ><IoMdInformationCircleOutline className='text-xl' /><span className='text-base hover:text-red-500 relative group cursor-pointer font-medium text-[#212121]'>About</span></Link>

                        <Link href="/contact" underline='none' color='none' className='flex items-center gap-2 ' ><MdContactMail className='text-xl' /><span className='text-base hover:text-red-500 relative group cursor-pointer font-medium text-[#212121]'>Contact</span></Link>

                        {user ? <Link onClick={handleLogOut} underline='none' color='none' className='flex items-center gap-2 ' ><FiLogIn className='text-xl' /><span className='text-base hover:text-red-500 relative group cursor-pointer font-medium text-[#212121]'>Logout</span></Link> : <Link href="/sign-in" underline='none' color='none' className='flex items-center gap-2 ' ><FiLogIn className='text-xl' /><span className='text-base hover:text-red-500 relative group cursor-pointer font-medium text-[#212121]'>Login</span></Link>}

                    </div>
                    {/* <Divider className='py-2'/> */}
                </div>

            </List>

        </Box>
    );

    return (
        <section className='grid grid-cols-2 lg:grid-cols-3 items-center justify-between max-w-7xl mx-auto px-3 lg:px-0'>

            {/* logo section  */}
            <div>
                <Link href="/" underline="none" ><span className='text-[#8C8C8C] font-bold text-xl lg:text-2xl cursor-pointer'>FashionEra</span></Link>
            </div>

            {/* menu section  */}
            <LgMenuOptions />

            {/* Icons section  */}
            <div>
                <ul className='flex items-center justify-end gap-3 lg:gap-6'>
                    {/* <li className='py-8 hover:text-red-500'><RiSearchLine className='text-xl lg:text-2xl ' /></li> */}
                    <ProfileIcon />
                    <li className='py-8 hover:text-red-500'><GoHeart className='text-xl lg:text-2xl' /></li>
                    <li className='py-8 hover:text-red-500'><BsCart className='text-xl lg:text-2xl' /></li>
                    {/* <li  onClick={toggleDrawer('right', true)} className='py-8 hover:text-red-500'><IoMenu className='text-3xl lg:text-2xl lg:hidden' /></li> */}
                    <div className='lg:hidden p-0'>
                        <React.Fragment >
                            <Button onClick={toggleDrawer('right', true)}><IoMenu className='text-3xl lg:text-2xl lg:hidden' /></Button>
                            <Drawer
                                anchor={'right'}
                                open={state['right']}
                                onClose={toggleDrawer('right', false)}
                            >
                                {list('right')}
                            </Drawer>
                        </React.Fragment>
                    </div>
                </ul>
            </div>
        </section>
    );
};

export default Navbar;