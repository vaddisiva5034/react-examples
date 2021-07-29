import React from "react";

const SpinLoader = ({ message }) => {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">{message}</div>
    </div>
  );
};

SpinLoader.defaultProps = {
  message: "Loading....",
};
export default SpinLoader;
