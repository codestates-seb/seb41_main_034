import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import {
  SignItem,
  SignLabel,
  SignInput,
  ConfirmButton,
  ModalBackground,
  AddressModal
} from '../../styles/signStyle';

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
      <SignItem>
        <SignLabel htmlFor="address">주소</SignLabel>
        {address ? (
          <SignInput
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            readOnly
          />
        ) : (
          <SignInput
            type="text"
            onChange={() => setAddress('')}
            value={''}
            required
          />
        )}
        <ConfirmButton onClick={onChangeOpenPost}>주소 검색</ConfirmButton>
      </SignItem>

      {address && (
        <SignItem>
          <SignLabel htmlFor="addressDetail">상세주소</SignLabel>
          <SignInput
            type="text"
            id="addressDetail"
            aria-label="상세주소를 입력하세요."
            onChange={(e) => setAddressDetail(e.target.value)}
            value={addressDetail || ''}
            required
          />
        </SignItem>
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
