import * as React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Button } from '@mui/material';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';

const ProductCard = ({ card }) => {
    
    const [value, setValue] = React.useState(2);

    return (
        <Link to={`/product/${card}`}>
            <Card sx={{ maxWidth: 300, p: 2, border: '1px solid #999', borderRadius: 2 }}>
                <CardMedia
                    component="img"
                    height="150"
                    image="/product-img/1.webp"
                    alt="Product Image"
                />
                <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                        Studio Design
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Simple Women Fabrics
                    </Typography>
                    <Box sx={{ mb: 1 }}>
                        <Rating name="read-only" value={value} readOnly />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1, mb: 2 }}>
                        <Typography variant="body1" color="error" sx={{ fontWeight: 'bold' }}>
                            $45.50
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through' }}>
                            $48.85
                        </Typography>
                    </Box>
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: '#212121',
                            color: '#212121',
                            '&:hover': { backgroundColor: '#FF4545', borderColor: '#FF4545', color: 'white' }
                        }}
                    >
                        ADD TO CART
                    </Button>
                </CardContent>
            </Card>
        </Link>
    );
};

export default ProductCard;