import { ReactComponent as CheckIcon } from '../../assets/icons/checkIcon.svg';
import {
  AddressInfo,
  AddressText,
  RecipientText,
  EditIconContainer,
  EditButton2,
  CheckIconContainer,
  GrayCheckIconContainer
} from '../../styles/myPageStyle';
import EditAddressModal from './EditAddressModal';
import { useState } from 'react';

const MyPageAddress = ({ el }) => {
  const [editModal, setEditModal] = useState(false);

  return (
    <>
      <AddressInfo>
        {el.primary ? (
          <CheckIconContainer>
            <CheckIcon />
          </CheckIconContainer>
        ) : (
          <GrayCheckIconContainer>{/* <CheckIcon /> */}</GrayCheckIconContainer>
        )}
        <AddressText>{el.address}</AddressText>
        <RecipientText>{el.recipient}</RecipientText>
        <EditIconContainer>
          <EditButton2 onClick={() => setEditModal(true)}>수정</EditButton2>
        </EditIconContainer>
      </AddressInfo>

      <EditAddressModal
        editModal={editModal}
        setEditModal={setEditModal}
        el={el}
      />
    </>
  );
};

export default MyPageAddress;
