import React, { useContext } from "react";
import { NameContext, SNameContext } from "./ParentProviderComp";
export function Child3() {
  const data = useContext(NameContext);

  return (
    <div>
      <h1>
        from chilld 3 -- {data.name} ==== {data.sname}
      </h1>
    </div>
  );
}
