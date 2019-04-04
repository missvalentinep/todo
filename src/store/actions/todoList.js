import * as actionTypes from './actionTypes';

export const addTodoItem = todoItem => {
    return {
        type: actionTypes.ADD_TODO_ITEM,
        text: todoItem
    };
}

export const removeTodoItem = id => {
    return {
        type: actionTypes.REMOVE_TODO_ITEM,
        id: id
    };
}

export const toggleTodoItemCompletion = id => {
    return {
        type: actionTypes.TOGGLE_TODO_ITEM_COMPLETION,
        id: id
    }
}