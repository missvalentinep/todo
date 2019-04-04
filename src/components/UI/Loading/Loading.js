import React from 'react';

import classes from './Loading.css';

const loading = props => (
    <div className={classes.Centered}>
        <div className={classes.Loading}><div></div><div></div><div></div><div></div></div>
    </div>
);

export default loading;