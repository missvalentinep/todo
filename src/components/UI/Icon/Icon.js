import React from 'react';

import deleteIcon from '../../../assets/icons/delete.png';

const icon = props => {
    let iconSrc = '';
    let alt = 'img';
    let style = {};

    switch (props.type) {
        case "trash":
            iconSrc = deleteIcon;
            alt = 'delete';
            style = { width: "20px", height: "20px", cursor: "pointer" };
            break;
        default:
            break;
    };

    return (
        <img src={iconSrc} onClick={props.clicked} alt={alt} style={style} />
    );
};

export default icon;