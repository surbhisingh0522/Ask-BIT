import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './css/AskBITBox.css';

function AskBITBox() {
    const user=useSelector(selectUser);
       return (
        <div className="ask-bitBox">
            <div className="ask-bitBox_info">
                <Avatar
                    src={user.photo}
                />
                <h5>{user.displayName ? user.displayName:user.email}</h5>
            </div>
            <div className="ask-bitBox_askBIT">
                <p>What is your question or link?</p>
            </div>
        </div>
    );
}

export default AskBITBox;
