import React from "react";
import './TodoListItem.css'
const TodoListItem = ({ todo, onRemovePressed, onTodoCompleted }) => (
    <div className={todo.isCompleted ? "todo-item-container-completed" :  "todo-item-container"}>
        <h3>{todo.text}</h3>
        <div className="button-container">
            <button
                className="completed-button"
                onClick={() => onTodoCompleted(todo.text)}
                
            >Mark as completed</button>
            <button
                className="remove-button"
                onClick={() => onRemovePressed(todo.text)}
            >Remove</button>
        </div>
    </div>
);

export default TodoListItem;