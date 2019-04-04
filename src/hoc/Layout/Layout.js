import React from 'react';
import classes from './Layout.css';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const layout = props => {
    return (
        <div className={classes.Layout}>
            <Toolbar />
            <main>
                {props.children}
            </main>
        </div>
    );
}

export default layout;