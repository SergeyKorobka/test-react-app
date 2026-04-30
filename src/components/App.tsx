import { useState } from 'react';
import '../App.css';
import Product from './Product';

function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };
  return (
    <>
      <h1>Products</h1>
      <Product
        clicks={clicks}
        handleClick={handleClick}
        name="potato"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Product
        clicks={clicks}
        handleClick={handleClick}
        name="apple"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={12.99}
      />
      <Product
        clicks={clicks}
        handleClick={handleClick}
        name="banana"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={15.99}
      />
    </>
  );
}

export default App;
