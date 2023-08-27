import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState, useEffect } from "react";

const Cart = ({ cartItems, setCartItems, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let total = 0;
    cartItems.map((item) => {
      total += item.amount * item.price;
    });
    setPrice(total);
  };

  const handleRemove = (id) => {
    const arr = cartItems.filter((item) => item.id !== id);
    setCartItems(arr);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <Box sx={{ marginTop: "50px" }}>
      <Typography
        varient="h5"
        sx={{
          fontSize: "40px",
          textAlign: "center",
          marginBottom: "30px",
          fontWeight: "700",
        }}
      >
        Your Cart
      </Typography>
      <TableContainer component={Paper} sx={{ width: "80%", margin: "0 auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell>Product Title</TableCell>
              <TableCell> Quantity </TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: 50, height: 50 }}
                  />
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleChange(item, +1)}>
                    <RemoveIcon />
                  </IconButton>
                  <Box>{1}</Box>
                  <IconButton onClick={() => handleChange(item, -1)}>
                    <AddIcon />
                  </IconButton>
                </TableCell>
                <TableCell>Rs {item.price}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleRemove(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>
                <Typography varient="h2" sx={{ fontWeight: "700" }}>
                  {" "}
                  Total Price:{" "}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography varient="h2" sx={{ fontWeight: "700" }}>
                  Rs {price}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Cart;
