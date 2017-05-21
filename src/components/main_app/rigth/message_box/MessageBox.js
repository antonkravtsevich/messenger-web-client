import React from 'react';
import Message from './Message'

var MessageBox = new React.createClass({
  getMessages: function () {
    return this.props.messages.map((message) => {
      var role = 'sender';
      if(message.sender_id == this.props.chat_user._id) role='receiver';
      return <Message key={message._id} role={role} text={message.text} date={message.date}/>
    })
  },

  render: function() {
    let messages = this.props.messages;
    return (
      <div className="row message" id="conversation">
        {this.getMessages()}
      </div>
    );
  }
});

export default MessageBox;
