import React, { Component } from "react";

export default class SeachBar extends Component {
  state = {
    term: "",
  };
  onInputChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };
  onSubmitEnter = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmitEnter}>
          <div className="feild">
            <label>Search for images</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
