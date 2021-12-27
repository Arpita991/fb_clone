import React from 'react'
import "./css/header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import PeopleIcon from '@mui/icons-material/People';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Avatar from '@mui/material/Avatar';
import AppsIcon from '@mui/icons-material/Apps';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { IconButton } from '@mui/material';
function Header() {
    return (
        <div className='header'>
            <div className="header__left">
                <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo-768x480.png"/>
            <div className="header__search">
                <SearchIcon/>
                <input type="text" placeholder="Search Facebook"/>
            </div>
        </div>
        <div className="header__middle">
            <div className="header__option
                header__option--active">
                <HomeIcon fontSize="large"/>
            </div>
            <div className="header__option">
                <OndemandVideoIcon fontSize="large"/>
            </div>
            <div className="header__option">
                <PeopleIcon fontSize="large"/>
            </div>
            <div className="header__option">
                <SportsEsportsIcon fontSize="large"/>
            </div>
        </div>
            <div className="header__right">
                <div className="header__info">
                    <Avatar src="https://www.teahub.io/photos/full/10-104795_outstanding-sad-dolls-wallpaper-sad-cute-barbie-doll.jpg"/>
                    <h5>Arpita Borade</h5>
                </div>
                <IconButton>
                    <AppsIcon/>
                </IconButton>
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                <IconButton>
                    <NotificationsIcon/>
                </IconButton>
                <IconButton>
                    <ArrowDropDownIcon/>
                </IconButton>
                

            </div>
            
        </div>
    )
}

export default Header
