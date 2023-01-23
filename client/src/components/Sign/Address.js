import {
  SignItem,
  SignLabel,
  SignInput,
  ConfirmButton,
  AddressDetail
} from '../../styles/signStyle';

const Address = ({ form, setForm, isOpenPost, setIsOpenPost }) => {
  const onChangeOpenPost = (e) => {
    e.preventDefault();
    setIsOpenPost(true);
  };

  return (
    <>
      <SignItem>
        <SignLabel>주소</SignLabel>
        {form.address && (
          <>
            <SignInput
              type="text"
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              value={form.address}
              readOnly
            />
            <AddressDetail>
              <SignInput
                type="text"
                aria-label="상세주소를 입력하세요."
                placeholder="상세주소"
                onChange={(e) =>
                  setForm({ ...form, addressDetail: e.target.value })
                }
                value={form.addressDetail || ''}
                required
              />
            </AddressDetail>
          </>
        )}
        <ConfirmButton onClick={onChangeOpenPost}>주소검색</ConfirmButton>
      </SignItem>
    </>
  );
};

export default Address;
