import React from 'react';

function CartSummary({ cartItems }) {
  const totalValue = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.description}</li>
        ))}
      </ul>
      <p>Total: ${totalValue.toFixed(2)}</p>
    </div>
  );
}

export default CartSummary;