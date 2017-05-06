import React from 'react';
import LeftBar from './components/LeftBar'
import RightBar from './components/RightBar'

var App = new React.createClass({
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

export default App;
