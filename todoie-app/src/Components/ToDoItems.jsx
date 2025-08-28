import react from 'react';

const ToDoItem = (props) =>{
    return (
        <li className = "todo-item">
            <span>
            {props.completed ? <></> :
            <input type="checkbox"/>}
            <span className="Todo-item-text">{props.text}</span>
            </span>
            <p>..</p>
        </li>
    )
}

export default ToDoItem;