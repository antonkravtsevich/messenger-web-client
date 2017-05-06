import React from 'react';

var ReplyBox = new React.createClass({
  render: function() {
    return (
      <div className="row reply">
        <div className="col-sm-9 col-xs-9 reply-main">
          <textarea className="form-control" rows="1" id="comment"></textarea>
        </div>
        <div className="col-sm-1 col-xs-1 reply-send">
          <i className="fa fa-send fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    );
  }
});

export default ReplyBox;
