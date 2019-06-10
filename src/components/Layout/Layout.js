import React from 'react';

import Aux from '../../hoc/Aux'
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.scss'

const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className='content'>
            {props.children}
        </main>
    </Aux>
);

export default layout;
