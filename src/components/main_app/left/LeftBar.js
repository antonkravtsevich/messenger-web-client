import React from 'react';
import SearchBox from './search_box/SearchBox'
import ContactsBar from './contacts_bar/ContactsBar'

var LeftBar = new React.createClass({
  render: function() {
    return (
      <div className="col-sm-4 side">
        <div className="side-one">
          <SearchBox />
          <ContactsBar />
        </div>
      </div>
    );
  }
});

export default LeftBar;
