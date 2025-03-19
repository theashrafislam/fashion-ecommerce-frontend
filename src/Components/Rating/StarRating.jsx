import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const StarRating = () => {
    return (
        <div>
            <Box sx={{ '& > legend': { mt: 2 } }}>
                <Rating name="read-only" value={3} readOnly />
            </Box>
        </div>
    );
};

export default StarRating;