const CreateAccount = () => {
  return (
    <div className="CreateAccount">
      <form>
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <input type="password" placeholder="비밀번호 재확인" />
        <input type="text" />
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
          <input type="radio" value="blue" />
          Blue
        </label>
        <label>
          <input type="radio" value="red" />
          red
        </label>
      </form>
    </div>
  );
};

export default CreateAccount;
