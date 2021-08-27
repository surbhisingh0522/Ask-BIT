import React from 'react';
import './css/AskBIT.css';
import Feed from './Feed.js';
import Navbar from "./Navbar";
import Sidebar from './Sidebar';
import Widget from './Widget.js';


function AskBIT() {
    return (
        <div className="ask_bit">
            <Navbar />
            <div className="askBIT_content">
                <Sidebar />
                <Feed />
                <Widget />
            </div>
            
        </div>
    );
}

export default AskBIT;
