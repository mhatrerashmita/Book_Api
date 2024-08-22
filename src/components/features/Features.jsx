import React from 'react';
import './Feature.css'; // Custom CSS for styling

const BookCategory = () => {
  const categories = [
    { name: 'Fiction', imageUrl: 'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg' },
    { name: 'Science', imageUrl: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg' },
    { name: 'Biography', imageUrl: 'https://images.pexels.com/photos/3207628/pexels-photo-3207628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Mystery', imageUrl: 'https://images.pexels.com/photos/1114897/pexels-photo-1114897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Fantasy', imageUrl: 'https://images.pexels.com/photos/356533/pexels-photo-356533.jpeg' },
    { name: 'Romance', imageUrl: 'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg' },
  ];

  return (
    <section className="book-category">
      <h2 className="category-title">Browse by Category</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.imageUrl} alt={category.name} className="category-image" />
            <div className="category-overlay">
              <h3 className="category-name">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BookCategory;
