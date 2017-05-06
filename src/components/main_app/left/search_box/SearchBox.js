import React from 'react';

var SearchBox = new React.createClass({
  render: function() {
    return (
      <div className="row searchBox">
        <div className="col-sm-12 searchBox-inner">
          <div className="form-group has-feedback">
            <input id="searchText" type="text" class="form-control" name="searchText" placeholder="Search" />
            <span className="glyphicon glyphicon-search form-control-feedback"></span>
          </div>
        </div>
      </div>
    );
  }
});

export default SearchBox;
