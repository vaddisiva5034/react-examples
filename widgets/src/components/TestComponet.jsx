import React, { useState } from "react";
import { Test2Component } from "./Test2Component";
export const TestComponent = () => {
  const [name, setName] = useState("kiran");
  const [lastName, setLastName] = useState("vaddi");

  const fromParent = (firstName, _lastName) => {
    setName(firstName);
    setLastName(_lastName);
  };

  return (
    <div className="test">
      <Test2Component
        name={name}
        handlefromParent={fromParent}
        lastName={lastName}
      />
    </div>
  );
};
