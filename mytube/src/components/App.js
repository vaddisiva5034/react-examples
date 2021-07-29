import React, { Component } from "react";
import SeachBar from "./SeachBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetails from "./VideoDetails";
const KEY = "AIzaSyD35fb5IhcVPgHaDeWjJVLjifKqQO3x_Xk";

export default class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  getSerachTerm = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 10,
        type: "video",
        key: KEY,
      },
    });
    console.log(response);
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };
  onVideoSelect = (video) => {
    this.setState({
      selectedVideo: video,
    });
  };
  componentDidMount() {
    this.getSerachTerm("trending technologies");
  }
  render() {
    return (
      <div className="ui container">
        <SeachBar onSubmit={this.getSerachTerm} />
        <div className="ui grid">
          <div className="ui row">
            <div className="ten wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
