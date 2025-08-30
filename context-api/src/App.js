import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import {useContext} from 'react';
import {counterContext} from './context/Counter'

function App() {
  const counterState = useContext(counterContext);

  console.log(counterState);
  return (
    <div className="App">
      <h2>Count is {counterState.count}</h2>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
  );
}

export default App;
