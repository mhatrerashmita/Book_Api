import React, { useState } from 'react';
import Card from '../card/Card';
import './Book.css'; // Import a CSS file for additional styling


function Book() {
  const [Title, setTitle] = useState("");
  const [Data, setData] = useState([]);
  const onChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  
    const encodedTitle = encodeURIComponent(Title); // Encode the search term
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodedTitle}&key=AIzaSyCChh37KS8MM20dyc9L79utVYeTvIxKB4E`;
  
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        return response.json();
      })
      .then((value) => {
        setData(value.items || []);
      })
      .catch((error) => {
        console.error('Fetch error:', error);
      });
  };
  return (
    <div className='background'>
   
    <div className="book-container">
    
      <h1 className="title">Book Search</h1>
      <div className="search-form">
        <form onSubmit={onSubmitHandler}>
          <input
            type="text"
            className="search-input"
            placeholder="Enter book title"
            value={Title}
            onChange={onChangeHandler}
          />
          <button className="search-button" type="submit">Search</button>
        </form>
      </div>
      <div className="results">
        <Card book={Data} />
      </div>
     
    </div>
    </div>
    
  );
}
export default Book;
