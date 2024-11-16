import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(addItemToCart(item));
  };

  const handleDecreaseQuantity = () => {
    dispatch(removeItemFromCart(item.id));
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 rounded shadow">
      <div className="flex items-center space-x-4">
        <img src={item.thumbnail} alt={item.title} className="w-20 h-20 object-cover rounded" />
        <div>
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-gray-600">${item.price}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={handleDecreaseQuantity}
          className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          -
        </button>
        <span className="text-lg">{item.quantity}</span>
        <button
          onClick={handleIncreaseQuantity}
          className="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
