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
      </form>
    </div>
  );
};

export default CreateAccount;
