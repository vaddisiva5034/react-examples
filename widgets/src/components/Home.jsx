import React, { useEffect } from "react";
import { useParams, useHistory, NavLink } from "react-router-dom";
export function Home() {
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    console.log(params);
  }, []);

  const handleClick = () => {
    history.push("/employee");
  };

  return (
    <div>
      i am home {params?.name || ""}
      <button onClick={handleClick}>change</button>
      <NavLink to="/employee">
        <button>hello</button>
      </NavLink>
    </div>
  );
}
