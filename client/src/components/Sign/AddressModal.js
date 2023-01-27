import DaumPostcode from 'react-daum-postcode';
import {
  ModalBackground,
  AddressModalContainer,
  ModalTitle,
  ModalCancle
} from '../../styles/signStyle';
import { ReactComponent as DeleteIcon } from '../../assets/icons/cancleIcon.svg';
import { useEffect, useState } from 'react';

const AddressModal = ({ form, setForm, isOpenPost, setIsOpenPost }) => {
  const [daumAddress, setDaumAddress] = useState('');

  const onCompletePost = (data) => {
    setDaumAddress(data.address);
    setIsOpenPost(false);
  };

  useEffect(() => {
    setForm({ ...form, address: daumAddress });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [daumAddress]);

  return (
    <>
      <ModalBackground
        isOpenPost={isOpenPost}
        onClick={() => setIsOpenPost(false)}
      >
        <ModalCancle>
          <DeleteIcon />
        </ModalCancle>
      </ModalBackground>

      <AddressModalContainer isOpenPost={isOpenPost}>
        <ModalTitle>주소 검색</ModalTitle>
        <DaumPostcode autoClose={false} onComplete={onCompletePost} />
      </AddressModalContainer>
    </>
  );
};

export default AddressModal;
