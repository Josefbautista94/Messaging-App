import React, { Component } from 'react';
import './Chat.css'
import {Link} from 'react-router-dom';
class Chat extends Component{

render(){

    return(
        <div> 
        <header>
        <h1 className ="chatting">This is where the chats would take place once some one has logged in click home to go back to the main page</h1>
        </header>
        <body>
        <Link to ="/Settings">
            <button className = "settings"> Settings </button>
            </Link>
        </body>
        </div>
    )
}
}

export default Chat;