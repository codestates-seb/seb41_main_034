import DaumPostcode from 'react-daum-postcode';
import {
  ModalBackground,
  AddressModalContainer,
  ModalTitle,
  ModalCancle
} from '../../styles/signStyle';
import { ReactComponent as DeleteIcon } from '../../assets/icons/cancleIcon.svg';

const AddressModal = ({ form, setForm, isOpenPost, setIsOpenPost }) => {
  const onCompletePost = (data) => {
    setForm({ ...form, address: data.address });
    setIsOpenPost(false);
  };

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
