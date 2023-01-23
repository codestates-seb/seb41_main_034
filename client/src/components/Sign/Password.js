import {
  SignItem,
  SignLabel,
  SignInput,
  SignValid
} from '../../styles/signStyle';

const Password = ({ form, setForm, valid, setValid }) => {
  const onCheckPassword = (e) => {
    const currentPassword = e.target.value;
    const passwordRegExp =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

    setForm({ ...form, password: currentPassword });
    passwordRegExp.test(currentPassword)
      ? setValid({ ...valid, password: true })
      : setValid({ ...valid, password: false });
  };

  const onCheckPasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;

    setForm({ ...form, passwordConfirm: currentPasswordConfirm });
    form.password === currentPasswordConfirm
      ? setValid({ ...valid, passwordConfirm: true })
      : setValid({ ...valid, passwordConfirm: false });
  };

  return (
    <>
      <SignItem>
        <SignLabel htmlFor="password">비밀번호</SignLabel>
        <SignInput
          type="password"
          id="password"
          aria-label="비밀번호를 입력하세요."
          placeholder="영문, 숫자, 특수문자를 포함한 8~20자"
          onChange={onCheckPassword}
          value={form.password || ''}
        />
        {form.password && !valid.password && (
          <SignValid>
            영문, 숫자, 특수문자를 포함한 8~20자를 입력하세요.
          </SignValid>
        )}
      </SignItem>

      <SignItem>
        <SignLabel htmlFor="passwordConfirm">비밀번호 확인</SignLabel>
        <SignInput
          type="password"
          id="passwordConfirm"
          aria-label="비밀번호를 한번 더 입력하세요."
          placeholder="비밀번호 확인"
          onChange={onCheckPasswordConfirm}
          value={form.passwordConfirm || ''}
        />
        {form.passwordConfirm && !valid.passwordConfirm && (
          <SignValid>비밀번호가 일치하지 않습니다.</SignValid>
        )}
      </SignItem>
    </>
  );
};

export default Password;
