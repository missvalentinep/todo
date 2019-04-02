import React from 'react';

import classes from './Sidedrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sidedrawer = props => {
    const classList = [classes.Sidedrawer, props.show ? classes.Open : classes.Closed]
    return (
        <React.Fragment>
            <Backdrop show={props.show} clicked={props.close} />
            <div className={classList.join(" ")}>
                <NavigationItems />
            </div>
        </React.Fragment>
    )
};

export default sidedrawer;