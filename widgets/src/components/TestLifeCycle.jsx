import React, { useState } from "react";
import { LifeCycle } from "./LifeCycle";
import { LifeCycleClass } from "./LifeCycleClass";
export const TestLifeCycle = () => {
  const [showButton, setShowButton] = useState(false);

  const handleClick = () => {
    setShowButton(!showButton);
  };

  const getSomeElement = () => {
    if (showButton) {
      return <LifeCycleClass name="class compoent" />;
    }
    return <LifeCycle />;
  };

  return (
    <div>
      {getSomeElement()}
      <button onClick={handleClick}>Change</button>
    </div>
  );
};
