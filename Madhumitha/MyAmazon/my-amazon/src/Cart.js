import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>The cart is empty</p>
      ) : (
        <div className="data-container">
          {cart.map((item, index) => (
            <div className="card-div" key={index}>
                <img src={item.img}></img>
            <h1>{item.Name} </h1>  
              <p>${item.price}</p> 
              <p>{item.description} </p> 
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
