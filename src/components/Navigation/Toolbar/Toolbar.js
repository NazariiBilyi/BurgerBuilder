import React from 'react';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import './Toolbar.scss';

const toolbar = (props) => (
    <header className='toolbar'>
        <DrawerToggle toggle={props.clicked}/>
        <Logo classname='logo'/>
        <nav className='desktop-only'>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;
