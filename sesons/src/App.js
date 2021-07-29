import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import SpinLoader from "./SpinLoader";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: "",
      errorMessage: "",
    };
    this.updateLocation();
  }
  updateLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lat: position.coords.latitude,
        });
      },
      (error) => {
        this.setState({
          errorMessage: error.message,
        });
      }
    );
  };
  componentDidMount() {
    console.log("the component is mount");
  }
  componentDidUpdate() {
    console.log("componentn is updated");
  }
  render() {
    const { lat, errorMessage } = this.state;
    if (lat === "" && errorMessage !== "") {
      return <div>Error is {errorMessage}</div>;
    } else if (lat !== "" && errorMessage === "") {
      return <SeasonDisplay lat={lat} />;
    }
    return <SpinLoader message="Please allow the location access" />;
  }
}

// import React from "react";
// function getLocation() {
//   return new Promise((resolve, reject) => {
//
//   });
// }
// export default function App() {
//   return <div>{getLocation().then((ele) => "hello")}</div>;
// }
