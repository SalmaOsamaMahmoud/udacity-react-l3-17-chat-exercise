import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow.js'

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  state={
    messages:[
  		{ username: 'Amy', text: 'Hi, Jon!' },
  		{ username: 'Amy', text: 'How are you?' },
  		{ username: 'John', text: 'Hi, Amy! Good, you?' },
	]
  }
  
  handleSubmit= message =>{
    console.log(message)
    this.setState((prevState)=>
      ({
      messages:[...prevState.messages,message]
      }));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
			{users.map(user=>(
      		  <ChatWindow username={user.username} messages={this.state.messages} handleSubmit={this.handleSubmit}/>
			))}
        
        </div>
      </div>
    );
  }
}

export default App;
