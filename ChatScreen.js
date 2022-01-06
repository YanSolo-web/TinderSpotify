import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from '@mui/material/Avatar';


function ChatScreen() {
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: 'https://pbs.twimg.com/media/FILDy5VWYAAGtYb?format=png',
            message:'Whats up'
        }
    ]);

    return(
        <div className="chatScreen">
            <p className="chatScreen_timestamp">YOU MATCHED ON </p>
            {messages.map((message) => (
                message.name ? (
                <div className="chatScreen_message">
                    <Avatar 
                        className="chatScreen_image"
                        alt={message.name}
                        src={message.image}
                    />
                    <p className="chatScreen_text">{message}</p>
                </div>
                ) : (
                    <div className="chatScreen_message">    
                        <p className="chatScreen_textUser">{message.message}</p>
                    </div>
                )
                

            ))}
        </div>
    );
}

export default ChatScreen;