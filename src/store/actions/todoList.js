import * as actionTypes from './actionTypes';
import axios from '../../axios';


export const addTodoItem = todoItem => {

    return {
        type: actionTypes.ADD_TODO_ITEM,
        newTodo: todoItem
    };
}

export const removeTodoItem = id => {
    return {
        type: actionTypes.REMOVE_TODO_ITEM,
        id: id
    };
}

export const toggleTodoItemCompletionSuccess = id => {
    return {
        type: actionTypes.TOGGLE_TODO_ITEM_COMPLETION_SUCCESS,
        id: id
    };
}

export const sendTodoItem = todoItem => {
    const newTodo = {
        userId: 1,
        dateAdded: new Date(),
        text: todoItem,
        completed: false,
        id: null
    };

    return dispatch => {
        axios.post('todos.json', newTodo).then(res => {
            console.log(res);
            newTodo.id = res.data.name;
            dispatch(addTodoItem(newTodo));
        }).catch(err => {
            console.log(err);
        })
    };
}

export const fetchTodoItemsSuccess = (items) => {
    return {
        type: actionTypes.FETCH_TODO_ITEMS_SUCCESS,
        items
    };
}

export const fetchTodoItemsFail = (err) => {
    return {
        type: actionTypes.FETCH_TODO_ITEMS_FAIL,
        error: err
    };
}

export const fetchTodoItemsStart = () => {
    return {
        type: actionTypes.FETCH_TODO_ITEMS_START
    };
}

export const fetchTodoItemsInit = () => {
    return dispatch => {
        dispatch(fetchTodoItemsStart());
        axios.get("todos.json").then(res => {
            const todosArray = [];
            for (let key in res.data) {
                todosArray.push({
                    ...res.data[key],
                    id: key
                })
            };
            dispatch(fetchTodoItemsSuccess(todosArray));
        }).catch(err => {
            dispatch(fetchTodoItemsFail(err));
            console.log(err);
        })
    }
}

export const removeTodoItemInit = (id) => {
    return dispatch => {
        axios.delete("todos/" + id + ".json").then(res => {
            dispatch(removeTodoItem(id));
        }).catch(err => {
            console.log(err);
        })
    }
}

export const toggleTodoItemCompletionInit = (id, prevState) => {
    return dispatch => {
        axios.patch("todos/" + id + ".json", { completed: !prevState }).then(res => {
            dispatch(toggleTodoItemCompletionSuccess(id, prevState));
        }).catch(err => {
            console.log(err);
        });

    }
}
