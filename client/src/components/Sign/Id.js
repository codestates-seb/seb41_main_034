import {
  SignupItem,
  SignupLabel,
  SignupInput,
  ConfirmButton
} from '../../styles/signupStyle';

const Id = ({ id, setId }) => {
  return (
    <SignupItem>
      <SignupLabel htmlFor="id">아이디</SignupLabel>
      <SignupInput
        type="text"
        id="id"
        aria-label="아이디를 입력하세요."
        onChange={(e) => setId(e.target.value)}
        value={id || ''}
        required
        maxLength={12}
        minLength={4}
      />
      <ConfirmButton>중복확인</ConfirmButton>
    </SignupItem>
  );
};

export default Id;
