import { useState } from "react";

const CreateAccount = () => {
  // 유효성 검사
  const [Id, setId] = useState<string>("");

  //   오류 메세지 상태 저장
  const [IdMessage, setIdMessage] = useState<string>("");

  // 유효성 검사
  const [isId, setIsId] = useState<boolean>(false);

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);

    if (Id.length < 5) {
      setIdMessage("2글자 이상 5글자 미만으로 입력해주세요. ");
    } else {
      setIdMessage("올바른 이름 형식입니다.");
    }
  };
  console.log(Id);

  return (
    <div className="CreateAccount">
      <img
        className="pokemon-logo"
        src="https://lh3.googleusercontent.com/3TSaKxXGo2wT0lu0AyNUBnkk6wkCC2AzOhJyy3JXIPm-AmZ1k9DSAroWeBUyePswCZSs5lVp3mPF7HzUpY9VPlyOV5eddITONINr3WSqLNLm=e365-w1860"
      />
      <form className="id_password">
        <input
          type="text"
          placeholder="아이디"
          onChange={onChangeId}
          value={Id}
        />
        <div className="naver">@naver.com</div>
        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호 재확인" />
      </form>

      <form>
        <input type="text" placeholder="이름" />
        <input type="text" placeholder="생년월일 8자리" />
        <select>
          <option>SKT</option>
          <option>KT</option>
          <option>LG U+</option>
          <option>SKT 알뜰폰</option>
          <option>KT 알뜰폰</option>
          <option>LG U+ 알뜰폰</option>
        </select>
      </form>

      <form>
        <label>
          <input type="radio" value="woman" name="gender" />
          여자
        </label>
        <label>
          <input type="radio" value="man" name="gender" />
          남자
        </label>
      </form>

      <form>
        <label>
          <input type="radio" value="local" name="country" />
          내국인
        </label>
        <label>
          <input type="radio" value="foreigner" name="country" />
          외국인
        </label>
      </form>
    </div>
  );
};

export default CreateAccount;
