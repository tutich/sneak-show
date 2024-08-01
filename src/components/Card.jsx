import React from 'react';

const Card = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h1 className="text-lg font-bold mb-4">Cart</h1>
      <hr className="mb-4" />
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => (
          <div key={index} className="flex items-center justify-between mb-4">
            <img src={item.thumbnail} alt={item.title} className="w-12 h-12" />
            <div>
              <p className="text-sm">{item.title}</p>
              <p className="text-sm">
                {item.price} x {item.quantity} <span className="font-bold">${item.price * item.quantity}</span>
              </p>
            </div>
            <button onClick={() => removeFromCart(index)}>
              <img src="/images/icon-delete.svg" alt="delete" />
            </button>
          </div>
        ))
      ) : (
        <p className="text-sm">Your cart is empty</p>
      )}
      <button className="w-full text-center bg-orange-2 text-white py-2 rounded mt-4">Checkout</button>
    </div>
  );
};

export default Card;
