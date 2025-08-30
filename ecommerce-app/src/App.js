import logo from './logo.svg';
import './App.css';
import Item from './Components/item'
import Cart from './Components/Cart'

function App() {
  return (
    <div className="App">
      <Item name="Macbook pro" price = "100000"/>
      <Item name="Pendrive" price = "4000"/>
      <Item name="mobile" price = "50000"/>
      <Cart/>
    </div>
  );
}

export default App;
