import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import classes from './TodoList.css';
import TodoItem from './TodoItem/TodoItem';
import Input from '../../components/UI/Input/Input';
import Icon from '../../components/UI/Icon/Icon';
import Loading from '../../components/UI/Loading/Loading';

const todoList = props => {

    const [userInput, setUserInput] = useState('');

    useEffect(() => {
        props.onFetchTodos();

    }, []);

    const userInputHandler = (event) => {
        setUserInput(event.target.value);
    }

    const keyPressedHandler = event => {
        if (event.key === "Enter") {
            addTodoItem();
        }
    }
    const addTodoItem = () => {
        setUserInput('');
        props.onAddTodo(userInput);
    };



    console.log(props.loading);
    let todosElements = <Loading />;

    if (!props.loading) {
        todosElements = props.todosList.map(item => (
            <TodoItem
                key={item.id}
                clicked={() => props.onToggleTodoItem(item.id, item.completed)}
                delete={() => props.onRemoveTodo(item.id)}
                completed={item.completed}>
                {item.text}
            </TodoItem>)
        );
    };

    return (
        <div className={classes.TodoList}>
            <div className={classes.InputContainer}>
                <Input type={"text"}
                    changed={userInputHandler}
                    value={userInput}
                    submitted={keyPressedHandler}>
                    Add your todo item!
            </Input>
                <Icon type={"enter"} clicked={addTodoItem} />
            </div>
            {todosElements}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        todosList: state.todo.todos,
        loading: state.todo.loading,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddTodo: (todoItem) => dispatch(actions.sendTodoItem(todoItem)),
        onRemoveTodo: (id) => dispatch(actions.removeTodoItemInit(id)),
        onToggleTodoItem: (id, prevState) => dispatch(actions.toggleTodoItemCompletionInit(id, prevState)),
        onFetchTodos: () => dispatch(actions.fetchTodoItemsInit()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(todoList);