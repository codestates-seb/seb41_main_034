import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';

const AddAddressAdd = ({
  isAddressAdd,
  setIsAddressAdd,
  setAddress,
  setIsDetailAddress
}) => {
  const onCompletePost = (data) => {
    setIsAddressAdd(false);
    setAddress(data.address);
    setIsDetailAddress(true);
  };
  return (
    <>
      <AddressAddContainer isAddressAdd={isAddressAdd}>
        <AddressAddTitle>주소 검색</AddressAddTitle>
        <DaumPostcode autoClose={false} onComplete={onCompletePost} />
      </AddressAddContainer>
    </>
  );
};

const AddressAddContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: ${(props) => (props.isAddressAdd ? 'block' : 'none')};
  width: 100%;
  max-width: 768px;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 99;
  background-color: white;
`;

const AddressAddTitle = styled.h2`
  padding: 12px 0;
  border-bottom: 1px solid ${(props) => props.theme.blackColor};
  font-size: 24px;
  text-align: center;
  color: ${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.whiteColor};
`;

export default AddAddressAdd;
