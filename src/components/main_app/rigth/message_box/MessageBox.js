import React from 'react';
import Message from './Message'

var MessageBox = new React.createClass({
  render: function() {
    let messages = this.props.messages;
    let user_id = this.props.user_id;
    return (
      <div className="row message" id="conversation">
        {
          messages.map(function (message) {
            if(message.sender_id===user_id) {
              return (
                <Message
                  key={message._id}
                  role='sender'
                  text={message.text}
                  date={message.date}
                />
              );
            } else {
              return (
                <Message
                  key={message._id}
                  role='receiver'
                  text={message.text}
                  date={message.date}
                />
              );
            }
          })
        }
      </div>
    );
  }
});

export default MessageBox;
