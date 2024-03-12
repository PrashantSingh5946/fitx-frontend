import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import logo from "./logo192.png";
import DashUI from '../../pages/DesktopUI/dash/dashUI';
import Profile from '../../pages/profile/page';

function Navbar() {
    
    function checkpathname(){
        let location = useLocation();
        if((location.pathname).includes("dash")){
            return <DashUI/>
        }
        else if((location.pathname).includes("prof")){
            return <Profile/>
        }
        return 'not a valid pathname';
    }

    return (
        <>
            <nav className='nav-menu active'>
                <ul className='nav-menu-items'>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <img src={logo} />
                        </Link>
                    </li>
                    <div className='dashboardOptions'>
                        {SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </div>
                </ul>
                <div className='nav-main-page'>
                    <div className="deskUI">
                        <div className="user">
                            <div className="userAvatar">A</div>
                            <div className="userName">username</div>
                        </div>
                        <div className="main">
                            {checkpathname()}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;