import React from 'react';
import Heading from './heading/Heading'
import MessageBox from './message_box/MessageBox'
import ReplyBox from './reply_box/ReplyBox'

var RightBar = new React.createClass({
  render: function() {
    let user_id = this.props.user_id;
    return (
      <div className="col-sm-8 conversation">
        <Heading name={this.props.companion_name} />
        <MessageBox
          messages={this.props.messages}
          user_id={user_id}
        />
      <ReplyBox sendMessage={this.props.sendMessage}/>
      </div>
    );
  }
});

export default RightBar;
