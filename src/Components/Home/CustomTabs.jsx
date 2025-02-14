import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


const CustomTabs = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <div className='flex justify-center items-center'>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" TabIndicatorProps={{
                            style: { backgroundColor: '#FF4444' }
                        }}>
                            <Tab label="Item One" value="1" sx={{
                                color: '#2E2E2E',
                                fontWeight: 500,
                                '&.Mui-selected': { color: '#ef4444' },
                                fontFamily: 'var(--font-primary)'
                            }} />
                            <Tab label="Item Two" value="2" sx={{
                                color: '#2E2E2E',
                                fontWeight: 500,
                                '&.Mui-selected': { color: '#ef4444' },
                                fontFamily: 'var(--font-primary)'
                            }} />
                            <Tab label="Item Three" value="3" sx={{
                                color: '#2E2E2E',
                                fontWeight: 500,
                                '&.Mui-selected': { color: '#ef4444' },
                                fontFamily: 'var(--font-primary)'
                            }} />
                        </TabList>
                    </div>
                </Box>
                <TabPanel value="1">Item One</TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext>
        </Box>
    );
};


export default CustomTabs;