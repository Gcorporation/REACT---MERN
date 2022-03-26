import React, { useState } from 'react';
import MainHeader from './MainHeader';
import { Link } from 'react-router-dom';

import './MainNavigation.css';
import Navlinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';

const MainNavigation = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const openDrawer = () => {
        setDrawerIsOpen(true);
    }

    const closeDrawer = () => {
        setDrawerIsOpen(false);
    }

    return (
        <React.Fragment>
            { drawerIsOpen && <Backdrop onClick={closeDrawer} /> }
            { drawerIsOpen ? (<SideDrawer>
                <nav className='main-navigation__drawer-nav'>
                    <Navlinks />
                </nav>
            </SideDrawer>) : null}
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawer}>
                    <span className="main-navigation__menu-btn_span"/>
                    <span />
                    <span />
                </button>
                <h1 className='main-navigation__title'>
                    <Link to="/">YourPlaces</Link>
                </h1>
                <nav className='main-navigation__header-nav'>
                    <Navlinks />
                </nav>
            </MainHeader>
        </React.Fragment>
    )
}

export default MainNavigation;