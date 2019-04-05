import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';
import TodoItem from './TodoItem/TodoItem';
import Loading from '../../../components/UI/Loading/Loading';

const todoList = props => {


    useEffect(() => {
        props.onFetchTodos();
    }, []);

    useEffect(() => console.log('mounted or updated'));

    let todoElements = props.todosList.map(item => (
        <TodoItem
            key={item.id}
            clicked={() => props.onToggleTodoItem(item.id, item.completed)}
            delete={() => props.onRemoveTodo(item.id)}
            completed={item.completed}>
            {item.text}
        </TodoItem>)
    );

    if (props.loading) {
        todoElements = <Loading />;
    };

    return (
        <React.Fragment>
            {todoElements}
        </React.Fragment>
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
        onRemoveTodo: (id) => dispatch(actions.removeTodoItemInit(id)),
        onToggleTodoItem: (id, prevState) => dispatch(actions.toggleTodoItemCompletionInit(id, prevState)),
        onFetchTodos: () => dispatch(actions.fetchTodoItemsInit()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(todoList);