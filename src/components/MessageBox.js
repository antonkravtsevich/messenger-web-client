import React from 'react';
import Message from './Message'

var MessageBox = new React.createClass({
  render: function() {
    return (
      <div className="row message" id="conversation">
        <Message role="receiver" text="Lol kek cheburek" date="Date" />
        <Message role="sender" text="Yes" date="Date" />
        <Message role="receiver" text="Wow" date="Date" />
        <Message role="sender" text="So much good code!" date="Date" />
      </div>
    );
  }
});

export default MessageBox;
