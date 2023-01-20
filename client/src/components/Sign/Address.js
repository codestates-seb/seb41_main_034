import { useState } from 'react';
import {
  SignItem,
  SignLabel,
  SignInput,
  ConfirmButton
} from '../../styles/signStyle';

const Address = ({
  address,
  addressDetail,
  setAddress,
  setAddressDetail,
  isOpenPost,
  setIsOpenPost
}) => {
  const onChangeOpenPost = (e) => {
    e.preventDefault();
    setIsOpenPost(!isOpenPost);
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
    </>
  );
};

export default Address;
