import React from 'react';

import classes from './TodoItem.css';
import Icon from '../../../components/UI/Icon/Icon';
const todoItem = props => {
    const classList = [classes.TodoItem, props.completed ? classes.Completed : null];
    return (
        <div className={classes.TodoContainer}>
            <p className={classList.join(' ')} onClick={props.clicked}>{props.children} </p>
            <Icon type="trash" clicked={props.delete} />
        </div>

    );
};

export default todoItem;