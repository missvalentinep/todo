import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';


const login = props => {
    return (
        <React.Fragment>
            <h1>Log In</h1>
            <Input type={"text"}>Email</Input>
            <Input type={"password"}>Password</Input>
            <Button>Log In</Button>
            <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
        </React.Fragment>

    )
}

export default login;