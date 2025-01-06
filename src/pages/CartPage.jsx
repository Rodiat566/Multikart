import React, { useState } from 'react';
// import ProductList from './productList';
import Cart from './Cart';
import productDetails from '../data/productDetails.json'
import SingleProduct from '../component/SingleProduct';



export default function CartPage() {
  const [cart, setCart] = useState([]);
  
  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove product from cart
  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== productId)
    );
  };

  // Update product quantity in cart
  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">E-Commerce Website</h1>
      <div className="flex gap-10">
        {/* Product List */}
        <SingleProduct productDetails={productDetails} addToCart={addToCart} />
        {/* Cart */}
        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      </div>
      <div></div>
    </div>
  );
}
