import {
  ModalContainer,
  ModalView,
  ModalViewBody,
  ModalViewBodyTable,
  ModalViewBodyTableLeft,
  ModalViewBodyTableRightInput,
  AdInputBox,
  ModalViewFooter,
  ModalViewBodyTableButton,
  ModalViewFooterButtonRight,
  ModalViewFooterButtonmiddle,
  AddFlexContainer,
  EmptyTableLeft,
  EditModalFooterButtonLeft,
  EditModalViewBodyTable
} from '../../styles/myPageStyle';
import { useEffect, useState } from 'react';
import EditAddressAdd from './EditAddressAdd';
import { authAPI } from '../../api/customAxios';

const EditAddressModal = ({ editModal, setEditModal, el }) => {
  const [isAddressModal, setIsAddressModal] = useState(false);
  const [isDetailAddress, setIsDetailAddress] = useState(false);
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [recipient, setRecipient] = useState('');

  const onRemove = () => {
    if (window.confirm('주소를 삭제하시겠습니까?')) {
      const DeleteAPI = async (userAddressId) => {
        try {
          await authAPI.delete(`/user-address/${userAddressId}`);
        } catch (error) {
          console.log(error);
        }
      };
      DeleteAPI(el.id);
      window.location.reload();
      el.primary
        ? alert('기본 배송지는 삭제할 수 없습니다.')
        : alert('삭제되었습니다.');
    } else {
      alert('취소했습니다.');
    }
  };

  const EditComplete = () => {
    const body = {
      recipient,
      address: `${address} ${addressDetail}`,
      isPrimary: false
    };
    const EditAPI = async (userAddressId, body) => {
      try {
        await authAPI.patch(`user-address/${userAddressId}`, body);
        setEditModal(false);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    };
    EditAPI(el.id, body);
    alert('주소가 변경되었습니다.');
  };

  const BaseAddressEdit = () => {
    const body = {
      recipient,
      address: `${address} ${addressDetail}`,
      isPrimary: true
    };
    const BaseAddressEditAPI = async (userAddressId, body) => {
      try {
        await authAPI.patch(`user-address/${userAddressId}`, body);
        setEditModal(false);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    };
    console.log(el.id, body);
    BaseAddressEditAPI(el.id, body);
    window.location.reload();
    alert('기본 배송지가 변경되었습니다.');
  };

  useEffect(() => {
    setAddress(el.address);
    setRecipient(el.recipient);
  }, [el]);

  return (
    <>
      {editModal ? (
        <>
          <ModalContainer
            onClick={() => {
              setEditModal(false);
              setIsAddressModal(false);
              setIsDetailAddress(false);
            }}
            modal={editModal}
          />

          <ModalView modal={editModal}>
            <ModalViewBody>
              <EditModalViewBodyTable>
                <AddFlexContainer>
                  <ModalViewBodyTableLeft>주소</ModalViewBodyTableLeft>
                  <AdInputBox
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    readOnly
                  />
                  <ModalViewBodyTableButton
                    onClick={() => setIsAddressModal(true)}
                  >
                    주소 검색
                  </ModalViewBodyTableButton>
                </AddFlexContainer>
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
              </EditModalViewBodyTable>
              <ModalViewBodyTable>
                <AddFlexContainer>
                  <ModalViewBodyTableLeft>수신인</ModalViewBodyTableLeft>
                  <ModalViewBodyTableRightInput>
                    <AdInputBox
                      value={recipient}
                      aria-label="수신인을 입력하세요."
                      onChange={(e) => setRecipient(e.target.value)}
                    />
                  </ModalViewBodyTableRightInput>
                </AddFlexContainer>
              </ModalViewBodyTable>
            </ModalViewBody>
            <ModalViewFooter>
              <EditModalFooterButtonLeft onClick={BaseAddressEdit}>
                기본 주소 설정
              </EditModalFooterButtonLeft>
              <ModalViewFooterButtonmiddle
                onClick={() => {
                  setEditModal(false);
                  EditComplete();
                }}
              >
                수정 완료
              </ModalViewFooterButtonmiddle>
              <ModalViewFooterButtonRight onClick={onRemove}>
                삭제
              </ModalViewFooterButtonRight>
            </ModalViewFooter>
          </ModalView>

          <EditAddressAdd
            isAddressModal={isAddressModal}
            setIsAddressModal={setIsAddressModal}
            setAddress={setAddress}
            setIsDetailAddress={setIsDetailAddress}
          />
        </>
      ) : null}
    </>
  );
};

export default EditAddressModal;
