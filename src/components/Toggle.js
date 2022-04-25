import React from "react";
import styled from "styled-components";

const Toggle = () => {
  const [check, setCheck] = React.useState("nomal");
  return (
    <Container>
      <label className={check === "nomal" ? "nomal" : ""}>
        <input
          onChange={(e) => {
            setCheck(e.target.value);
          }}
          type='radio'
          name='selet'
          value='nomal'
        />
        기본
      </label>
      <label className={check === "detail" ? "detail" : ""}>
        <input
          onChange={(e) => {
            setCheck(e.target.value);
          }}
          type='radio'
          name='selet'
          value='detail'
        />
        상세
      </label>
      <svg className={check === "nomal" ? "nomal" : "detail"} />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  width: 400px;
  height: 100px;
  margin: auto;
  border-radius: 50px;
  padding: 10px;
  background-color: #cac6c6;
  > label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 100px;
    color: #838080;
    font-size: 40px;
    border-radius: 50px;
    cursor: pointer;
    z-index: 10;
    &.nomal {
      color: #000000;
    }
    &.detail {
      color: #000000;
    }
    > input {
      display: none;
    }
  }

  svg {
    position: absolute;
    width: 200px;
    height: 100px;
    border-radius: 50px;
    background-color: #ffffff;
    transition: all 1s;
    z-index: 1;
    &.detail {
      margin-left: 200px;
    }
  }
`;

export default Toggle;
