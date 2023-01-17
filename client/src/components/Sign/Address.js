import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import {
  SignupItem,
  SignupLabel,
  SignupInput,
  ConfirmButton,
  ModalBackground,
  AddressModal
} from '../../styles/signupStyle';

const Address = ({ address, addressDetail, setAddress, setAddressDetail }) => {
  const [isOpenPost, setIsOpenPost] = useState(false);

  const onChangeOpenPost = (e) => {
    e.preventDefault();
    setIsOpenPost(!isOpenPost);
  };

  const onCompletePost = (data) => {
    setAddress(data.address);
    setIsOpenPost(false);
  };

  return (
    <>
      <SignupItem>
        <SignupLabel htmlFor="address">주소</SignupLabel>
        {address ? (
          <SignupInput
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            readOnly
          />
        ) : (
          <SignupInput
            type="text"
            onChange={() => setAddress('')}
            value={''}
            required
          />
        )}
        <ConfirmButton onClick={onChangeOpenPost}>주소 검색</ConfirmButton>
      </SignupItem>

      {address && (
        <SignupItem>
          <SignupLabel htmlFor="addressDetail">상세주소</SignupLabel>
          <SignupInput
            type="text"
            id="addressDetail"
            aria-label="상세주소를 입력하세요."
            onChange={(e) => setAddressDetail(e.target.value)}
            value={addressDetail || ''}
            required
          />
        </SignupItem>
      )}

      {isOpenPost && (
        <ModalBackground onClick={() => setIsOpenPost(false)}>
          <AddressModal>
            <DaumPostcode onComplete={onCompletePost} />
          </AddressModal>
        </ModalBackground>
      )}
    </>
  );
};

export default Address;
