import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const logout = props => {
    useEffect(() => {
        props.onLogout();
    }, []);
    return (<Redirect to={props.redirectUrl} />);
};

export default logout;