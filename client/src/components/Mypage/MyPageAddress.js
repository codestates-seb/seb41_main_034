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
<<<<<<< HEAD
      const AddressAPI = await userAddressGetAPI();
      setAddress(AddressAPI.data);
      // console.log(AddressAPI.data);
    };
    init();
  }, []);
=======
      const body = 'userAddress';
      const data = await userAddressGetAPI(body);
      setAddress(data.data);
      // console.log(address);
    };
    init();
  }, []);

  // const [list, setList] = useState([{}, {}, {}]);
  const [modal, setModal] = useState(false);
  const onRemove = () => {
    if (window.confirm('주소를 삭제하시겠습니까?')) {
      alert('삭제되었습니다');
    } else {
      alert('취소했습니다.');
    }
  };
>>>>>>> 10be998e34ec9dd7d45e79a911478a73704b5269

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
              <AddressText>{el.address}</AddressText>
              <RecipientText>{el.recipient}</RecipientText>
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
