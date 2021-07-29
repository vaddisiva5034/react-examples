import React, { useEffect, useState } from "react";

export const LifeCycle = (props) => {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    alert("compoent is loaded");
    return () => {
      alert("component is un loading");
    };
  }, []);

  useEffect(() => {
    alert("component is chnaged");
  });

  useEffect(() => {
    alert("count is chnaged " + count);
  }, [count]);

  useEffect(() => {
    alert("count is chnaged " + count);
  }, [props.name]);

  useEffect(() => {
    alert("count is chnaged " + count);
  }, [count, props.name]);

  return (
    <div className="life-cycle">
      function
      <input
        type="number"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />
      {count}
      <button
        onClick={() => {
          setCount((preavState) => preavState + 1);
        }}
      >
        +
      </button>
    </div>
  );
};
