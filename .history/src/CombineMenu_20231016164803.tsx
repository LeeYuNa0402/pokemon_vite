import { useNavigate } from "react-router-dom";
import "./css/style.css";

const CombineMenu = () => {
  const navigate = useNavigate();

  const onClickImg = () => {
    navigate(`/Login`);
  };

  // console.log(sessionStorage.getItem("key"), "<===이거 확인중");

  const logoutBtn = () => {
    sessionStorage.removeItem("key");
    localStorage.removeItem("key");
    window.location.reload();
  };

  return (
    <div className="combine-menu">
      <img
        className="logo"
        src="https://lh3.googleusercontent.com/3TSaKxXGo2wT0lu0AyNUBnkk6wkCC2AzOhJyy3JXIPm-AmZ1k9DSAroWeBUyePswCZSs5lVp3mPF7HzUpY9VPlyOV5eddITONINr3WSqLNLm=e365-w1860"
      />

      <div className="profile">
        <div className="profile-name">
          {sessionStorage.getItem("key") === null &&
          localStorage.getItem("key") === null
            ? ""
            : sessionStorage.getItem("key") !== null
            ? `${sessionStorage.getItem("key")}님`
            : localStorage.getItem("key") !== null
            ? `${localStorage.getItem("key")}님`
            : ""}
        </div>

        <div className="login" onClick={onClickImg}>
          {sessionStorage.getItem("key") === null &&
          localStorage.getItem("key") === null
            ? "로그인"
            : ""}
          {/* 로그인 */}
        </div>

        <div className="login" onClick={logoutBtn}>
          {sessionStorage.getItem("key") === null &&
          localStorage.getItem("key") === null
            ? ""
            : "로그아웃"}
        </div>
      </div>
    </div>
  );
};

export default CombineMenu;
