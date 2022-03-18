import React from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import "./TodoList.css"

const TodoList = ({ todos = [{text: 'New Todo'}] }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map((todo, index) => (
            <TodoListItem key={index} todo={todo} />
        ))}
    </div>
);

export default TodoList;