import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Loading from '../../components/UI/Loading/Loading';


const authorization = props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [fullName, setFullName] = useState('');

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    // const fullNameChangeHandler = (event) => {
    //     setFullName(event.target.value);
    // }

    const initAuth = () => {
        props.submitted(email, password);
    }

    const header = props.signup ? <h1>Sign Up</h1> : <h1>Log In</h1>;
    const buttonText = props.signup ? "Sign Up" : "Log In";
    const redirectText = props.signup ? <p>Already have an account? <Link to='/login'>Log In</Link></p> : <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>;

    let error = null;
    let errorMessage = null;

    if (props.error) {
        switch (props.error.response.data.error.message) {
            case "EMAIL_EXISTS":
                errorMessage = "Email already taken";
                break;
            case "EMAIL_NOT_FOUND":
            case "INVALID_PASSWORD":
                errorMessage = "Wrong email or password!";
                break;
            case "INVALID_EMAIL":
                errorMessage = "Invaild email address";
                break;
            default:
                errorMessage = props.error.response.data.error.message;
                break;
        }
        error = <p><strong>Error: <span>{errorMessage}</span></strong></p>;
    }

    let content = (
        <React.Fragment>
            {header}
            {/* <Input type={"text"} value={fullName} changed={fullNameChangeHandler}>Full Name</Input> */}
            <Input type={"email"} value={email} changed={emailChangeHandler}>Email</Input>
            <Input type={"password"} value={password} changed={passwordChangeHandler}>Password</Input>
            {error}
            <Button clicked={initAuth}>{buttonText}</Button>
            {redirectText}
        </React.Fragment>)
        ;

    if (props.loading) {
        content = <Loading />;
    }

    if (props.auth) {
        content = <Redirect to={props.redirectUrl} />;
    }

    return (
        <React.Fragment>
            {content}
        </React.Fragment>
    );
};


export default authorization;