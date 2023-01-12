import {
  SignupItem,
  SignupLabel,
  SignupInput,
  ConfirmButton
} from '../../styles/signupStyle';

const Phone = ({ phone, setPhone }) => {
  return (
    <SignupItem>
      <SignupLabel htmlFor="phone">휴대폰</SignupLabel>
      <SignupInput
        type="tel"
        id="phone"
        aria-label="이름을 입력하세요."
        onChange={(e) => setPhone(e.target.value)}
        value={phone || ''}
      />
      <ConfirmButton>인증번호 받기</ConfirmButton>
    </SignupItem>
  );
};

export default Phone;
