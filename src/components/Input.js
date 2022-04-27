import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import close from "../img/close.png";
import open from "../img/open.png";
import noncheck from "../img/noncheck.png";
import check from "../img/check.png";

const Input = () => {
  const history = useHistory();
  const [email, setEmail] = React.useState("");
  const [emailCheck, setEmailCheck] = React.useState(false);
  const [passwordView, setPasswordView] = React.useState({
    type: "password",
    view: false,
  });

  const emailRule = (e) => {
    const rule =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const email = e.target.value;
    setEmail(email);
    rule.test(email) ? setEmailCheck(true) : setEmailCheck(false);
  };

  const passwordViewCheck = () => {
    setPasswordView(() => {
      console.log(passwordView);
      if (!passwordView.view) {
        return { type: "text", view: true };
      }
      return { type: "password", view: false };
    });
  };

  return (
    <Container>
      <div>
        <span>E-mail</span>
        <input onChange={emailRule} />
        {emailCheck ? (
          <img className='E' src={check} />
        ) : (
          <img className='E' src={noncheck} />
        )}
      </div>
      <div>
        <span>Password</span>
        <input type={passwordView.type} />
        <span onClick={passwordViewCheck}>
          {passwordView.view ? (
            <img className='PW' src={open} />
          ) : (
            <img className='PW' src={close} />
          )}
        </span>
      </div>
      <button onClick={() => history.goBack()}>뒤로가기</button>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100px;

  div {
    > span {
      font-size: 14px;
    }
    > input {
      height: 20px;
      width: 200px;
    }
  }

  img.E {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 177px;
    top: 23px;
  }

  img.PW {
    position: absolute;
    width: 20px;
    height: 20px;
    left: 177px;
    top: 67px;
    cursor: pointer;
  }
`;

export default Input;
