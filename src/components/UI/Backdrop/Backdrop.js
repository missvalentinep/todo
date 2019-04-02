import React from 'react';

import classes from './Backdrop.css';

const backdrop = props => {
    const classList = [classes.Backdrop, props.show ? classes.Open : classes.Closed];

    return (
        <div className={classList.join(' ')} onClick={props.clicked}></div>
    );
}

export default backdrop;