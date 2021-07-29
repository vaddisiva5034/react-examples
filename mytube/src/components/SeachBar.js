import React, { Component } from "react";

export default class SeachBar extends Component {
  state = { term: "" };
  onSearch = (event) => {
    const term = event.target.value;
    this.setState({
      term: term,
    });
  };
  onSubmitPress = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmitPress}>
          <div className="ui field">
            <label> search </label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onSearch}
            />
          </div>
        </form>
      </div>
    );
  }
}
