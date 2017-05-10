import React from 'react';
import SearchBox from './search_box/SearchBox'
import ContactsBar from './contacts_bar/ContactsBar'

var LeftBar = new React.createClass({
  // TODO: make function that handle searh text

  render: function() {
    return (
      <div className="col-sm-4 side">
        <div className="side-one">
          <SearchBox changeUsersList={this.props.changeUsersList}/>
          {/* HACK
              need to send users list or contacts list
              in exis of what is in SearchBox
          */}
          <ContactsBar
            users_list={this.props.users_list}
            changeChat={this.props.changeChat}
          />
        </div>
      </div>
    );
  }
});

export default LeftBar;
