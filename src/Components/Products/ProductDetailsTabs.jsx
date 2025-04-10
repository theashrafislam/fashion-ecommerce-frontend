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
                        <div className='mx-3 lg:mx-0'>
                            <h6 className='text-2xl text-[#2E2E2E] mb-2'>Shipping policy for our store</h6>
                            <p className='text-sm text-[#535353]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate</p>

                            <ul className="list-disc pl-5 py-4 text-base text-[#666666]">
                                <li>1-2 business days (Typically by end of day)</li>
                                <li>30 days money back guaranty</li>
                                <li>24/7 live support</li>
                                <li>Odio dignissim qui blandit praesent</li>
                                <li>luptatum zzril delenit augue duis dolore</li>
                                <li>Te feugait nulla facilisi.</li>
                            </ul>

                            <div className='flex flex-col gap-2'>
                                <p className='text-sm text-[#535353]'>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum</p>

                                <p className='text-sm text-[#535353]'>claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per</p>

                                <p className='text-sm text-[#535353]'>seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.</p>
                            </div>
                        </div>
                    </TabPanel>
                </TabContext>
            </Box>
        </div>
    );
};

export default ProductDetailsTabs;