import React from 'react';
import { BsCart } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { GoHeart } from 'react-icons/go';
import { IoMenu } from 'react-icons/io5';
import { RiSearchLine } from 'react-icons/ri';
// import { Link } from 'react-router-dom';

// import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Link from '@mui/material/Link';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IoMdHome } from 'react-icons/io';

const Navbar = () => {

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
                    <Divider className='py-2'/>
                    <div>
                        <Link href="/" underline='none' color='none' className='flex items-center gap-2 ' ><IoMdHome className='text-xl'/><span className='text-base hover:text-red-500 relative group cursor-pointer py-8 font-medium text-[#212121]'>Home</span></Link>
                        
                    </div>
                    <div>
                        <Link href="/" underline='none' color='none' className='flex items-center gap-2 ' ><IoMdHome className='text-xl'/><span className='text-base hover:text-red-500 relative group cursor-pointer py-8 font-medium text-[#212121]'>Home</span></Link>
                        
                    </div>
                </div>

            </List>

        </Box>
    );

    return (
        <section className='grid grid-cols-2 lg:grid-cols-3 items-center justify-between max-w-7xl mx-auto border-b-2 px-3 lg:px-0'>

            {/* logo section  */}
            <div>
                <Link href="/" underline="none" ><span className='text-[#8C8C8C] font-bold text-xl lg:text-2xl cursor-pointer'>FashionEra</span></Link>
            </div>

            {/* menu section  */}
            <div className='hidden lg:flex'>
                <ul className='flex items-center justify-center gap-8'>
                    <li className='text-base text-[#212121] hover:text-red-500 relative group cursor-pointer py-8 font-medium'>
                        Home
                        <span className="absolute left-0 bottom-8 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className='text-base text-[#212121] hover:text-red-500 relative group cursor-pointer py-8 font-medium'>
                        Shop
                        <span className="absolute left-0 bottom-8 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className='text-base text-[#212121] hover:text-red-500 relative group cursor-pointer py-8 font-medium'>
                        Blogs
                        <span className="absolute left-0 bottom-8 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className='text-base text-[#212121] hover:text-red-500 relative group cursor-pointer py-8 font-medium'>
                        About
                        <span className="absolute left-0 bottom-8 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className='text-base text-[#212121] hover:text-red-500 relative group cursor-pointer py-8 font-medium'>
                        Contact
                        <span className="absolute left-0 bottom-8 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                    <li className='text-base text-[#212121] hover:text-red-500 relative group cursor-pointer py-8 font-medium'>
                        Login
                        <span className="absolute left-0 bottom-8 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </li>
                </ul>
            </div>

            {/* Icons section  */}
            <div>
                <ul className='flex items-center justify-end gap-3 lg:gap-6'>
                    <li className='py-8 hover:text-red-500'><RiSearchLine className='text-xl lg:text-2xl ' /></li>
                    <li className='py-8 hover:text-red-500'><CgProfile className='text-xl lg:text-2xl' /></li>
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