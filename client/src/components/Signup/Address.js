import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import {
  SignupItem,
  SignupLabel,
  SignupInput,
  ConfirmButton
} from '../../styles/signupStyle';

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
    display: isOpenPost ? 'block' : 'none',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    maxWidth: '300px'
  };

  return (
    <>
      <SignupItem>
        <SignupLabel htmlFor="address">주소</SignupLabel>
        <SignupInput
          type="text"
          readOnly
          aria-label="이름을 입력하세요."
          onChange={(e) => setAddress(e.target.value)}
          value={address || ''}
        />
        <SignupInput
          type="text"
          id="address"
          aria-label="이름을 입력하세요."
          onChange={(e) => setAddressDetail(e.target.value)}
          value={addressDetail || ''}
        />
        <ConfirmButton onClick={onChangeOpenPost}>주소 검색</ConfirmButton>
      </SignupItem>
      <DaumPostcode style={postCodeStyle} onComplete={onCompletePost} />
    </>
  );
};

export default Address;
