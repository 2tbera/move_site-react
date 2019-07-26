import React from 'react';
import { NavLink } from 'react-router-dom';

const sideBarItem = ( props ) => (

    <li className='w-100 list-item cursor-pointer font-color-white '>
        <NavLink
            to={props.link}
            exact={props.exact}
            activeClassName={'active'} className='w-100 text-decoration-none d-block font-size-15 font-Bold'>{props.children}</NavLink>
    </li>
);

export default sideBarItem;
