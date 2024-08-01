
import Navbar from 'scenes/nav';
import './index.css';
import Carousel from 'scenes/carousel';
import Details from 'scenes/details';
import { useState } from 'react';

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    setCartItems(cartItems.filter((_, i) => i !== index));
  };

  const getTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="app w-[90%] lg:w-[80%] items-center justify-center mx-auto">
      <Navbar cartItems={cartItems} removeFromCart={removeFromCart} totalQuantity={getTotalQuantity()} />
      <div className=' flex flex-col lg:flex-row items-center justify-between lg:justify-around'>
        <Carousel />
        <Details addToCart={addToCart} />
      </div>

    </div>
  );
}

export default App;
