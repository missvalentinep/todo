import React from 'react';
import classes from './NavigationItems.css';
import { Link } from 'react-router-dom';

import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = props => {
    let navItems = (<React.Fragment>
        <NavigationItem><Link to='/login'>Log In</Link></NavigationItem>
        <NavigationItem><Link to='/signup'>Sign Up</Link></NavigationItem>
    </React.Fragment>);

    if (props.authenticated) {
        navItems = (<React.Fragment>
            <NavigationItem><Link to='/'>All Todo's</Link></NavigationItem>
            <NavigationItem><Link to='/'>Starred</Link></NavigationItem>
            <NavigationItem><Link to='/logout'>Log Out</Link></NavigationItem>
        </React.Fragment>);
    }

    return (
        <ul className={classes.NavigationItems}>
            {navItems}
        </ul>
    );
};

export default navigationItems;