import React from "react";
import { AppBar, Toolbar, Typography, Box, Button, Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            varient="h1"
            component="div"
            sx={{ fontSize: "20px", fontWeight: "600", flexGrow: 1 }}
          >
            {" "}
            Shopping Cart{" "}
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit"> Cart icon </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
}
