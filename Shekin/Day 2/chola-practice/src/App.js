import React, { useState } from 'react';
import ProductCard from '../src/components/product';
import CartSummary from '../src/components/cardsumary';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    {
      id: 1,
      description: 'Product 1',
      price: 10.0,
      image: "/image/prod1.jpg",
    }, 
    {
      id: 2,
      description: 'Product 2',
      price: 15.0,
      image: '/image/prod2.png',
    },
    {
      id: 3,
      description: 'Product 3',
      price: 20.0,
      image: '/image/prod3.png',
    },
    {
      id: 4,
      description: 'Product 4',
      price: 25.0,
      image : '/image/pro4.png',
    },
  ];

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="App">
      <h1>Product Store</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <CartSummary cartItems={cartItems} />
    </div>
  );
}

export default App;