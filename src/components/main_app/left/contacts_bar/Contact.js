import React from 'react';

var Contact = new React.createClass({
  render: function() {
    return (
      <div className="row sideBar-body">
        <div className="col-sm-9 col-xs-9 sideBar-main">
          <div className="row">

            <div className="col-sm-8 col-xs-8 sideBar-name">
              <span className="name-meta">{this.props.name}
            </span>
            </div>
            <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
              <span className="time-meta pull-right">{this.props.time}
            </span>
            </div>

          </div>
        </div>
      </div>
    );
  }
});

export default Contact;
