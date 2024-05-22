import React, { useState } from "react";
import Cart from "./Cart";
import ProductList from "./Productlist";

const App = () => {
  const [cart, setCart] = useState([]);
  

  // const isProductInCart = (productId) => {
  //   return cart.includes(productId);
  // };

  const addToCart = (product) => {
    setCart([...cart, product]);
    // addToCart(product);
    
alert("added!");


  };

  return (
    <div>
      <h1>Welcome to MyAmazon</h1>
      <ProductList addToCart={addToCart}  />
      <Cart cart={cart} />
    </div>
  );
};

export default App;
