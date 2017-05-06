import React from 'react';
import Contact from './Contact'

var ContactsBar = new React.createClass({
  render: function() {
    return (
      <div className="row sideBar">
        <Contact name="Ankit Jane" time="18:18" />
      </div>
    );
  }
});

export default ContactsBar;
