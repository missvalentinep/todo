import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../utils/updateObject';


const initialState = {
    todos: [],
    loading: true,
    error: null
}


const addTodoItem = (state, action) => {
    const updatedTodosList = state.todos.concat(action.newTodo);
    return updateObject(state, { todos: updatedTodosList });
}


const removeTodoItem = (state, action) => {
    const updatedTodosList = state.todos.filter(item => item.id !== action.id);
    return updateObject(state, { todos: updatedTodosList });
}


const toggleTodoItemCompletionSuccess = (state, action) => {
    const todoToUpdate = state.todos.filter(item => item.id === action.id)[0];
    const prevStatus = todoToUpdate.completed;
    const updatedTodo = updateObject(todoToUpdate, { completed: !prevStatus });
    const newTodoList = state.todos.filter(item => item.id !== action.id);
    newTodoList.push(updatedTodo);

    return updateObject(state, { todos: newTodoList });
}

const fetchTodoItemsStart = (state, action) => {
    return updateObject(state, { loading: true });
}

const fetchTodoItemsSuccess = (state, action) => {
    return updateObject(state, { todos: action.items, loading: false });
    
}

const fetchTodoItemsFail = (state, action) => {
    return updateObject(state, { loading: false, error: action.error });
}

const todoList = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO_ITEM: return addTodoItem(state, action);
        case actionTypes.REMOVE_TODO_ITEM: return removeTodoItem(state, action);
        case actionTypes.TOGGLE_TODO_ITEM_COMPLETION_SUCCESS: return toggleTodoItemCompletionSuccess(state, action);
        case actionTypes.FETCH_TODO_ITEMS_START: return fetchTodoItemsStart(state, action);
        case actionTypes.FETCH_TODO_ITEMS_SUCCESS: return fetchTodoItemsSuccess(state, action);
        case actionTypes.FETCH_TODO_ITEMS_FAIL: return fetchTodoItemsFail(state, action);

        default: return state;
    }
}

export default todoList;