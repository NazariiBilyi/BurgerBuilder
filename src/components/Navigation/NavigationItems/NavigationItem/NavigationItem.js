import React from "react";
import { NavLink } from 'react-router-dom'

import './NavigationItem.scss';

const navigationItem = (props) => (
    <li className='navigation-item'>
        <NavLink to={props.link} exact activeClassName='active'>{props.children}</NavLink>
    </li>
);

export default navigationItem;
