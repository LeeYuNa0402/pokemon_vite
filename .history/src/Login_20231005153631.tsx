import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [notAllow, setNotAllow] = useState(true);
  const [saveIDFlag, setSaveIDFlag] = useState(false);
  //   const icon = faEye;

  const [showPswd, setShowPswd] = useState(false);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  //   console.log(email, "email");
  //   console.log(pw, "pw");

  useEffect(() => {
    if (email == "" || pw == "") {
      setNotAllow(true);
      return;
    } else {
      setNotAllow(false);
    }
  }, [email, pw]);

  const saveEmail = () => {
    localStorage.setItem("key", email);
    setSaveIDFlag(!saveIDFlag);
  };

  const login = () => {
    if (true) {
      if (saveIDFlag) {
        localStorage.setItem("key", email);
        console.log(localStorage.getItem("key"));
        navigate("/", { state: { email: email } });
      } else {
        sessionStorage.setItem("key", email);
        console.log(sessionStorage.getItem("key"), "<--sessionStorage");
        navigate("/", { state: { email: email } });
      }
    }
  };

  // console.log(saveIDFlag);

  const toggleShowPswd = () => {
    setShowPswd(!showPswd);
  };

  return (
    <div className="Login">
      <div className="login-cont">
        <img
          className="pokemon-logo"
          src="https://lh3.googleusercontent.com/3TSaKxXGo2wT0lu0AyNUBnkk6wkCC2AzOhJyy3JXIPm-AmZ1k9DSAroWeBUyePswCZSs5lVp3mPF7HzUpY9VPlyOV5eddITONINr3WSqLNLm=e365-w1860"
        />
        {/* <h1 className="login-tit">Pokemon Login</h1> */}

        <h2>Welcome to Sneat! 👋</h2>
        <p>Please sign-in to your account and start the adventure</p>

        <form>
          <label htmlFor="id" className="form-label">
            EMAIL OR USERNAME
          </label>
          <input
            type="text"
            id="id"
            placeholder="Enter your email or username"
            value={email}
            onChange={handleEmail}
          />

          <div className="password-wrap">
            <label htmlFor="password" className="form-label">
              PASSWORD
            </label>
            <Link to="/ForgotPassword" className="forgot-pass">
              Forgot Password?
            </Link>
            <input
              // type="password"
              type={showPswd ? "text" : "password"}
              id="password"
              placeholder="**********"
              value={pw}
              onChange={handlePassword}
            />
            <FontAwesomeIcon
              className="fontawesome-eye"
              icon={faEyeSlash}
              onClick={toggleShowPswd}
            />
          </div>

          <label className="check-remember">
            <input
              type="checkbox"
              value="Remember-Me"
              onChange={saveEmail}
              checked={saveIDFlag}
            />
            Remember Me
          </label>
        </form>

        <button disabled={notAllow} className="sign-in" onClick={login}>
          Sign in
        </button>

        <div className="create-account-wrap">
          New on our platform ?{" "}
          <Link className="create-account" to="/Createaccount">
            Create an account{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
