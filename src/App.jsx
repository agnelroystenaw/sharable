import './App.scss';
import { useState } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';

/**
 * App components is the parent of all components
 * @returns jsx
 */
function App() {
  // states are added below for App component
  const [items, setItems] = useState(0);

  /**
   * handleCart function is used to update the cart items
   * when clicked on the add to cart button of cart items
   */
  const handleCart = () => {
    setItems(items + 1);
  };

  return (
    <>
      <Navbar items={items} />
      <Home handleCart={handleCart} />
    </>
  );
}

export default App;
