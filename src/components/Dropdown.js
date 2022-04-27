import React from "react";
import styled from "styled-components";

const Dropdown = () => {
  const [value, setValue] = React.useState("A");
  const [view, setView] = React.useState(false);

  const optionList = [
    { name: "A" },
    { name: "B" },
    { name: "C" },
    { name: "D" },
  ];

  const A = (e) => {
    setValue(e.target.value);
  };

  return (
    <Container>
      <div onClick={() => setView(!view)}>
        <span>{value}</span>
      </div>

      {view && (
        <ul>
          {optionList.map((v, idx) => (
            <li
              key={idx}
              onClick={() => {
                setValue(v.name);
                setView(false);
              }}>
              {v.name}
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100px;
  height: 1000px;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    text-align: center;
    > span {
      width: 100%;
      height: 20px;
      border-radius: 8px;
      background-color: #f9f8ff;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
    }
  }
  ul {
    position: absolute;
    width: 100px;
    padding-inline-start: 0px;
    overflow: hidden;
    > li {
      display: flex;
      height: 30px;
      font-size: 16px;
      align-items: center;
      justify-content: center;
      border: 1px solid black;
      cursor: pointer;
    }
  }
`;

export default Dropdown;
