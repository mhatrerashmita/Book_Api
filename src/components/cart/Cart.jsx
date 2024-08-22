import React, { useState } from 'react';
import Card from '../card/Card'; // Adjust path as needed

const ParentComponent = () => {
  const [cart, setCart] = useState([]);

  // Function to handle adding items to the cart
  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Example book data
  const books = [
    {
      volumeInfo: {
        title: 'Book Title 1',
        imageLinks: {
          smallThumbnail: 'https://example.com/image1.jpg',
        },
      },
      saleInfo: {
        listPrice: {
          amount: 299,
        },
      },
    },
    // Add more book objects as needed
  ];

  return (
    <div>
      <Card book={books} onAddToCart={handleAddToCart} />
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.volumeInfo.title} - &#8377;{item.saleInfo.listPrice.amount}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ParentComponent;
