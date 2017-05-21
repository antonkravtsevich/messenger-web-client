import React from 'react';
import Contact from './Contact'

var ContactsBar = new React.createClass({

  getContacts: function(){
    var list = [];
    if(this.props.list != undefined){
      if(this.props.list_type == 'chats'){
        list = this.props.list.map((chat) => {
          //console.log("chat: "+JSON.stringify(chat, null, 2));
          return chat.users[0];
        })
      } else {
        list = this.props.list;
      }
      //DEBUG
      //console.log("list: "+JSON.stringify(list, null, 2));
      return list.map((user) => {
        return <Contact
          current_user={this.props.current_user}
          key={user._id}
          user={user}
          jwt={this.props.jwt}
          changeChatID={this.props.changeChatID}/>
      })
    }
  },

  render: function(){
    let self = this;

    return(
        <div className="row sideBar">
          {this.getContacts()}
        </div>
    )
  }
});

export default ContactsBar;
