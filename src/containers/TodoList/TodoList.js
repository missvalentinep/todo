import React, { useState } from 'react';

import classes from './TodoList.css';
import TodoItem from './TodoItem/TodoItem';
import Input from '../../components/UI/Input/Input';

const todoList = props => {


    const [todos, setTodos] = useState([
        {
            id: Math.random(),
            text: 'Hey there',
            completed: false
        },
        {
            id: Math.random(),
            text: 'Howdy',
            completed: false
        },
        {
            id: Math.random(),
            text: 'Lol',
            completed: true
        }
    ]);

    const [userInput, setUserInput] = useState('');

    const toggleTodoItem = key => {
        const todoToUpdate = todos.filter(item => item.id === key)[0];
        const prevStatus = todoToUpdate.completed;
        const updatedTodoList = todos.filter(item => item.id !== key);
        updatedTodoList.push({ ...todoToUpdate, completed: !prevStatus });
        setTodos(updatedTodoList);
    }

    const userInputHandler = (event) => {
        setUserInput(event.target.value);

    }

    const addTodoItem = event => {
        if (event.key === "Enter") {
            const newTodo = {
                id: Math.random(),
                text: userInput,
                completed: false
            }
            setTodos([...todos, newTodo]);
            setUserInput('');
        }
    }

    const deleteTodoItem = key => {
        const updatedTodoList = todos.filter(item => item.id !== key);
        setTodos(updatedTodoList);
    }


    return (
        <div className={classes.TodoList}>
            <Input type={"text"}
                changed={userInputHandler}
                value={userInput}
                submitted={addTodoItem}>
                Add your todo item!
            </Input>
            {todos.map(item => (
                <TodoItem
                    key={item.id}
                    clicked={() => toggleTodoItem(item.id)}
                    delete={() => deleteTodoItem(item.id)}
                    completed={item.completed}>
                    {item.text}
                </TodoItem>)
            )}

        </div>
    )
}

export default todoList;