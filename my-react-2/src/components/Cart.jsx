import React from "react";

const Cart = ({ cartItems, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountedPrice = totalPrice - totalPrice * 0.1; // 10% discount

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <div>
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p>${item.price} x {item.quantity}</p>
              </div>
              <div>
                <button onClick={() => decreaseQuantity(item.id)} className="bg-gray-200 px-2 py-1 rounded">-</button>
                <button onClick={() => increaseQuantity(item.id)} className="bg-gray-200 px-2 py-1 rounded">+</button>
                <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-3 py-2 ml-2 rounded">Remove</button>
              </div>
            </div>
          ))}
          <h2 className="text-lg font-bold mt-4">Total: ${discountedPrice.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
