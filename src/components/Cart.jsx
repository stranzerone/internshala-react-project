import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItems';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold text-center">Your Cart is Empty</h2>
        <Link to="/" className="block mt-4 text-center text-blue-600 hover:underline">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="mt-6 text-right">
        <p className="text-lg font-semibold">Total: ${totalAmount.toFixed(2)}</p>
        <button className="mt-2 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
