import React from "react";
import "./Header.css";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ChatIcon from '@mui/icons-material/Chat';
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {Link, useHistory} from "react-router-dom";


function Header({backButton}) {
    const history = useHistory();
    return(

        <div className='header'> 
        {backButton ? (
        <IconButton onClick={() => history.replace(backButton)}>
            <ArrowBackIosIcon fontsize="large" className="header_icon"/>
        </IconButton>
        ): (
            <IconButton>
                <PermIdentityIcon className="header_icon" fontSize="large"/>
            </IconButton>
        )}
        
        <Link to ="/">
            <img className="header_logo" src="https://pbs.twimg.com/media/FILDy5VWYAAGtYb?format=png " alt="logo"/>
        </Link>
        <Link to ="/chat">
            <IconButton>
                <ChatIcon className="header_icon" fontSize="large"/>
            </IconButton>
        </Link>
        </div>

    );

}

export default Header;
