import React, {Component} from 'react';
import SideBarItem from './side-bar-item/side-bar-item';
import Logo from '../../logo/logo';
import Img from '../../../../assets/images/1.jpg';
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
            <div className='br-right col-3 overflow-hidden'>
                <div className="row h-100vh d-flex flex-column  justify-content-between">
                    <div>
                        <div className='mt-4 mb-4 br-bottom pt-2 pb-2'>
                            <Logo/>
                        </div>

                        <div className='font-size-11 font-color-light-grey pl-5'>
                            MEDIA
                        </div>

                        <ul className="w-100 list pb-5">
                            {menu.map(item => (
                                <SideBarItem key={item.key} link={item.link} exact> {item.title} </SideBarItem>
                            ))}
                        </ul>

                        {userRouts}

                        <div className='w-100 mt-2 mb-2  '>
                            <div className='br-bottom pt-2 pb-2'>
                            </div>
                        </div>
                    </div>


                    <div className='p-5 font-color-white  font-Bold cursor-pointer'>
                        {authButton}

                    </div>
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
