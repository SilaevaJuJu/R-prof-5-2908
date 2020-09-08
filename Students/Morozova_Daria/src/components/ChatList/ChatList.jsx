import './style.css';
import React, { Component, Fragment } from 'react';
import Chat from '../Chat/Chat.jsx';

import ChatsDialog from '../ChatsDialog/ChatsDialog.jsx';

export default class ChatList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: [
                {
                    name: 'Ann',
                    messages: '21 messages',
                },
                {
                    name: 'Andrew',
                    messages: '90 messages',
                },
                {
                    name: 'Dylan',
                    messages: '75 messages',
                },
                {
                    name: 'Sarah',
                    messages: '54 messages',
                },
                {
                    name: 'Admin',
                    messages: '102 messages',
                },
            ]
        }
    }

    render() {
        let { chats } = this.state;
        let chatsArray = chats.map((chat, index) => {
            let { name, messages } = chat;
            return <Chat name = { name } messages = { messages } key = { index }/>
        });

        return (
            <Fragment>
                <div className="ChatList d-flex flex-column">

                    { chatsArray }
                    <div>
                        <ChatsDialog />
                    </div>
                </div>
            </Fragment>
        )
    }
}
    