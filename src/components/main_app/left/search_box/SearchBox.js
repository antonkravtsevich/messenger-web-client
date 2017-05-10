import React from 'react';

var SearchBox = new React.createClass({
  getInitialState: function () {
    return{
      searchString: ''
    }
  },

  changeSearchString: function (e) {
    this.props.changeUsersList(e.target.value);

    this.setState({
      searchString: e.target.value
    });
  },

  render: function() {
    return (
      <div className="row searchBox">
        <div className="col-sm-12 searchBox-inner">
          <div className="form-group has-feedback">
            <input
              id="searchText"
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search"
              onChange={this.changeSearchString}
            />
            <span className="glyphicon glyphicon-search form-control-feedback"></span>
          </div>
        </div>
      </div>
    );
  }
});

export default SearchBox;
