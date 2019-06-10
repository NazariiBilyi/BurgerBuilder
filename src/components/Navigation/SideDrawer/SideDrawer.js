import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import './SideDrawer.scss';

const sideDrawer = (props) => {
  return (
      <div className='side-drawer'>
         <Logo height='11%'/>
         <nav>
             <NavigationItems />
         </nav>
      </div>
  );
};

export default sideDrawer;
