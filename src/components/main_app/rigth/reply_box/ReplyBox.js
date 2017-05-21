import React from 'react';
import axios from 'axios'
import axiosErrorLog from '../../../../controllers/logger'

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

  handleEnterKey: function (e) {
    if(e.keyCode == 13){
      this.sendMessage();
    }
  },

  sendMessage: function () {
    //DEBUG
    //console.log('MAINAPP: sendMessage');
    if(this.props.chat_user!=undefined){
      var jwt = this.props.jwt;
      var chat_user_id = this.props.chat_user._id;
      let self = this;
      const url = 'http://188.166.93.46:3001/messages';
      const params = {
        text: self.state.text,
        reciever: chat_user_id
      };
      const config = {
        headers: {
          'jwt': jwt
        }
      };

      if((chat_user_id!=='')&&(self.state.text!=='')){
        //DEBUG
        console.log('REPLYBOX: sendMessage |: user: '+chat_user_id+"\ntext: "+self.state.text);

        axios.post(url, params, config)
        .then(function (resp) {
          self.props.loadChat();
          self.setState({
            text: ''
          })
        }).catch((error) => {
          axiosErrorLog('MAINAPP: sendMessage', error)
        })
      }
    }
  },

  render: function() {
    return (
      <div className="row reply">
        <div className="col-sm-9 col-xs-9 reply-main">
          <textarea
            className="form-control"
            rows="1"
            id="comment"
            value={this.state.text}
            tabIndex="0"
            onKeyDown={this.handleEnterKey}
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
