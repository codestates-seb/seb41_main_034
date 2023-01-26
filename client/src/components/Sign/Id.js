import {
  SignItem,
  SignLabel,
  SignInput,
  ConfirmButton,
  SignValid,
  DisabledConfirmButton
} from '../../styles/signStyle';
import { baseAPI } from '../../api/customAxios';

const Id = ({ form, setForm, valid, setValid }) => {
  const onCheckId = (e) => {
    const currentId = e.target.value;
    const idRegExp = /^(?=.*[a-zA-z])(?=.*[0-9]).{6,20}$/;

    setForm({ ...form, id: currentId });
    setValid({ ...valid, duplicateCheckId: false });
    idRegExp.test(currentId)
      ? setValid({ ...valid, id: true })
      : setValid({ ...valid, id: false });
  };

  const onClickCheckId = async (e) => {
    e.preventDefault();

    try {
      const res = await baseAPI.get(
        `/user/duplicate-check?username=${form.id}`
      );
      console.log(res);
      window.alert('사용가능한 아이디입니다');
      setValid({ ...valid, duplicateCheckId: true });
    } catch (err) {
      console.log(err);
      window.alert(err.message);
      setForm({ ...form, id: '' });
    }
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
      {valid.id ? (
        <ConfirmButton type="button" onClick={onClickCheckId}>
          중복확인
        </ConfirmButton>
      ) : (
        <DisabledConfirmButton type="button" disabled>
          중복확인
        </DisabledConfirmButton>
      )}
    </SignItem>
  );
};

export default Id;
