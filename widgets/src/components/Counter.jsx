import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../Store/app.reducer";
export function Counter() {
  const counterValue = useSelector((state) => state.count.value);
  const dispath = useDispatch();
  const handleClick = () => {
    dispath(increment());
  };
  return (
    <div>
      <h1>{counterValue}</h1>
      <button onClick={handleClick}>+</button>
    </div>
  );
}
