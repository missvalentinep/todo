import React from 'react';

const navigationItem = props => (
    <li className="navigationItem">
        {props.children}
    </li>
);

export default navigationItem;