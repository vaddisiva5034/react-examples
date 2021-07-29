import React from "react";
import "./ImageList.css";
import Imageitem from "./Imageitem";
export default function ImageList(props) {
  return (
    <div className="image-list">
      {props.images.map((image) => (
        <Imageitem key={image.id} image={image} />
      ))}
    </div>
  );
}
