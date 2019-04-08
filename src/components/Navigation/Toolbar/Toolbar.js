import React, { useState } from 'react'
import { connect } from 'react-redux';

import classes from './Toolbar.css';
import SidedrawerToggle from '../Sidedrawer/SidedrawerToggle/SidedrawerToggle';
import NavigationItems from '../NavigationItems/NavigationItems';
import Sidedrawer from '../Sidedrawer/Sidedrawer';

const toolbar = props => {
    const [sideDrawerVisible, setSideDrawerVisible] = useState(false);

    const toggleSidedrawer = () => {
        setSideDrawerVisible(!sideDrawerVisible);
    }

    return (
        <div className={classes.Toolbar}>
            <div className={classes.MobileOnly}>
                <SidedrawerToggle clicked={toggleSidedrawer} />
                <Sidedrawer show={sideDrawerVisible} close={toggleSidedrawer} />
            </div>

            <div className={classes.DesktopOnly}>
                <NavigationItems authenticated={props.auth} />
            </div>
        </div>

    );
};

const mapStateToProps = state => {
    return {
        auth: state.auth.token !== null
    }
}

export default connect(mapStateToProps, null)(toolbar);