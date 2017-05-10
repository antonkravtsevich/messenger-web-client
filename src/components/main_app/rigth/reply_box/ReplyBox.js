import React from 'react';

var ReplyBox = new React.createClass({
  getInitialState: function () {
    return{
      text: ''
    }
  },

  onChangeText: function (e) {
    this.setState({
      text: e.target.value
    });
  },

  sendMessage: function () {
    this.props.sendMessage(this.state.text);
  },

  render: function() {
    return (
      <div className="row reply">
        <div className="col-sm-9 col-xs-9 reply-main">
          <textarea
            className="form-control"
            rows="1" id="comment"
            value={this.state.text}
            onChange={this.onChangeText}
          />
        </div>
        <div className="col-sm-1 col-xs-1 reply-send">
          <i
            className="fa fa-send fa-2x"
            aria-hidden="true"
            onClick={this.sendMessage}
          />
        </div>
      </div>
    );
  }
});

export default ReplyBox;
