import React, { useState } from "react";
import "./SearchBarComponent.css";
export const SearchBarCompnent = () => {
  const [isDanger, setIsDanger] = useState(false);
  const h2Style = {
    cursor: "pointer",
    fontSize: "72px",
  };

  return (
    <div>
      <h2 className={`${isDanger ? "danger" : "primary"}`} style={h2Style}>
        Hello
      </h2>
      <button
        onClick={() => {
          setIsDanger(!isDanger);
        }}
      >
        Chnage
      </button>
    </div>
  );
};
