import React from 'react';
import Heading from './heading/Heading'
import MessageBox from './message_box/MessageBox'
import ReplyBox from './reply_box/ReplyBox'
import axios from 'axios'
import axiosErrorLog from '../../../controllers/logger'

var RightBar = new React.createClass({
  getInitialState: function () {
    return{
      chat_user: undefined,
      messages: []
    }
  },

  loadChat: function () {
    //DEBUG
    //console.log('RIGHTBAR: reloadMessages');
    let self = this;
    let chat_id = this.props.chat_id;
    let jwt = this.props.jwt;
    if(chat_id!==''){
      axios.get('http://188.166.93.46:3001/chats/'+chat_id, {
        headers:{
          jwt: jwt
        }
      }).then(function (response) {
        //DEBUG
        //console.log("response.data: "+JSON.stringify(response.data, null, 2));
        self.setState({
          messages: response.data.message.messages,
          chat_user: response.data.message.users[0]
        })
      })
    }else{
      this.setState({
        messages: [],
        chat_user: undefined
      })
    }
  },

  componentWillMount: function () {
    this.interval = setInterval(this.loadChat, 200);
  },

  componentWillUnmount: function () {
    clearInterval(this.interval);
  },

  render: function() {
    if(this.state.chat_user!=undefined){
      //DEBUG
      //console.log("user: "+JSON.stringify(this.state.chat_user, null, 2));
      var data = this.state.chat_user.personal_data;
      return (
        <div className="col-sm-8 conversation">
          <Heading name={data.first_name+" "+data.last_name} />
          <MessageBox
            messages={this.state.messages}
            chat_user={this.state.chat_user}
            />
          <ReplyBox
            chat_user={this.state.chat_user}
            jwt={this.props.jwt}
            loadChat={this.loadChat}
            />
        </div>
      );
    } else {

      return(
        <div className="col-sm-8 conversation">
          <Heading name={''} />
          <MessageBox
            messages={[]}
            chat_user={{}}
            />
          <ReplyBox
            chat_user={undefined}
            jwt={this.props.jwt}
            loadChat={this.loadChat}
            />
        </div>
      )
    }
  }
});

export default RightBar;
