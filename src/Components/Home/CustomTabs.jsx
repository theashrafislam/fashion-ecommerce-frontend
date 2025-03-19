import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ProductCard from '../Products/ProductCard';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const CustomTabs = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='max-w-7xl mx-auto my-16'>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <div
                            className='flex justify-center items-center overflow-x-auto'
                        >
                            <TabList onChange={handleChange}
                                className="!min-w-[300px] !w-max"
                                aria-label="lab API tabs example" TabIndicatorProps={{
                                    style: { backgroundColor: '#FF4444', transition: 'all 0.3s ease-in-out' }
                                }}>
                                <Tab label="New Arrivals" value="1" sx={{
                                    color: '#2E2E2E',
                                    fontWeight: 500,
                                    fontSize: { xs: '14px', sm: '16px', md: '18px' },
                                    transition: 'color 0.3s ease-in-out',
                                    '&:hover': { color: '#ef4444' },
                                    '&.Mui-selected': { color: '#ef4444', fontWeight: 'bold' },
                                    fontFamily: 'var(--font-primary)'
                                }} />
                                <Tab label="Best Sellers" value="2" sx={{
                                    color: '#2E2E2E',
                                    fontWeight: 500,
                                    fontSize: { xs: '14px', sm: '16px', md: '18px' },
                                    transition: 'color 0.3s ease-in-out',
                                    '&:hover': { color: '#ef4444' },
                                    '&.Mui-selected': { color: '#ef4444', fontWeight: 'bold' },
                                    fontFamily: 'var(--font-primary)'
                                }} />
                                <Tab label="Sale Items" value="3" sx={{
                                    color: '#2E2E2E',
                                    fontWeight: 500,
                                    fontSize: { xs: '14px', sm: '16px', md: '18px' },
                                    transition: 'color 0.3s ease-in-out',
                                    '&:hover': { color: '#ef4444' },
                                    '&.Mui-selected': { color: '#ef4444', fontWeight: 'bold' },
                                    fontFamily: 'var(--font-primary)'
                                }} />
                            </TabList>
                        </div>
                    </Box>
                    <TabPanel value="1" className='!p-0 !py-7'>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-3 lg:mx-0'>
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                        <div className='mt-12 flex justify-center items-center'>
                            <Stack spacing={2}>
                                <Pagination count={10} variant="outlined" color="primary" />
                            </Stack>
                        </div>
                    </TabPanel>
                    <TabPanel value="2" className='!p-0 !py-7'>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-3 lg:mx-0'>
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                        <div className='mt-12 flex justify-center items-center'>
                            <Stack spacing={2}>
                                <Pagination count={10} variant="outlined" color="primary" />
                            </Stack>
                        </div>
                    </TabPanel>
                    <TabPanel value="3" className='!p-0 !py-7'>
                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-3 lg:mx-0'>
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                            <ProductCard />
                        </div>
                        <div className='mt-12 flex justify-center items-center'>
                            <Stack spacing={2}>
                                <Pagination count={10} variant="outlined" color="primary" />
                            </Stack>
                        </div>
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    );
};


export default CustomTabs;