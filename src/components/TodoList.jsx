import React from "react";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";
import './TodoList.css';
import { connect } from 'react-redux';
import { markCompleteTodo, removeTodo } from '../storage/actions'

const TodoList = ({ todos = [], onRemovePressed, onTodoCompleted }) => (
    <div className="list-wrapper">
        <NewTodoForm />
        {todos.map((todo, index) => (
            <TodoListItem
                key={index}
                todo={todo} 
                onRemovePressed={onRemovePressed} 
                onTodoCompleted={onTodoCompleted}
                
            />
        ))}
    </div>
);

const mapStateToProps = (state) => ({
    todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onTodoCompleted: text => dispatch(markCompleteTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);