import { SignupItem, SignupLabel, SignupInput } from '../../styles/signupStyle';

const Password = ({
  password,
  passwordConfirm,
  setPassword,
  setPasswordConfirm
}) => {
  return (
    <>
      <SignupItem>
        <SignupLabel htmlFor="password">비밀번호</SignupLabel>
        <SignupInput
          type="password"
          id="password"
          aria-label="비밀번호를 입력하세요."
          onChange={(e) => setPassword(e.target.value)}
          value={password || ''}
          required
          maxLength={12}
          minLength={4}
        />
      </SignupItem>

      <SignupItem>
        <SignupLabel htmlFor="passwordConfirm">비밀번호 확인</SignupLabel>
        <SignupInput
          type="password"
          id="passwordConfirm"
          aria-label="비밀번호를 한번 더 입력하세요."
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm || ''}
          required
          maxLength={12}
          minLength={4}
        />
      </SignupItem>
    </>
  );
};

export default Password;
