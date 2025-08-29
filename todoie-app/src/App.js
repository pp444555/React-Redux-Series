import Header from './Components/Header';
import ToDoItem from './Components/ToDoItems';
import Button from './Components/button';
import CounterComponenet from './Components/CounterComponent';
import './style.css';

const App = () => {
  return (
    <div className="todo-container">
      {/* <Header title="To-Do-App"/>
      <ToDoItem text = "Code" completed = {true} />
      <ToDoItem text="Eat"/>
      <ToDoItem text = "Sleep"/>
      <ToDoItem text = "Play"/>
      <Button/> */}
      <CounterComponenet/>
      <CounterComponenet/>
      <CounterComponenet/>
      <CounterComponenet/>
    </div>
  )
};

export default App;
