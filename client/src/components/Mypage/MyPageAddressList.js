import {
  MyAddressContainer,
  Addressheader,
  SelectTitle,
  AddressTitle,
  RecipientTitle,
  AddressButtonContainer,
  AddressButton
} from '../../styles/myPageStyle';
import MyPageHeader from './MyPageHeader';
import { useEffect, useState } from 'react';
import { authAPI } from '../../api/customAxios';
import MyPageAddress from './MyPageAddress';
import AddAddressModal from './AddAddressModal';

const MyPageAddressList = () => {
  const [address, setAddress] = useState([]);
  const [addModal, setAddModal] = useState(false);

  useEffect(() => {
    const AddressGetAPI = async () => {
      try {
        const userAddress = await authAPI.get(`/user-address`);
        setAddress(userAddress.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    AddressGetAPI();
  }, []);

  return (
    <>
      <MyPageHeader title={'주소관리'} />
      <MyAddressContainer>
        <Addressheader>
          <SelectTitle>기본 배송지</SelectTitle>
          <AddressTitle>주소</AddressTitle>
          <RecipientTitle>받는사람</RecipientTitle>
        </Addressheader>
        {address.map((el, idx) => {
          return <MyPageAddress key={idx} el={el} />;
        })}
      </MyAddressContainer>
      <AddressButtonContainer>
        <AddressButton onClick={() => setAddModal(true)}>
          새 주소 추가
        </AddressButton>
      </AddressButtonContainer>

      <AddAddressModal addModal={addModal} setAddModal={setAddModal} />
    </>
  );
};

export default MyPageAddressList;
