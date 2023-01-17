import { SignItem, SignLabel, SignInput } from '../../styles/signStyle';

const Password = ({
  password,
  passwordConfirm,
  setPassword,
  setPasswordConfirm
}) => {
  return (
    <>
      <SignItem>
        <SignLabel htmlFor="password">비밀번호</SignLabel>
        <SignInput
          type="password"
          id="password"
          aria-label="비밀번호를 입력하세요."
          onChange={(e) => setPassword(e.target.value)}
          value={password || ''}
          required
          maxLength={12}
          minLength={4}
        />
      </SignItem>

      <SignItem>
        <SignLabel htmlFor="passwordConfirm">비밀번호 확인</SignLabel>
        <SignInput
          type="password"
          id="passwordConfirm"
          aria-label="비밀번호를 한번 더 입력하세요."
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm || ''}
          required
          maxLength={12}
          minLength={4}
        />
      </SignItem>
    </>
  );
};

export default Password;
