import { useState } from 'react';
import {
  MyAddressContainer,
  Addressheader,
  AddressInfo,
  SelectTitle,
  AddressTitle,
  RecipientTitle,
  PhoneNumberTitle,
  EditTitle,
  SelectText,
  AddressText,
  RecipientText,
  PhoneNumberText,
  EditIconContainer,
  CheckIconContainer,
  AddressButtonContainer,
  AddressButton,
  ModalContainer,
  ModalView,
  ModalViewBody,
  ModalViewBodyTable,
  ModalViewBodyTableLeft,
  ModalViewBodyTableRightInput,
  ModalViewFooter,
  ModalViewBodyTableButton,
  ModalViewFooterButtonLeft,
  ModalViewFooterButtonRight
} from '../../styles/myPageStyle';

import { ReactComponent as CheckIcon } from '../../assets/icons/checkIcon.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/editIcon.svg';
import { ReactComponent as CancleIcon } from '../../assets/icons/cancleIcon.svg';
const MyAddress = () => {
  const [list, setList] = useState([{}, {}, {}]);
  const [modal, setModal] = useState(false);
  return (
    <>
      <MyAddressContainer>
        <Addressheader>
          <SelectTitle>선택</SelectTitle>
          <AddressTitle>주소</AddressTitle>
          <RecipientTitle>받는사람</RecipientTitle>
          <PhoneNumberTitle>연락처</PhoneNumberTitle>
          <EditTitle>수정</EditTitle>
        </Addressheader>
        <SelectText>기본주소</SelectText>
        {list.map((e) => {
          return (
            <AddressInfo>
              <CheckIconContainer>
                <CheckIcon />
              </CheckIconContainer>
              <AddressText>서울시 서초구 서초대로</AddressText>
              <RecipientText>최코딩</RecipientText>
              <PhoneNumberText>010-1234-5678</PhoneNumberText>
              <EditIconContainer>
                <EditIcon alt="주소 수정버튼입니다" />
                <CancleIcon />
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
      {/* modal */}
      {modal ? (
        <ModalContainer>
          <ModalView>
            <ModalViewBody>
              <ModalViewBodyTable>
                <ModalViewBodyTableLeft>주소</ModalViewBodyTableLeft>
                <ModalViewBodyTableRightInput
                  type="address"
                  aria-label="주소를 입력하세요."
                />
                {/* 서울시 서초구 서초대로 */}
                <ModalViewBodyTableButton>주소 변경</ModalViewBodyTableButton>
              </ModalViewBodyTable>
              <ModalViewBodyTable>
                <ModalViewBodyTableLeft>받는사람</ModalViewBodyTableLeft>
                <ModalViewBodyTableRightInput
                  type="Recipient"
                  aria-label="받는사람을 입력하세요."
                />
              </ModalViewBodyTable>
              <ModalViewBodyTable>
                <ModalViewBodyTableLeft>연락처</ModalViewBodyTableLeft>
                <ModalViewBodyTableRightInput
                  type="PhoneNumber"
                  aria-label="연락처을 입력하세요."
                />
              </ModalViewBodyTable>
            </ModalViewBody>
            <ModalViewFooter>
              <ModalViewFooterButtonLeft>
                기본 주소 설정
              </ModalViewFooterButtonLeft>
              <ModalViewFooterButtonRight onClick={() => setModal((e) => !e)}>
                수정 완료
              </ModalViewFooterButtonRight>
            </ModalViewFooter>
          </ModalView>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default MyAddress;
