import React from 'react';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'

import './Toolbar.scss';

const toolbar = (props) => (
    <header className='toolbar'>
        <div>MENU</div>

        <Logo height='80%' />
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;
