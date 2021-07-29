import "./VideoItem.css";
import React from "react";

export default function VideoItem({ video, onSelect }) {
  return (
    <div className="item video-item" onClick={() => onSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
        width="168"
      />
      <div className="content">
        <div className="header"> {video.snippet.title}</div>
      </div>
    </div>
  );
}
