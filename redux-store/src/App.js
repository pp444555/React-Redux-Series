import logo from './logo.svg';
import './App.css';
import Counter from './components/count'
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
     <button onClick={e => dispatch({type : 'INCREMENT'})}>Increment</button>
      <Counter/>
     <button onClick={e => dispatch({type : 'DECREMENT'})}>Decrement</button>

    </div>
  );
}

export default App;
