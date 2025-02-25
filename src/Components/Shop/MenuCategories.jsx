import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MenuCategories = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <div className='font-primary my-10'>
            <div>
                <h4 className='text-xl text-[#2E2E2E] pb-1 mb-3 border-b-2 border-[#EBEBEB]'>Menu Categories</h4>

                {/* Accordion  */}
                <div>
                    {/* Women  */}
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{
                        boxShadow: 'none',
                        backgroundColor: 'transparent',
                        '&:before': { display: 'none' },
                        border: 'none',
                        padding: 0
                    }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                            sx={{
                                minHeight: 'auto',
                                padding: '0 !important',
                                margin: 0,
                                '&.Mui-expanded': { minHeight: 'auto' }
                            }}
                        >
                            <Typography component="span" sx={{ width: '33%', flexShrink: 0, whiteSpace: 'nowrap', fontFamily: 'inherit', fontWeight: 'bold', fontSize: '14px', color: '#2E2E2E', cursor: 'pointer', '&:hover': { color: "red" } }}>
                                Women
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ fontFamily: 'inherit', fontSize: '13px', color: '#2E2E2E', cursor: 'pointer' }}>
                                <p className='hover:text-red-500'>Natural Cosmetic</p>
                                <p className='hover:text-red-500'>Women Fashion Tops</p>
                                <p className='hover:text-red-500'>Knitted Fabrics</p>
                                <p className='hover:text-red-500'>Smart Watch</p>
                                <p className='hover:text-red-500'>Handmade Bag</p>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* Men  */}
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{
                        boxShadow: 'none',
                        backgroundColor: 'transparent',
                        '&:before': { display: 'none' },
                        border: 'none',
                        padding: 0
                    }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2bh-content"
                            id="panel2bh-header"
                            sx={{
                                minHeight: 'auto',
                                padding: '0 !important',
                                margin: 0,
                                '&.Mui-expanded': { minHeight: 'auto' }
                            }}
                        >
                            <Typography component="span" sx={{ width: '33%', flexShrink: 0, whiteSpace: 'nowrap', fontFamily: 'inherit', fontWeight: 'bold', fontSize: '14px', color: '#2E2E2E', cursor: 'pointer', '&:hover': { color: "red" } }}>
                                Men
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ fontFamily: 'inherit', fontSize: '13px', color: '#2E2E2E', cursor: 'pointer' }}>
                                <p className='hover:text-red-500'>Sunglasses</p>
                                <p className='hover:text-red-500'>Belt and Wallet</p>
                                <p className='hover:text-red-500'>Lather Shoe</p>
                                <p className='hover:text-red-500'>Corporate Pant and Shirt</p>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* Kids  */}
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{
                        boxShadow: 'none',
                        backgroundColor: 'transparent',
                        '&:before': { display: 'none' },
                        border: 'none',
                        padding: 0
                    }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3bh-content"
                            id="panel3bh-header"
                            sx={{
                                minHeight: 'auto',
                                padding: '0 !important',
                                margin: 0,
                                '&.Mui-expanded': { minHeight: 'auto' }
                            }}
                        >
                            <Typography component="span" sx={{ width: '33%', flexShrink: 0, whiteSpace: 'nowrap', fontFamily: 'inherit', fontWeight: 'bold', fontSize: '14px', color: '#2E2E2E', cursor: 'pointer', '&:hover': { color: "red" } }}>
                                Kids
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ fontFamily: 'inherit', fontSize: '13px', color: '#2E2E2E', cursor: 'pointer' }}>
                                <p className='hover:text-red-500'>Kids Fashion</p>
                                <p className='hover:text-red-500'>Kids Toy</p>
                                <p className='hover:text-red-500'>Playground</p>
                                <p className='hover:text-red-500'>Video Games</p>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    {/* Others  */}
                    <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} sx={{
                        boxShadow: 'none',
                        backgroundColor: 'transparent',
                        '&:before': { display: 'none' },
                        border: 'none',
                        padding: 0
                    }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                            sx={{
                                minHeight: 'auto',
                                padding: '0 !important',
                                margin: 0,
                                '&.Mui-expanded': { minHeight: 'auto' }
                            }}
                        >
                            <Typography component="span" sx={{ width: '33%', flexShrink: 0, whiteSpace: 'nowrap', fontFamily: 'inherit', fontWeight: 'bold', fontSize: '14px', color: '#2E2E2E', cursor: 'pointer', '&:hover': { color: "red" } }}>
                                Others
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography sx={{ fontFamily: 'inherit', fontSize: '13px', color: '#2E2E2E', cursor: 'pointer' }}>
                                <p className='hover:text-red-500'>Winter Collection</p>
                                <p className='hover:text-red-500'>Sun Protection</p>
                                <p className='hover:text-red-500'>Water Resistant</p>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                </div>

            </div>

        </div>
    );
};

export default MenuCategories;