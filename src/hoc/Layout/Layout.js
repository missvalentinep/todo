import React from 'react';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
const layout = props => {

    return (
        <div>
            <Toolbar />
            <main>
                {props.children}
            </main>

        </div>
    );
}

export default layout;