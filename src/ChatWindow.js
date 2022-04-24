import React, { Component } from 'react';
import ChatList from './ChatList.js';
import ChatBox from './ChatBox.js';
import PropTypes from 'prop-types';

class ChatWindow extends Component {
  handleSubmit=message=>{
    this.props.handleSubmit({username:this.props.username,text:message})
  }
  render() {
    return (
          <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{this.props.username}</div>
            <ChatList username={this.props.username} messages={this.props.messages}/>
            <ChatBox handleSubmit={this.handleSubmit}/>
          </div>
    );
  }
}

ChatWindow.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  username: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
};

export default ChatWindow;
