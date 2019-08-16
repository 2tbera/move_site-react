import React, {Component} from 'react';
import SideBarItem from './side-bar-item/side-bar-item';
import Logo from '../../logo/logo';
import {connect} from 'react-redux';

import * as actions from '../../../../store/actions/index';
import {NavLink} from "react-router-dom";

const menu = [
    {
        key: 1,
        title: 'Movies',
        link: '/movies'
    },
    {
        key: 2,
        title: 'TV Shows',
        link: '/tv-shows'
    },
    {
        key: 3,
        title: 'Music',
        link: '/music'
    },
    {
        key: 4,
        title: 'Audiobooks',
        link: '/audio-books'
    },
];

const userMenu = [
    {
        key: 1,
        title: 'Library',
        link: '/library'
    },
    {
        key: 2,
        title: 'Wishlist',
        link: '/wish-list'
    },
    {
        key: 3,
        title: 'Settings',
        link: '/settings'
    },
];


class SideBar extends Component {

    componentDidMount() {
        this.props.onTryAutoSignup();
    }


    render() {

        let userRouts = null;
        let authButton = (<NavLink
            to={'/auth'}
            exact
            activeClassName={'active'}
            className='w-100 font-color-white text-decoration-none d-block font-size-15 font-Bold'> Sigh
            In </NavLink>);

        if (this.props.isAuthenticated) {
            userRouts = (
                <React.Fragment>
                    <div className='font-size-11 font-color-light-grey pl-5'>
                        ACCOUNT
                    </div>
                    <ul className="w-100 list ">
                        {userMenu.map(item => (
                            <SideBarItem key={item.key} link={item.link} exact> {item.title} </SideBarItem>
                        ))}
                    </ul>
                </React.Fragment>
            );

            authButton = (
                <div className='w-100 font-color-white text-decoration-none d-block font-size-15 font-Bold'
                     onClick={this.props.onLogOut}> Sigh Out</div>
            );
        }

        return (
            <div className="position-absolute d-flex justify-content-between w-100">
                <div className='p-5 m-4'>
                    <Logo/>
                </div>



                <ul className="w-100 d-flex list p-5">
                    {menu.map(item => (
                        <SideBarItem key={item.key} link={item.link} exact> {item.title} </SideBarItem>
                    ))}
                </ul>

                {userRouts}

                <div className='w-100 mt-2 mb-2  '>
                    <div className='br-bottom pt-2 pb-2'>
                    </div>
                </div>


                <div className='p-5 font-color-white  font-Bold cursor-pointer'>
                    {authButton}

                </div>
            </div>
        );
    }
}

const mapStateToProps = store => {
    return {
        isAuthenticated: store.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState()),
        onLogOut: () => dispatch(actions.logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
