import {
  MyAddressContainer,
  AddressTitle,
  AddressInfo,
  Select,
  Address,
  Recipient,
  SelectText,
  SelectImg,
  AddressText,
  RecipientText,
  PhoneNumber,
  PhoneNumberText,
  Modify,
  ModifyImg,
  AddressButton
} from '../../styles/myPageStyle';

const MyAddress = () => {
  return (
    <>
      <MyAddressContainer>
        <AddressTitle>
          <Select>선택</Select>
          <Address>주소</Address>
          <Recipient>받는사람</Recipient>
          <PhoneNumber></PhoneNumber>
          <Modify>수정</Modify>
        </AddressTitle>
        <AddressInfo>
          <SelectText>
            기본선택
            <SelectImg></SelectImg>
          </SelectText>
          <AddressText>서울시 서초구 서초대로</AddressText>
          <RecipientText>최코딩</RecipientText>
          <PhoneNumberText>010-1234-5678</PhoneNumberText>
          <ModifyImg></ModifyImg>
        </AddressInfo>
      </MyAddressContainer>
      <AddressButton>새 주소 추가</AddressButton>
    </>
  );
};

export default MyAddress;
