import React from "react";
import { useHistory } from "react-router-dom";

const Main = () => {
  const history = useHistory();

  return (
    <div>
      <button onClick={() => history.push("/Toggle")}>Test1</button>
      <button onClick={() => history.push("/Toggle")}>Test2</button>
    </div>
  );
};

export default Main;
