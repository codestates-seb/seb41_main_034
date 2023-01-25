import {
  SignItem,
  SignLabel,
  SignInput,
  ConfirmButton,
  SignValid
} from '../../styles/signStyle';

const Id = ({ form, setForm, valid, setValid }) => {
  const onCheckId = (e) => {
    const currentId = e.target.value;
    const idRegExp = /^(?=.*[a-zA-z])(?=.*[0-9]).{6,20}$/;

    setForm({ ...form, id: currentId });
    idRegExp.test(currentId)
      ? setValid({ ...valid, id: true })
      : setValid({ ...valid, id: false });
  };

  return (
    <SignItem>
      <SignLabel htmlFor="id">아이디</SignLabel>
      <SignInput
        type="text"
        id="id"
        aria-label="아이디를 입력하세요."
        placeholder="영문, 숫자를 포함한 6~20자"
        onChange={onCheckId}
        value={form.id || ''}
      />
      {form.id && !valid.id && (
        <SignValid>영문, 숫자를 포함한 6~20자를 입력하세요.</SignValid>
      )}
      <ConfirmButton>중복확인</ConfirmButton>
    </SignItem>
  );
};

export default Id;
