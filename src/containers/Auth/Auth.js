import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/actions/index';
import classes from './Auth.css';
import Authorization from './Signup';
import Logout from './Logout';

const auth = props => {


    let authComponent = <Authorization signup={false} submitted={props.onLogin} loading={props.loading} error={props.error} auth={props.auth} redirectUrl={props.redirectUrl} />;

    if (props.signup) {
        authComponent = <Authorization signup={true} submitted={props.onSignUp} loading={props.loading} error={props.error} auth={props.auth} redirectUrl={props.redirectUrl} />;
    }

    if (props.logout) {
        authComponent = <Logout onLogout={props.onLogout} redirectUrl={props.redirectUrl} />
    }

    return (
        <div className={classes.Auth}>
            {authComponent}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        auth: state.auth.token !== null,
        redirectUrl: state.auth.redirectUrl
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCheckAuthToken: (token) => dispatch(actions.checkAuthToken(token)),
        onSignUp: (email, password) => dispatch(actions.signupInit(email, password)),
        onLogin: (email, password) => dispatch(actions.loginInit(email, password)),
        onLogout: () => dispatch(actions.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(auth);