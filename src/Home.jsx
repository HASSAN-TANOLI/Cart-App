import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Stack,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  CardActionArea,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { List } from "./data.js";
import Cart from "./Cart.jsx";

export default function Home({ eachdata, addToCart }) {
  return (
    <>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {List.map((eachdata, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: "300px",
              display: "flex",
              m: 2,
              flexBasis: "calc(33.33% - 16px)",
            }}
          >
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "400px" }}
                component={"img"}
                src={eachdata.image}
                alt="an image"
              ></CardMedia>
              <CardContent>
                <Typography variant="h5" component={"div"} gutterBottom>
                  {eachdata.name}
                </Typography>

                <Typography variant="h5" component={"div"} gutterBottom>
                  {eachdata.price}
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    padding: "10px",
                    width: "100%",
                    display: "flex",
                    alignItem: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                  onClick={() => addToCart(eachdata)}
                >
                  Add to cart
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </>
  );
}
