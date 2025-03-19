import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CustomerReview from './CustomerReview';

const ProductDetailsTabs = () => {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='max-w-7xl mx-auto my-16'>
            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <div className='flex justify-start items-center overflow-x-auto'>
                            <TabList onChange={handleChange}
                                className="!min-w-[300px] !w-max"
                                aria-label="lab API tabs example" TabIndicatorProps={{
                                    style: { backgroundColor: '#FF4444', transition: 'all 0.3s ease-in-out' }
                                }}>
                                <Tab label="Description" value="1" sx={{
                                    color: '#2E2E2E',
                                    fontWeight: 500,
                                    fontSize: { xs: '14px', sm: '16px', md: '18px' },
                                    transition: 'color 0.3s ease-in-out',
                                    '&:hover': { color: '#ef4444' },
                                    '&.Mui-selected': { color: '#ef4444', fontWeight: 'bold' },
                                    fontFamily: 'var(--font-primary)'
                                }} />
                                <Tab label="Reviews" value="2" sx={{
                                    color: '#2E2E2E',
                                    fontWeight: 500,
                                    fontSize: { xs: '14px', sm: '16px', md: '18px' },
                                    transition: 'color 0.3s ease-in-out',
                                    '&:hover': { color: '#ef4444' },
                                    '&.Mui-selected': { color: '#ef4444', fontWeight: 'bold' },
                                    fontFamily: 'var(--font-primary)'
                                }} />
                                <Tab label="Shipping Policy" value="3" sx={{
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
                        <div className='mx-3 lg:mx-0 border border-gray-300 p-3'>
                            <p className='font-secondary text-[#535353] text-base'>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                        </div>
                    </TabPanel>
                    <TabPanel value="2" className='!p-0 !py-7'>
                        <div className='mx-3 lg:mx-0 border border-gray-300 p-3'>
                            <CustomerReview />
                        </div>
                    </TabPanel>
                    <TabPanel value="3" className='!p-0 !py-7'>
                        <div className='mx-3 lg:mx-0 border border-gray-300 p-3'>
                            <p>Shipping policy details go here...</p>
                        </div>
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    );
};

export default ProductDetailsTabs;