import React from 'react';
import classes from './NavigationItems.css';
import { Link } from 'react-router-dom';

import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = props => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem><Link to='/'>All Todo's</Link></NavigationItem>
            <NavigationItem><Link to='/'>Starred</Link></NavigationItem>
            <NavigationItem><Link to='/auth'>Log In</Link></NavigationItem>
        </ul>
    );
};

export default navigationItems;