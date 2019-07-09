import React from 'react';

import './DrawerToggle.scss';

const drawerToggle = (props) => (

    <div className='drawer-toggle' onClick={props.toggle}>
        <div></div>
        <div></div>
        <div></div>
    </div>

);

export default drawerToggle;
