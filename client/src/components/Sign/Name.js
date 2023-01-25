import {
  SignItem,
  SignLabel,
  SignInput,
  SignValid
} from '../../styles/signStyle';

const Name = ({ form, setForm, valid, setValid }) => {
  const onCheckName = (e) => {
    const currentName = e.target.value;
    const nameRegExp = /^[ㄱ-힣]{2,5}$/g;

    setForm({ ...form, name: currentName });
    nameRegExp.test(currentName)
      ? setValid({ ...valid, name: true })
      : setValid({ ...valid, name: false });
  };
  return (
    <SignItem>
      <SignLabel htmlFor="name">이름</SignLabel>
      <SignInput
        type="text"
        id="name"
        aria-label="이름을 입력하세요."
        placeholder="한글 2~5자"
        onChange={onCheckName}
        value={form.name || ''}
      />
      {form.name && !valid.name && (
        <SignValid>한글 2~5자를 입력하세요.</SignValid>
      )}
    </SignItem>
  );
};

export default Name;
