import { useState } from 'react';
import { authAPI } from '../../api/customAxios';
import {
  ModalViewBody,
  ModalViewBodyTable,
  ModalViewBodyTableLeft,
  ModalViewBodyTableRightInput,
  ModalViewFooter,
  ModalViewBodyTableButton,
  ModalViewFooterButtonLeft,
  AdInputBox,
  AddModalView,
  AddModalContainer,
  AddFlexContainer,
  EmptyTableLeft,
  ModalViewFooterButtonmiddle
} from './../../styles/myPageStyle';
import AddAddressAdd from './AddAddressAdd';
import { ReactComponent as CheckIcon } from '../../assets/icons/checkIcon.svg';

const AddAddressModal = ({ addModal, setAddModal }) => {
  const [isAddressAdd, setIsAddressAdd] = useState(false);
  const [isDetailAddress, setIsDetailAddress] = useState(false);
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [recipient, setResipient] = useState('');
  const [isPrimaryCheck, setIsPrimaryCheck] = useState(false);

  const AddComplete = () => {
    const body = {
      recipient,
      address: `${address} ${addressDetail}`,
      isPrimary: isPrimaryCheck ? 'true' : 'false'
    };
    const AddressPostAPI = async (body) => {
      try {
        await authAPI.post(`user-address`, body);
        setIsAddressAdd(false);
        setAddModal(false);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    };
    AddressPostAPI(body);
    alert('새로운 주소가 추가되었습니다.');
  };

  return (
    <>
      {addModal ? (
        <>
          <AddModalContainer
            onClick={() => {
              setAddModal(false);
              setIsAddressAdd(false);
              setIsDetailAddress(false);
              setAddress('');
            }}
            modal={addModal}
          />

          <AddModalView modal={addModal}>
            <ModalViewBody>
              <ModalViewBodyTable>
                <ModalViewBodyTableLeft>주소</ModalViewBodyTableLeft>
                <AdInputBox value={address} readOnly />
                <ModalViewBodyTableButton onClick={() => setIsAddressAdd(true)}>
                  주소 검색
                </ModalViewBodyTableButton>
              </ModalViewBodyTable>
              {isDetailAddress ? (
                <AddFlexContainer>
                  <EmptyTableLeft />
                  <AdInputBox
                    aria-label="상세주소를 입력해주세요"
                    placeholder="상세주소를 입력해주세요."
                    onChange={(e) => setAddressDetail(e.target.value)}
                  />
                </AddFlexContainer>
              ) : null}
              <ModalViewBodyTable>
                <ModalViewBodyTableLeft>수신인</ModalViewBodyTableLeft>
                <ModalViewBodyTableRightInput>
                  <AdInputBox
                    aria-label="수신인을 입력하세요."
                    placeholder="수신인을 입력해주세요."
                    onChange={(e) => setResipient(e.target.value)}
                  />
                </ModalViewBodyTableRightInput>
              </ModalViewBodyTable>
            </ModalViewBody>
            <ModalViewFooter>
              <ModalViewFooterButtonLeft
                onClick={() => setIsPrimaryCheck((e) => !e)}
                isPrimaryCheck={isPrimaryCheck}
              >
                <CheckIcon />
                기본 주소로 설정
              </ModalViewFooterButtonLeft>
              <ModalViewFooterButtonmiddle onClick={AddComplete}>
                완료
              </ModalViewFooterButtonmiddle>
            </ModalViewFooter>
          </AddModalView>

          <AddAddressAdd
            isAddressAdd={isAddressAdd}
            setIsAddressAdd={setIsAddressAdd}
            setAddress={setAddress}
            setIsDetailAddress={setIsDetailAddress}
          />
        </>
      ) : null}
    </>
  );
};

export default AddAddressModal;
