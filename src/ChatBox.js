import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'

class ChatBox extends Component {
  state={
  message:''
  }
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  isDisabled = () => {
    return this.state.message==='';
  };
  
  handleChange=event=>{
    this.setState({message:event.target.value})
  }
  handleSubmit=event=>{
    event.preventDefault();
    this.props.handleSubmit(this.state.message)
  }
  
  render() {
    return (
            <div>
              <form className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message..." onChange={this.handleChange}  value={this.state.message}/>
                <div className="input-group-append">
                  <button className="btn submit-button" disabled={this.isDisabled()} onClick={this.handleSubmit}>
                    SEND
                  </button>
                </div>
              </form>
            </div>
    );
  }
}

ChatBox.propTypes={
handleSubmit:PropTypes.func.isRequired
}

export default ChatBox;