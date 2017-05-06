import React from 'react';
import Heading from './Heading'
import MessageBox from './MessageBox'
import ReplyBox from './ReplyBox'

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
