import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
const navigationItems = props => {
    return (
        <ul>
            <NavigationItem>Item 1</NavigationItem>
            <NavigationItem>Item 2</NavigationItem>
        </ul>
    );
};

export default navigationItems;