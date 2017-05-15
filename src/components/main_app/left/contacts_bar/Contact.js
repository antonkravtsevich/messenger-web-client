import React from 'react';
import axios from 'axios';

var Contact = new React.createClass({
  getInitialState: function () {
    return {
      user: {}
    }
  },

  changeChat: function () {
    this.props.changeChat(this.props.companion_id);
  },

  componentWillMount: function () {
    let self=this;
    axios.get('http://188.166.93.46:3001/users/'+this.props.companion_id)
      .then(function (response) {
        self.setState({
          user: response.data.message
        })
      })
  },


  render: function() {
    return (
      <div className="row sideBar-body" onClick={this.changeChat}>
        <div className="col-sm-9 col-xs-9 sideBar-main">
          <div className="row">

            <div className="col-sm-8 col-xs-8 sideBar-name">
              <span className="name-meta">{this.state.user.username}
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
