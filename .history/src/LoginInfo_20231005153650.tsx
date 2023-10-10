import React, { useState } from "react";
import Login from "./Login";
import { useLocation, useNavigate } from "react-router-dom";
import "./css/style.css";
import App from "./App";

// const onClick = () => {
//   console.log(localStorage.getItem("key"));
// };

const LoginInfo = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const onClickImg = () => {
    navigate(`/App`);
  };

  console.log(state.email, "<--state.email");

  return (
    <div className="logininfo">
      {/* <div>{`${localStorage.getItem("key")}님 반갑습니다`}</div>
      <div>{state.email}</div> */}

      <h1 className="member">
        {localStorage.getItem("key") !== null
          ? `${localStorage.getItem("key")}님 반갑습니다`
          : localStorage.getItem("key") == null
          ? `${state.email}님 반갑습니다`
          : "11"}
      </h1>

      <div className="button-wrap">
        <button className="logout">로그아웃 하기</button>
        <button className="go-to-pokemon" onClick={onClickImg}>
          포켓몬 보러가기
        </button>
      </div>
    </div>
  );
};

export default LoginInfo;
