import React from "react";
import { useHistory } from "react-router-dom";

const Main = () => {
  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.push("/Toggle")}>Toggle</button>
      <button onClick={() => history.push("/Tab")}>Tab</button>
      <button onClick={() => history.push("/Input")}>Input</button>
    </div>
  );
};

export default Main;
