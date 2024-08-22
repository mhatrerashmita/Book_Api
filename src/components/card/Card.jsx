import PropTypes from 'prop-types';
import { useState } from 'react';
import Models from '../model/Models'; 
import './Card.css'; // Import your CSS file

const Card = ({ book, onAddToCart }) => {
  if (!Array.isArray(book)) {
    return <div>Invalid data</div>;
  }

  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();

  const handleAddToCart = (item) => {
    if (typeof onAddToCart === 'function') {
      onAddToCart(item);
    } else {
      console.error('onAddToCart is not a function');
    }
  };

  return (
    <div className="card-container">
      {book.map((item, index) => {
        const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
        const amount = item.saleInfo.listPrice?.amount;
        if (thumbnail && amount) {
          return (
            <div key={index} className="card" onClick={() => { setShow(true); setItem(item); }}>
              <img src={thumbnail} alt={item.volumeInfo.title} className="thumbnail" />
              <div className="bottom">
                <h3 className="title">{item.volumeInfo.title}</h3>
                <p className="amount">&#8377;{amount}</p>
                <button 
                  className="explore-btn" 
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering card click event
                    handleAddToCart(item);
                  }}
                >
                 Read More
                </button>
              </div>
            </div>
          );
        }
        return null;
      })}
      <Models show={show} item={bookItem} onClose={() => { setShow(false); }} />
    </div>
  );
};

Card.propTypes = {
  book: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired, // Ensure this matches the prop type
};

export default Card;
