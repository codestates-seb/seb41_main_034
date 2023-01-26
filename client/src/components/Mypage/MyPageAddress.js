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
  CheckIconContainer,
  AddressButtonContainer,
  AddressButton
} from '../../styles/myPageStyle';
import MyPageHeader from './MyPageHeader';
import { ReactComponent as CheckIcon } from '../../assets/icons/checkIcon.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/editIcon.svg';
import { ReactComponent as CancleIcon } from '../../assets/icons/cancleIcon.svg';
import { userAddressGetAPI } from '../../api/address';
import { useEffect, useState } from 'react';
import EditAddressModal from './EditAddressModal';
// import AddAddressModal from './AddAddressModal';

const MyPageAddress = () => {
  const [address, setAddress] = useState([]);
  const [modal, setModal] = useState(false);
  // const [addmodal, setaddModal] = useState(false);

  useEffect(() => {
    const init = async () => {
      const body = 'userAddress';
      const data = await userAddressGetAPI(body);
      console.log('data', data);
      setAddress(data.data);
      // console.log(address);
    };
    init();
  }, []);

  // const [list, setList] = useState([{}, {}, {}]);
  const onRemove = () => {
    if (window.confirm('주소를 삭제하시겠습니까?')) {
      alert('삭제되었습니다');
    } else {
      alert('취소했습니다.');
    }
  };

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
                <EditIcon alt="주소 수정버튼입니다" />
                <CancleIcon onClick={onRemove} alt="주소 삭제 버튼입니다" />
              </EditIconContainer>
            </AddressInfo>
          );
        })}
      </MyAddressContainer>
      <AddressButtonContainer>
        <AddressButton onClick={() => setModal((e) => !e)}>
          새 주소 추가
        </AddressButton>
      </AddressButtonContainer>

      <EditAddressModal modal={modal} setModal={setModal} />
      {/* <AddAddressModal modal={addmodal} setModal={setaddModal} /> */}
    </>
  );
};

export default MyPageAddress;
