import React, { Component } from "react";

export class LifeCycleClass extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      inputText: "",
    };
  }
  componentDidMount() {
    alert("compoent is loaded");
  }

  componentWillUnmount() {
    alert("compoent is un loaded");
  }

  componentDidUpdate() {
    alert("compoent is updated");
  }

  handleChnage(value) {
    this.setState({ ...this.state, inputText: value });
  }

  hanldeClick() {
    this.setState(
      (prevState) => {
        return { ...this.state, count: prevState.count + 1 };
      },
      () => {
        alert("value is chnaged");
      }
    );
  }

  render() {
    return (
      <div>
        {this.props.name}
        <input
          type="number"
          value={this.state.inputText}
          onChange={(e) => {
            this.handleChnage(e.target.value);
          }}
        />
        {this.state.count}
        <button
          onClick={() => {
            this.hanldeClick();
          }}
        >
          +
        </button>
      </div>
    );
  }
}
