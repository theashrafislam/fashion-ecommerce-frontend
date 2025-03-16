import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import { Delete, Add, Remove } from "@mui/icons-material";

const initialCart = [
  { id: 1, image: "https://htmldemo.net/destry/destry/assets/images/products/small-product/1.jpg", name: "Brother Hoddies In Grey", variant: "S / Green", price: 95, quantity: 0 },
  { id: 2, image: "https://htmldemo.net/destry/destry/assets/images/products/small-product/2.jpg", name: "Basic Jogging Shorts", variant: "Blue", price: 75, quantity: 0 },
  { id: 3, image: "https://htmldemo.net/destry/destry/assets/images/products/small-product/10.jpg", name: "Lust For Life", variant: "Bulk/S", price: 295, quantity: 0 },
  { id: 4, image: "https://htmldemo.net/destry/destry/assets/images/products/small-product/4.jpg", name: "Simple Woven Fabrics", variant: "", price: 60, quantity: 2 },
];

const CartTable = () => {
  const [cart, setCart] = useState(initialCart);
  console.log(cart);

  const handleQuantityChange = (id, type) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: type === "increase" ? item.quantity + 1 : Math.max(item.quantity - 1, 0) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <TableContainer component={Paper} className="font-secondary" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Table>
        <TableHead>
          <TableRow className="bg-gray-200">
            <TableCell className="font-bold">Image</TableCell>
            <TableCell className="font-bold">Product</TableCell>
            <TableCell className="font-bold">Price</TableCell>
            <TableCell className="font-bold">Quantity</TableCell>
            <TableCell className="font-bold">Total</TableCell>
            <TableCell className="font-bold">Remove</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
              </TableCell>
              <TableCell>
                {item.name} <br /> <span className="text-gray-500">{item.variant}</span>
              </TableCell>
              <TableCell>${item.price.toFixed(2)}</TableCell>
              <TableCell>
                <div className="flex items-center">
                  <IconButton onClick={() => handleQuantityChange(item.id, "decrease")}> <Remove /> </IconButton>
                  <span className="px-4">{item.quantity}</span>
                  <IconButton onClick={() => handleQuantityChange(item.id, "increase")}> <Add /> </IconButton>
                </div>
              </TableCell>
              <TableCell>${(item.price * item.quantity).toFixed(2)}</TableCell>
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

export default CartTable;