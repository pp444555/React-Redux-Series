import logo from './logo.svg';
import './App.css';
import {useDispatch,useSelector} from 'react-redux';
import {fetchTodos} from './Redux/slices/Todoslice'

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);

  if(state.todo.isLoading){
    return <h1>Loading...</h1>
  }
  return (
    <div className="App">
      <button onClick={(e) => dispatch(fetchTodos())}>Fetch todos</button>
      {state.todo.data && state.todo.data.map((e) => <li>{e.title}</li>)}
    </div>
  );
}

export default App;
