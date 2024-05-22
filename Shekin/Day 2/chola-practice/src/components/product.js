import React, { useState } from 'react';

function ProductCard({ product, onAddToCart }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setIsAdded(true);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.description} />
      <h3>{product.description}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={handleAddToCart} disabled={isAdded}>
        {isAdded ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;