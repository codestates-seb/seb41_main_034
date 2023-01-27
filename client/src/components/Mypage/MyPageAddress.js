import {
  MyAddressContainer,
  Addressheader,
  AddressInfo,
  SelectTitle,
  AddressTitle,
  RecipientTitle,
  EditTitle,
  AddressText,
  RecipientText,
  EditIconContainer,
  EditButton2,
  CheckIconContainer,
  AddressButtonContainer,
  AddressButton
} from '../../styles/myPageStyle';
import MyPageHeader from './MyPageHeader';
import { ReactComponent as CheckIcon } from '../../assets/icons/checkIcon.svg';
import { userAddressGetAPI } from '../../api/address';
import { useEffect, useState } from 'react';
import EditAddressModal from './EditAddressModal';
import AddAddressModal from './AddAddressModal';

const MyPageAddress = () => {
  const [address, setAddress] = useState([]);
  const [modal, setModal] = useState(false);
  const [addModal, setAddModal] = useState(false);

  useEffect(() => {
    const init = async () => {
      const data = await userAddressGetAPI();
      console.log('data', data);
      setAddress(data.data);
      // console.log(address);
    };
    init();
  }, []);

  return (
    <>
      <MyPageHeader title={'주소관리'} />
      <MyAddressContainer>
        <Addressheader>
          <SelectTitle>기본 배송지</SelectTitle>
          <AddressTitle>주소</AddressTitle>
          <RecipientTitle>받는사람</RecipientTitle>
          <EditTitle>수정</EditTitle>
        </Addressheader>
        {address.map((el, idx) => {
          return (
            <AddressInfo key={idx}>
              <CheckIconContainer>
                <CheckIcon />
              </CheckIconContainer>
              <AddressText>서울시 서초구 서초대로</AddressText>
              <RecipientText>최코딩</RecipientText>
              <EditIconContainer>
                <EditButton2 onClick={() => setModal((e) => !e)}>
                  수정
                </EditButton2>
              </EditIconContainer>
            </AddressInfo>
          );
        })}
      </MyAddressContainer>
      <AddressButtonContainer>
        <AddressButton onClick={() => setAddModal(true)}>
          새 주소 추가
        </AddressButton>
      </AddressButtonContainer>

      <EditAddressModal modal={modal} setModal={setModal} />
      <AddAddressModal modal={addModal} setModal={setAddModal} />
    </>
  );
};

export default MyPageAddress;
