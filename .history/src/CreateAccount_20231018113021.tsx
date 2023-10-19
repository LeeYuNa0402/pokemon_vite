import { useState, useCallback } from "react";

const CreateAccount = () => {
  // 유효성 검사
  const [isId, setIsId] = useState(false);
  //이름, 이메일, 비밀번호, 비밀번호 확인
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");

  //오류메시지 상태저장
  const [nameMessage, setNameMessage] = useState<string>("");
  const [emailMessage, setEmailMessage] = useState<string>("");
  const [passwordMessage, setPasswordMessage] = useState<string>("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    useState<string>("");

  // 유효성 검사
  const [isName, setIsName] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);
  const router = useRouter();

  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setNameMessage("2글자 이상 5글자 미만으로 입력해주세요.");
      setIsName(false);
    } else {
      setNameMessage("올바른 이름 형식입니다 :)");
      setIsName(true);
    }
  }, []);

  return (
    <div className="CreateAccount">
      <img
        className="pokemon-logo"
        src="https://lh3.googleusercontent.com/3TSaKxXGo2wT0lu0AyNUBnkk6wkCC2AzOhJyy3JXIPm-AmZ1k9DSAroWeBUyePswCZSs5lVp3mPF7HzUpY9VPlyOV5eddITONINr3WSqLNLm=e365-w1860"
      />
      <form className="id_password">
        <input type="text" placeholder="아이디" onChange={onChangeId} />
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
