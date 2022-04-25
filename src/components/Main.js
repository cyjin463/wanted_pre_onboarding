import React from "react";
import { useHistory } from "react-router-dom";

const Main = () => {
  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.push("/Test1")}>Test1</button>
      <button onClick={() => history.push("/Test2")}>Test2</button>
    </div>
  );
};

export default Main;
