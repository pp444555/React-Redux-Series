import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart';
import Products from './components/Products';
import products from './products.json'
import react,{useState,useEffect} from 'react';

function App() {
  

  return (
    <div className="App">
      <Cart/>
      <div className='products'>
        {products.map((product) => (
          <Products {...product} />
        ))}
        </div>
    </div>
  );
}

export default App;
