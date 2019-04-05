import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import classes from './Todo.css';
import TodoList from './TodoList/TodoList';
import Input from '../../components/UI/Input/Input';
import Icon from '../../components/UI/Icon/Icon';

const todo = props => {

    const [userInput, setUserInput] = useState('');
   
    const userInputHandler = (event) => {
        setUserInput(event.target.value);
    };

    const keyPressedHandler = event => {
        if (event.key === "Enter") {
            addTodoItem();
        };
    };

    const addTodoItem = () => {
        setUserInput('');
        props.onAddTodo(userInput);
    };
    

    return (
        <div className={classes.Todo}>
            <div className={classes.InputContainer}>
                <Input type={"text"}
                    changed={userInputHandler}
                    value={userInput}
                    submitted={keyPressedHandler}>
                    Add your todo item!
            </Input>
                <Icon type={"enter"} clicked={addTodoItem} />
            </div>
            <TodoList />
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(todo);