import Home from "./Home.jsx";
import { useState } from "react";
import Cart from "./Cart.jsx";
import Navbar from "./Navbar.jsx";
import { Box } from "@mui/material";
function App() {
  const [show, setShow] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [warning, setWarning] = useState(false);

  const addToCart = (eachdata) => {
    let isPresent = false;
    cartItems.forEach((product) => {
      if (eachdata.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCartItems([...cartItems, eachdata]);
    console.log(eachdata);
  };

  const handleChange = (item, d) => {
    const updatedCart = cartItems.map((data) => {
      if (data.id === item.id) {
        const newAmount = Math.max(data.amount + d, 1); // Ensure the amount doesn't go below 1
        return { ...data, amount: newAmount };
      }
      return data;
    });

    setCartItems(updatedCart);
  };

  return (
    <>
      <Navbar size={cartItems.length} setShow={setShow} />
      {show ? (
        <Home addToCart={addToCart} />
      ) : (
        <Cart
          cartItems={cartItems}
          setCartItems={setCartItems}
          handleChange={handleChange}
        />
      )}

      {warning && (
        <Box
          sx={{
            height: "40px",
            width: "250px",
            position: "absolute",
            right: "0",
            top: "10%",
            backgroundColor: "rgb(210, 91, 91)",
            fontSize: "1.1rem",
            color: "white",
            fontFamily: "cursive",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          {" "}
          Item in already in the cart{" "}
        </Box>
      )}
    </>
  );
}

export default App;
