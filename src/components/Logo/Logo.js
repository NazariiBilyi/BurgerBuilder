import React from 'react';

import './Logo.scss';
import burgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
   <div className='logo' style={{height: props.height}}>
       <img src={burgerLogo} alt=""/>
   </div>
);

export default logo;
