const CreateAccount = () => {
  return (
    <div className="CreateAccount">
      <form className="id_password">
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호 재확인" />
      </form>

      <form>
        <input type="text" />
        <input type="생년월일 8자리" />
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
