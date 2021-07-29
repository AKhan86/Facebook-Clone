import React from 'react'
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from '@material-ui/icons/Flag';
import { StorefrontOutlined, SubscriptionsOutlined, SupervisedUserCircle } from '@material-ui/icons';

function Header() {
    return (
        <div className='header'>
            <div className="header_left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"/>
                <div className="header_input">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>

            <div className="header_middle">
                <div className="header_option">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header_option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>

            <div className="header_right">
                
            </div>
        </div>
    );
}

export default Header
