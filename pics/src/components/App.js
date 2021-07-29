import React, { Component } from "react";
import SeachBar from "./SeachBar";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";

export default class App extends Component {
  state = {
    images: [],
  };
  onSearchSubmit = async (term) => {
    const responce = await unsplash.get("search/photos", {
      params: {
        query: term,
      },
    });
    console.log(responce);
    if (responce.status === 200) {
      this.setState({
        images: responce.data.results,
      });
    }
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SeachBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
