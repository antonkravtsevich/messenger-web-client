import React from 'react';
import axios from 'axios';
import axiosErrorLog from '../../../../controllers/logger';

var Contact = new React.createClass({

  changeChatID: function () {
    var chat_user_id = this.props.user._id;
    var jwt = this.props.jwt;
    var self = this;
    axios.get('http://188.166.93.46:3001/chats/by_users/'+chat_user_id, {
      headers:{
        jwt: jwt
      }
    }).then(function(response){
      //console.log("CONTACTS: changeChatID | response: "+JSON.stringify(response, null, 2));
      self.props.changeChatID(response.data.message._id);
    })
  },

  render: function() {
    //DEBUG
    //console.log('CONTACT: render');
    var user = this.props.user;
    //DEBUG
    //console.log("USER: "+JSON.stringify(user, null, 2));
    var data = user.personal_data;
    return (
      <div className="row sideBar-body" onClick={this.changeChatID}>
        <div className="col-sm-9 col-xs-9 sideBar-main">
          <div className="row">

            <div className="col-sm-8 col-xs-8 sideBar-name">
              <span className="name-meta">{data.first_name+" "+data.last_name}
            </span>
            </div>
            {/*<div className="col-sm-4 col-xs-4 pull-right sideBar-time">
              <span className="time-meta pull-right">{this.props.time}
            </span>
            </div>*/}

          </div>
        </div>
      </div>
    );
  }
});

export default Contact;
