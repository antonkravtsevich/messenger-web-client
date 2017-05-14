import React from 'react';
import Contact from './Contact'

var ContactsBar = new React.createClass({

  render: function(){
    let self = this;
    //DEBUG
    //console.log('ContactsBar: render: '+JSON.stringify(this.props.users_list));
    return(
      <div className="row sideBar">
        {
          this.props.users_list.map(function (user) {
            if(user.companion_id !== undefined){
              return <Contact
                      key={user._id}
                      companion_id={user.companion_id}
                      changeChat={self.props.changeChat}
                      />
            }else{
              return <Contact
                      key={user._id}
                      companion_id={user._id}
                      changeChat={self.props.changeChat}
                      />
            }
          })
        }
      </div>
    )
  }
});

export default ContactsBar;
