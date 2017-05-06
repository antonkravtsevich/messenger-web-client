import React from 'react';

var Heading = new React.createClass({
  render: function() {
    return (
      <div className="row heading">
        <div className="col-sm-8 col-xs-7 heading-name">
          <a className="heading-name-meta">{this.props.name}
          </a>
          <span className="heading-online">{this.props.state}</span>
        </div>
        <div className="col-sm-1 col-xs-1  heading-dot pull-right">
          <i className="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
});

export default Heading;
