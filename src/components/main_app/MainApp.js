import React from 'react';
import LeftBar from './left/LeftBar'
import RightBar from './rigth/RightBar'

var MainApp = new React.createClass({
  render: function() {
    return (
      <div className="conteiner app">
        <div className="row app-one">
          <LeftBar />
          <RightBar />
        </div>
      </div>
    );
  }
});

export default MainApp;
