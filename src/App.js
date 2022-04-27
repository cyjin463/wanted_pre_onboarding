import React from "react";
import styled from "styled-components";

import Toggle from "./components/Toggle";
import Tab from "./components/Tab";
import Input from "./components/Input";
import Dropdown from "./components/Dropdown";

function App() {
  return (
    <Container>
      <Component>
        <Toggle></Toggle>
      </Component>

      <Component>
        <Tab></Tab>
      </Component>

      <Component>
        <Input></Input>
      </Component>

      <Dropdown></Dropdown>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Component = styled.div`
  margin-bottom: 40px;
`;

export default App;
