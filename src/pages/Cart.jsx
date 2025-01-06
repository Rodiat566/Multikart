import React from 'react';
import Header from '../component/Header';
import TitleHeader from '../component/TitleHeader';
import MultiCover from '../component/MultiCover';
import BlogFooter from '../component/BlogFooter';

export default function Cart({ cart = [], removeFromCart, updateQuantity }) {
  const calculateTotal = (cart) =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const totalAmount = calculateTotal(cart);

  return (
    <div>
      <div>
        <Header />
        <TitleHeader />
      </div>

      <div className="container mx-auto p-4">
        <div className="w-full md:w-2/3 lg:w-1/2 mx-auto border p-4 rounded-lg shadow-md">
          {cart.length === 0 ? (
            <div className="text-center">
              <p className="text-gray-500 mb-4">Your cart is empty.</p>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => window.location.href = '/'}
              >
                Back to Shop
              </button>
            </div>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center mb-4">
                  <img
                    src={item.image || 'https://via.placeholder.com/150'}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 ml-4">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-500">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        aria-label="Decrease quantity"
                        className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        aria-label="Increase quantity"
                        className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="ml-4 text-red-500 hover:underline"
                    aria-label={`Remove ${item.name}`}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <hr className="my-4" />
              <p className="text-lg font-semibold">
                Total: ${totalAmount.toFixed(2)}
              </p>
            </div>
          )}
        </div>
      </div>

      <div>
        <MultiCover />
        <BlogFooter />
      </div>
    </div>
  );
}
