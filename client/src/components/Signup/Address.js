import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import {
  SignupItem,
  SignupLabel,
  SignupInput,
  ConfirmButton,
  ModalBackground,
  AddressModal,
  CloseModal
} from '../../styles/signupStyle';
import { ReactComponent as CancleIcon } from '../../assets/icons/cancleIcon.svg';

const Address = ({ address, addressDetail, setAddress, setAddressDetail }) => {
  const [isOpenPost, setIsOpenPost] = useState(false);

  const onChangeOpenPost = () => {
    setIsOpenPost(!isOpenPost);
  };

  const onCompletePost = (data) => {
    setAddress(data.address);
    setIsOpenPost(false);
  };

  const postCodeStyle = {
    width: '100%'
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
        <ModalBackground>
          <AddressModal>
            <CloseModal onClick={(e) => setIsOpenPost(false)}>
              <CancleIcon />
            </CloseModal>
            <DaumPostcode style={postCodeStyle} onComplete={onCompletePost} />
          </AddressModal>
        </ModalBackground>
      )}
    </>
  );
};

export default Address;
