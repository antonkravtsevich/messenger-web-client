import React from 'react';
import SearchBox from './SearchBox'
import ContactsBar from './ContactsBar'

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
