import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import classes from './Layout.css';

import * as actions from '../../store/actions/index';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const layout = props => {

    useEffect(() => {
        props.onCheckAuthToken();
    }, []);

    return (
        <div className={classes.Layout}>
            <Toolbar />
            <main>
                {props.children}
            </main>
        </div>
    );
}


const mapDispatchToProps = dispatch => {
    return {
        onCheckAuthToken: (token) => dispatch(actions.checkAuthToken(token)),
    }
}

export default connect(null, mapDispatchToProps)(layout);