import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Button } from "@mui/material";
import { Delete } from "@mui/icons-material";

const initialWishlist = [
  { id: 1, image: "https://htmldemo.net/destry/destry/assets/images/products/small-product/1.jpg", name: "Brother Hoddies In Grey", variant: "S / Green", price: 95, stock: "In Stock" },
  { id: 2, image: "https://htmldemo.net/destry/destry/assets/images/products/small-product/2.jpg", name: "Basic Jogging Shorts", variant: "Blue", price: 75, stock: "Out of Stock" },
  { id: 3, image: "https://htmldemo.net/destry/destry/assets/images/products/small-product/10.jpg", name: "Lust For Life", variant: "Bulk/S", price: 295, stock: "In Stock" },
  { id: 4, image: "https://htmldemo.net/destry/destry/assets/images/products/small-product/4.jpg", name: "Simple Woven Fabrics", variant: "", price: 60, stock: "Limited Stock" },
];

const WishlistTable = () => {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const handleRemove = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <TableContainer component={Paper} className="font-secondary" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Table>
        <TableHead>
          <TableRow className="bg-gray-200">
            <TableCell className="font-bold">Image</TableCell>
            <TableCell className="font-bold">Product</TableCell>
            <TableCell className="font-bold">Price</TableCell>
            <TableCell className="font-bold text-nowrap">Stock Status</TableCell>
            <TableCell className="font-bold text-nowrap">Add to Cart</TableCell>
            <TableCell className="font-bold">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {wishlist.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <img src={item.image} alt={item.name} />
              </TableCell>
              <TableCell>
                {item.name} <br /> <span className="text-gray-500">{item.variant}</span>
              </TableCell>
              <TableCell>${item.price.toFixed(2)}</TableCell>
              <TableCell>{item.stock}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: '#212121',
                    color: '#212121',
                    '&:hover': { backgroundColor: '#FF4545', borderColor: '#FF4545', color: 'white' },
                    whiteSpace: 'nowrap'
                  }}
                  disabled={item.stock === "Out of Stock"}
                >
                  ADD TO CART
                </Button>
              </TableCell>
              <TableCell>
                <IconButton onClick={() => handleRemove(item.id)} color="error"> <Delete /> </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WishlistTable;