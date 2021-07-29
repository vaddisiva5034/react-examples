import React from "react";
import VideoItem from "./VideoItem";

export default function VideoList({ videos, onSelect }) {
  const videoList = videos.map((video) => {
    return (
      <VideoItem key={video.id.videoId} video={video} onSelect={onSelect} />
    );
  });
  return <div className="ui relaxed divided list">{videoList}</div>;
}
