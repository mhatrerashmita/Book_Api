import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Import Bootstrap JS
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

import Home from './components/home/Home';
import Book from './components/book/Book'; // Import the Book component
// import Cart from './components/cart/Cart'; // Import the Cart component

function App() {
  return (
    <>
      <Home />
      {/* Uncomment the line below if you want to display the Book component */}
      {/* <Book /> */}
      {/* <Cart /> */}
    </>
  );
}

export default App;
