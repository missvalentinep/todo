import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import classes from './TodoList.css';
import TodoItem from './TodoItem/TodoItem';
import Input from '../../components/UI/Input/Input';

const todoList = props => {

    const [userInput, setUserInput] = useState('');

    const userInputHandler = (event) => {
        setUserInput(event.target.value);
    }

    const addTodoItem = event => {
        if (event.key === "Enter") {
            setUserInput('');
            props.onAddTodo(userInput);
        }
    }

    return (
        <div className={classes.TodoList}>
            <Input type={"text"}
                changed={userInputHandler}
                value={userInput}
                submitted={addTodoItem}>
                Add your todo item!
            </Input>
            {props.todosList.map(item => (
                <TodoItem
                    key={item.id}
                    clicked={() => props.onToggleTodoItem(item.id)}
                    delete={() => props.onRemoveTodo(item.id)}
                    completed={item.completed}>
                    {item.text}
                </TodoItem>)
            )}

        </div>
    )
}

const mapStateToProps = state => {
    return {
        todosList: state.todo.todos
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTodo: (todoItem) => dispatch(actions.addTodoItem(todoItem)),
        onRemoveTodo: (id) => dispatch(actions.removeTodoItem(id)),
        onToggleTodoItem: (id) => dispatch(actions.toggleTodoItemCompletion(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(todoList);