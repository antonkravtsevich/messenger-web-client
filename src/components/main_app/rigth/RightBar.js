import React from 'react';
import Heading from './heading/Heading'
import MessageBox from './message_box/MessageBox'
import ReplyBox from './reply_box/ReplyBox'

var RightBar = new React.createClass({
  render: function() {
    return (
      <div className="col-sm-8 conversation">
        <Heading name="Test name" state="Online" />
        <MessageBox />
        <ReplyBox />
      </div>
    );
  }
});

export default RightBar;
