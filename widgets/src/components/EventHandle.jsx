import React, { useState } from "react";

export default function EventHandle() {
  const [value, setValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "a" && e.ctrlKey) {
      alert("invalid");
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div
      style={{ height: "100vh", border: "1px solid black" }}
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}
