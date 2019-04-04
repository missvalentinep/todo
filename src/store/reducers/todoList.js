import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../utils/updateObject';

const initialState = {
    todos: [
        {
            id: Math.random(),
            dateAdded: new Date(),
            text: 'Hey there!',
            completed: false
        },
        {
            id: Math.random(),
            dateAdded: new Date(),
            text: 'Howdy',
            completed: false
        },
        {
            id: Math.random(),
            dateAdded: new Date(),
            text: 'Lol',
            completed: true
        }
    ],
}


const addTodoItem = (state, action) => {
    const newTodo = {
        id: Math.random(),
        dateAdded: new Date(),
        text: action.text,
        completed: false
    };

    const updatedTodosList = state.todos.concat(newTodo);
    return updateObject(state, { todos: updatedTodosList });
}


const removeTodoItem = (state, action) => {
    const updatedTodosList = state.todos.filter(item => item.id !== action.id);
    return updateObject(state, { todos: updatedTodosList });
}


const toggleTodoItemCompletion = (state, action) => {
    const todoToUpdate = state.todos.filter(item => item.id === action.id)[0];
    const prevStatus = todoToUpdate.completed;
    const updatedTodo = updateObject(todoToUpdate, { completed: !prevStatus });
    const newTodoList = state.todos.filter(item => item.id !== action.id);
    
    newTodoList.push(updatedTodo);

    return updateObject(state, { todos: newTodoList });
}

const todoList = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO_ITEM: return addTodoItem(state, action);
        case actionTypes.REMOVE_TODO_ITEM: return removeTodoItem(state, action);
        case actionTypes.TOGGLE_TODO_ITEM_COMPLETION: return toggleTodoItemCompletion(state, action);
        default: return state
    }
}

export default todoList;