import React, { useState } from "react";
import Cart from "./Cart";
import ProductList from "./Productlist";
import Header from "./Header";
import CarouselPart from "./Carousel";

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
      <Header /><h1>Welcome to MyAmazon</h1>
      <CarouselPart 
      
      
      />
      <div className="body">
      
      <ProductList addToCart={addToCart} 
      
      
      />
      <Cart cart={cart} />
      </div>
    </div>
  );
};

export default App;
