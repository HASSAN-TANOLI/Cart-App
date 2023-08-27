import React from "react";
import { AppBar, Toolbar, Typography, Box, Stack } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Navbar({ size, setShow }) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            varient="h1"
            component="div"
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              flexGrow: 1,
              cursor: "pointer",
            }}
            onClick={() => setShow(false)}
          >
            {" "}
            Shopping Cart{" "}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Box sx={{ cursor: "pointer" }} onClick={() => setShow(false)}>
              <ShoppingCartIcon />
              <span>{size} </span>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
