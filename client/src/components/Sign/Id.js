import {
  SignItem,
  SignLabel,
  SignInput,
  ConfirmButton
} from '../../styles/signStyle';

const Id = ({ id, setId }) => {
  return (
    <SignItem>
      <SignLabel htmlFor="id">아이디</SignLabel>
      <SignInput
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
    </SignItem>
  );
};

export default Id;
