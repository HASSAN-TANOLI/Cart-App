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

const Cart = ({ cartItems, setCartItems }) => {
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
                <TableCell>${item.price}</TableCell>
                <TableCell>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Cart;
