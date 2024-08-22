import React from 'react';
import './Home.css';
import Nav from "../nav/Nav";
import Book from '../book/Book';
import Features from "../features/Features"
import Footer from '../footer/Footer';

const Home = () => (
  <div className="home-page">
    <Nav />
    <section className="hero-section">
      <div className="hero-content">
        <h1>Your Next Great Read Awaits</h1>
        <p>Discover a world of knowledge and imagination. Whether you're looking for the latest bestseller or a timeless classic, we've got you covered.</p>
        <button className="explore-btn">Explore Now</button>
      </div>
      <div className="hero-image">
        <img src="https://images.pexels.com/photos/8014601/pexels-photo-8014601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Bookshelf" />
      </div>
    </section>
    <Book />
    <Features/>
    <Footer/>
  </div>
);

export default Home;
