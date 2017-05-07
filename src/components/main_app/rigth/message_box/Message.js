import React from 'react';

var Message = new React.createClass({
  getInitialState: function(){
    return {
      class: null
    }
  },

  componentWillMount: function () {
    if (this.props.role === 'sender'){
      this.setState({
        class: "col-sm-12 message-main-sender"
      });
    } else if(this.props.role === 'receiver'){
      this.setState({
        class: "col-sm-12 message-main-receiver"
      });
    }
  },

  render: function() {
    return (
      <div className="row message-body">
        <div className={this.state.class}>
          <div className={this.props.role}>
            <div className="message-text">
             {this.props.text}
            </div>
            <span className="message-time pull-right">
              {this.props.date}
            </span>
          </div>
        </div>
      </div>
    );
  }
});

export default Message;
