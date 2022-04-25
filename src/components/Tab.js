import React from "react";
import styled from "styled-components";

const Tab = () => {
  const [check, setCheck] = React.useState("P");
  console.log(check);
  return (
    <Container>
      <label className={check === "P" ? "P" : ""}>
        <input
          onChange={(e) => {
            setCheck(e.target.value);
          }}
          type='radio'
          name='selet'
          value='P'
        />
        감자
      </label>
      <label className={check === "SP" ? "SP" : ""}>
        <input
          onChange={(e) => {
            setCheck(e.target.value);
          }}
          type='radio'
          name='selet'
          value='SP'
        />
        고구마
      </label>
      <label className={check === "Cu" ? "Cu" : ""}>
        <input
          onChange={(e) => {
            setCheck(e.target.value);
          }}
          type='radio'
          name='selet'
          value='Cu'
        />
        카레라이스
      </label>
      <svg className={check === "P" ? "P" : check === "SP" ? "SP" : "Cu"} />
    </Container>
  );
};
const Container = styled.div`
  position: relative;
  display: flex;
  width: 600px;
  height: 100px;
  margin: auto;
  border-bottom: 3px solid #c6c6c6;
  > label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 100px;
    color: #838080;
    font-size: 40px;

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
    border-bottom: 5px solid #2dc5bb;
    transition: all 0.3s;
    z-index: 1;
    &.SP {
      margin-left: 200px;
    }
    &.Cu {
      margin-left: 400px;
    }
  }
`;
export default Tab;
