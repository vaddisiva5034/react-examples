import React, { useState, createContext, useRef, useEffect } from "react";
import { Child1 } from "./Child1";

export const NameContext = createContext();
export const SNameContext = createContext();

export function ParentProviderComp() {
  const [name, setName] = useState("sa");
  const [sname, setSName] = useState("sname");
  const nameRef = useRef(name);
  const nameInputRef = useRef(null);

  useEffect(() => {
    nameRef.current = name;
  }, [name]);

  useEffect(() => {
    console.log(nameInputRef.current);
    nameInputRef.current.focus();
  }, []);

  const tesgt = () => {
    return {
      name: nameRef.current,
    };
  };
  return (
    <div>
      <NameContext.Provider value={{ name, sname }}>
        <Child1 />
      </NameContext.Provider>
      <input
        ref={nameInputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input value={sname} onChange={(e) => setSName(e.target.value)} />
    </div>
  );
}
