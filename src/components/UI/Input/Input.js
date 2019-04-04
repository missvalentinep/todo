import React from 'react';

import classes from './Input.css';

const input = props => {
    return (
        <input 
            className={classes.Input} 
            type={props.type} 
            placeholder={props.children}
            value={props.value}
            onChange={props.changed} 
            onKeyPress={props.submitted} />
    );
};

export default input;