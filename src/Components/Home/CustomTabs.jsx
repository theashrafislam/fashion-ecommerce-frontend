import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const CustomTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
            </div>
        );
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <div className='flex justify-center items-center'>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="New Arrivals" {...a11yProps(0)} />
                        <Tab label="Best Sellers" {...a11yProps(1)} />
                        <Tab label="Sale Items" {...a11yProps(2)} />
                    </Tabs>
                </div>
            </Box>
            <CustomTabPanel value={value} index={0}>
                New Arrivals
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Best Sellers
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Sale Items
            </CustomTabPanel>
        </Box>
    );
};

// Tabs.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };

export default CustomTabs;