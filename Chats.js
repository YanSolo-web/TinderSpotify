import React from "react";
import Chat from "./Chat";
import "./Chats.css";

function Chats() {
    return ( 
    <div className="chats">
        <Chat
        name="Mark"
        message="Yo what's up"
        timestamp="40 seconds ago"
        profilePic="https://pbs.twimg.com/media/FILDy5VWYAAGtYb?format=png"
        />
        
    </div>
    );
}


export default Chats;