import React from 'react';

import classes from './SidedrawerToggle.css';

const sidedrawerToggle = props => (
    <div className={classes.SidedrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default sidedrawerToggle;