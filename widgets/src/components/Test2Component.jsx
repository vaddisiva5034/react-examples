import React, { useState } from "react";

export const Test2Component = (props) => {
  const { name, handlefromParent, lastName } = props;

  const [tempFirstName, setTempFirstName] = useState(name);
  const [tempLastName, setTempLastName] = useState(lastName);

  return (
    <>
      <h1>
        hello {name} {lastName}
      </h1>
      <input
        type="text"
        onChange={(e) => {
          setTempFirstName(e.target.value);
          handlefromParent(e.target.value, tempLastName);
        }}
        value={tempFirstName}
      />
      <input
        type="text"
        onChange={(e) => {
          setTempLastName(e.target.value);
          handlefromParent(tempFirstName, e.target.value);
        }}
        value={tempLastName}
      />
      <button onClick={() => handlefromParent(tempFirstName, tempLastName)}>
        Change
      </button>
    </>
  );
};
