import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

import './SideDrawer.scss';

const sideDrawer = (props) => {

    let attachedClasses = 'side-drawer close';
    if (props.open) {
        attachedClasses = 'side-drawer open';
    }
  return (
      <Aux>
          <Backdrop clicked={props.closed} show={props.open}/>
          <div className={attachedClasses}>
              <Logo height='11%'/>
              <nav>
                  <NavigationItems />
              </nav>
          </div>
      </Aux>
  );
};

export default sideDrawer;
