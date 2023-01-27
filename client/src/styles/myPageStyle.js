import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  color: ${(props) => props.theme.primaryColor};

  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    border-top: 1px solid ${(props) => props.theme.borderColor};
  }
`;

const RightContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 1px;
    fill: ${(props) => props.theme.activeColor};
  }
`;

const LeftCotainer = styled.div`
  width: 100%;
`;

const Text = styled.div`
  font-size: 12px;

  @media ${(props) => props.theme.tablet} {
    font-size: 8px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 4px;
  }
`;

const ListHeader2 = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  color: ${(props) => props.theme.blackColor};

  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const RightContainer2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
    fill: ${(props) => props.theme.grayColor};

    @media ${(props) => props.theme.tablet} {
      width: 12px;
      height: 12px;
    }

    @media ${(props) => props.theme.mobile} {
      width: 12px;
      height: 12px;
      margin-left: 13px;
    }
  }
`;

const LeftCotainer2 = styled.div`
  width: 100%;
`;

const ItemLinkText = styled.button`
  font-size: 12px;

  @media ${(props) => props.theme.tablet} {
    font-size: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 4px;
  }
`;

const ItemText = styled.div`
  font-size: 12px;

  @media ${(props) => props.theme.tablet} {
    font-size: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 4px;
  }
`;

const MarginSpace = styled.div`
  height: 8px;
`;

const NavContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  font-size: 12px;

  @media ${(props) => props.theme.desktop} {
    border: none;
    flex-direction: column;
    row-gap: 1px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
`;

const CatagoryBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.whiteColor};
  transition: background-color 0.3s, color 0.3s;
  padding: 12px;

  &:not(:last-child) {
    border-right: 1px solid ${(props) => props.theme.borderColor};
  }

  svg {
    display: none;
  }

  @media ${(props) => props.theme.desktop} {
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: 4px;
    font-size: 12px;

    svg {
      display: block;
      width: 10px;
      height: 10px;
      transition: fill 0.3s;
    }

    &:hover {
      color: ${(props) => props.theme.whiteColor};
      background-color: ${(props) => props.theme.hoverColor};

      svg {
        fill: ${(props) => props.theme.whiteColor};
      }
    }
  }
`;

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.grayColor};
  padding-bottom: 12px;
`;

const Title = styled.div`
  width: 100%;
  font-size: 30px;
  margin-bottom: 12px;

  @media ${(props) => props.theme.tablet} {
    font-size: 24px;
    text-align: center;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 20px;
    text-align: center;
  }
`;

const UserInfoContainer = styled.div`
  width: 100%;
  padding: 16px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 12px;
`;

const WellcomText = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.primaryColor};

  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
`;

const Name = styled.div`
  display: flex;
  align-items: flex-end;
`;

const NameText = styled.p`
  font-size: 16px;

  @media ${(props) => props.theme.tablet} {
    font-size: 14px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const NameNext = styled.span`
  display: block;
  margin-left: 2px;
  font-size: 14px;
  color: ${(props) => props.theme.grayColor};

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
`;

const OtherText = styled.p`
  font-size: 12px;
`;

const EditbuttonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
`;

const EditButton = styled(Link)`
  display: block;
  padding: 4px 8px;
  font-size: 10px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};
  transition: background-color 0.3s;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }
`;

const UserEditWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const UserEditContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;

  @media ${(props) => props.theme.tablet} {
    max-width: 500px;
  }
`;

const EditCotainer = styled.div`
  display: flex;
  width: 100%;
`;

const LeftBox = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: ${(props) => props.theme.primaryColor};

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
`;

const RightBox = styled.div`
  width: 100%;
`;

const InputBox = styled.input`
  width: 100%;
  padding: 6px;
  margin: 12px 2px 12px 2px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  font-size: 12px;

  @media ${(props) => props.theme.tablet} {
    padding: 8px;
    font-size: 12px;
    zoom: 0.9;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }
`;

const ConfirmMessage = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  color: ${(props) => props.theme.primaryColor};
  font-size: 12px;

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
    zoom: 0.9;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }
`;

const PasswordContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const PasswordText = styled.label`
  width: 100%;
  max-width: 147px;
  font-size: 12px;
  color: ${(props) => props.theme.primaryColor};

  @media ${(props) => props.theme.tablet} {
    max-width: 79px;
    font-size: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    max-width: 102px;
    font-size: 4px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin: 12px 0 12px 0;
`;

const ConfirmButton = styled.button`
  width: 98px;
  height: 34px;
  margin: 4px 0 0 4px;
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 4px;
  font-size: 12px;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }

  @media ${(props) => props.theme.tablet} {
    width: 64px;
    height: 24px;
    font-size: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 64px;
    height: 24px;
    font-size: 8px;
  }
`;

const UserOutButton = styled.button`
  width: 98px;
  height: 34px;
  margin: 4px 0 0 4px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  color: ${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.whiteColor};
  font-size: 12px;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
      color: ${(props) => props.theme.whiteColor};
    }
  }

  @media ${(props) => props.theme.tablet} {
    width: 64px;
    height: 24px;
    font-size: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 64px;
    height: 24px;
    font-size: 8px;
  }
`;

const OrderDateContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  padding: 12px 0;
`;

const OrderDate = styled.div`
  font-size: 20px;
  color: ${(props) => props.theme.grayColor};
`;
const OrderListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 24px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 8px;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const LeftContent = styled.div`
  width: 120px;
  height: 120px;
  margin-top: 8px;
  margin-right: 12px;

  @media ${(props) => props.theme.tablet} {
    width: 120px;
    height: 120px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 80px;
    height: 80px;
  }
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
`;

const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 8px;
  row-gap: 8px;
  width: 100%;
  max-width: 200px;

  font-size: 20px;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    max-width: 170px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    max-width: 100px;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
`;

const ProductName = styled.div`
  margin-bottom: 4px;
  font-size: 16px;
  font-weight: bold;

  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }
`;

const OrderListPrice = styled.div`
  margin-bottom: 4px;
  font-size: 16px;

  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }
`;

const OrderQuantity = styled.div`
  margin-bottom: 4px;
  font-size: 16px;

  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }
`;

const RightContent = styled.div`
  width: 100%;
  max-width: 200px;
  display: grid;
  align-items: center;
  font-size: 20px;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    max-width: 150px;
  }
  @media ${(props) => props.theme.mobile} {
    max-width: 100px;
  }

  svg {
    fill: ${(props) => props.theme.grayColor};
  }
`;
const CancleImgContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;

  svg {
    width: 16px;
    height: 16px;
    fill: ${(props) => props.theme.grayColor};
  }
`;

const OrderStatus = styled.div`
  margin: 12px 0 18px 0;
  font-size: 20px;
  font-weight: bold;

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

//MyPageAddress
const MyAddressContainer = styled.div`
  width: 100%;
  max-width: 100%;
  max-height: 600px;
  display: grid;
  align-items: center;
`;

const Addressheader = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 0;
  border-bottom: 1px solid ${(props) => props.theme.grayColor};
  color: ${(props) => props.theme.primaryColor};
`;

const AddressInfo = styled.div`
  display: flex;
  align-items: center;
  max-height: 300px;
  width: 100%;
  height: 100%;
  margin: 12px 0px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

const SelectTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  font-size: 16px;
  font-weight: 700;

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const AddressTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  font-size: 16px;
  font-weight: 700;

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const RecipientTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30%;
  font-size: 16px;
  font-weight: 700;

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const EditTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  font-size: 16px;
  font-weight: 700;

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const CheckIconContainer = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 16px;
    height: 16px;
    fill: ${(props) => props.theme.grayColor};
  }

  @media ${(props) => props.theme.mobile} {
    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

const AddressText = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const RecipientText = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const EditIconContainer = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.mobile} {
  }
`;

const EditButton2 = styled.button`
  display: block;
  padding: px 24px;
  font-size: 12px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};

  @media ${(props) => props.theme.mobile} {
    padding: 6px 16px;
    font-size: 10px;
  }
`;

const AddressButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  margin: 35px 0px;
`;

const AddressButton = styled.button`
  width: 130px;
  padding: 5px 0px;
  font-size: 12px;
  border: 1px solid;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primaryColor};
  color: white;

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
    width: 100px;
  }
`;

//MyPageAddressModal
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.modal ? 'flex' : 'none')};
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 97;
`;

const AddModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.modal ? 'flex' : 'none')};
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 97;
`;

const ModalView = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 500px;
  background-color: ${(props) => props.theme.whiteColor};
  border-radius: 4px;
  z-index: 99;
  transition: transform 0.5s;
  transform: translate(-50%, -50%)
    ${(props) => (props.modal ? 'translateY(0)' : 'translateY(-200%)')};
`;

const AddModalView = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 425px;
  background-color: ${(props) => props.theme.whiteColor};
  border-radius: 4px;
  z-index: 99;
  transition: transform 0.5s;
  transform: translate(-50%, -50%)
    ${(props) => (props.modal ? 'translateY(0)' : 'translateY(-200%)')};
`;

const ModalViewBody = styled.div`
  width: 100%;
`;

const ModalViewBodyTable = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  margin-top: 12px;
`;

const ModalViewBodyTableLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 100px;
  font-size: 12px;
  color: ${(props) => props.theme.primaryColor};

  @media ${(props) => props.theme.mobile} {
    max-width: 100px;
  }
`;

const ModalViewBodyTableRightInput = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const AdInputBox = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  margin: 12px 20px 12px 2px;
  width: 100%;
  max-width: 300px;
  font-size: 12px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  font-size: 12px;

  @media ${(props) => props.theme.tablet} {
    padding: 8px;
    font-size: 12px;
    zoom: 0.9;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }
`;

const ModalViewBodyTableButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px 0 0;
  padding: 8px;
  width: 100%;
  max-width: 93px;
  border-radius: 4px;
  font-size: 12px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};

  @media ${(props) => props.theme.mobile} {
    max-width: 73px;
    padding: 8px 4px 8px 4px;
    font-size: 8px;
  }
`;

const ModalViewFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0px 20px;
  width: 100%;
`;

const ModalViewFooterButtonLeft = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0px;
  width: 93px;
  height: 33px;
  font-size: 12px;
  border: 1px solid ${(props) => props.theme.grayColor};
  border-radius: 5px;
  background-color: ${(props) => props.theme.whiteColor};
  color: ${(props) => props.theme.primaryColor};

  @media ${(props) => props.theme.mobile} {
    max-width: 73px;
    padding: 4px;
    font-size: 8px;
  }
`;
const ModalViewFooterButtonmiddle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  width: 93px;
  height: 33px;
  font-size: 12px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};

  @media ${(props) => props.theme.mobile} {
    max-width: 73px;
    padding: 4px;
    font-size: 8px;
  }
`;
const ModalViewFooterButtonRight = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  width: 93px;
  height: 33px;
  font-size: 12px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};

  @media ${(props) => props.theme.mobile} {
    max-width: 73px;
    padding: 4px;
    font-size: 8px;
  }
`;

const ReviewListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 0 8px;
  width: 100%;
  padding: 12px 0 12px 0;
  font-size: 16px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    font-size: 12px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    font-size: 8px;
  }
`;
const ReviewButton = styled.button`
  width: 100%;
  max-width: 100px;
  height: 100%;
  padding: 8px 4px 8px 4px;
  font-size: 12px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};

  @media ${(props) => props.theme.mobile} {
    max-width: 60px;
    padding: 4px 0;
    font-size: 8px;
  }
`;

const ProductImg2 = styled.img`
  width: 100%;
  height: 100%;
`;

const MyPageReviewImage = styled.div`
  width: 120px;
  height: 120px;
  margin: 10px 0 0 28px;

  @media ${(props) => props.theme.tablet} {
    width: 120px;
    height: 120px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 80px;
    height: 80px;
  }
`;
const MyPageReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  row-gap: 8px;
  max-width: 300px;

  font-size: 20px;
`;

const MyPageReviewContentTopButton = styled.button`
  display: flex;
  // align-items: center;
  width: 100%;
  height: 30%;
  font-size: 16px;
  font-weight: bold;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    font-size: 16px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    font-size: 12px;
  }
`;

const MyPageReviewContent2 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30%;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    font-size: 12px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    font-size: 8px;
  }
`;

const MyPageReviewContentText = styled.div`
  margin-right: 8px;
  font-size: 16px;
`;

const MyPageReviewDelete = styled.div`
  width: 100%;
  max-width: 100px;
  // margin-bottom: 40px;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    max-width: 150px;
  }
  @media ${(props) => props.theme.mobile} {
    max-width: 100px;
  }
`;

const CancleImgContainer3 = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;

  svg {
    width: 16px;
    height: 16px;
    fill: ${(props) => props.theme.grayColor};
  }
`;

const MyPageContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 24px;

  @media ${(props) => props.theme.desktop} {
    flex-direction: row;
    align-items: flex-start;
    column-gap: 24px;
  }
`;

const MyPageNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 12px;
  width: 100%;
  max-width: 500px;

  @media ${(props) => props.theme.desktop} {
    max-width: 240px;
  }
`;

const MyPageContent = styled.div`
  width: 100%;
  flex-grow: 1;
`;

export {
  Name,
  NameNext,
  MyPageContent,
  MyPageNavbar,
  MyPageContainer,
  ListHeader,
  RightContainer,
  LeftCotainer,
  Text,
  ListHeader2,
  RightContainer2,
  LeftCotainer2,
  ItemLinkText,
  ItemText,
  MarginSpace,
  NavContainer,
  CatagoryBox,
  Container,
  Title,
  UserInfoContainer,
  InfoContainer,
  TextContainer,
  NameText,
  WellcomText,
  OtherText,
  EditbuttonContainer,
  EditButton,
  UserEditWrapper,
  UserEditContainer,
  EditCotainer,
  LeftBox,
  RightBox,
  InputBox,
  ConfirmMessage,
  PasswordContainer,
  PasswordText,
  ButtonContainer,
  ConfirmButton,
  UserOutButton,
  OrderDateContainer,
  OrderDate,
  OrderListContainer,
  LeftContent,
  CenterContent,
  RightContent,
  ProductName,
  OrderListPrice,
  OrderQuantity,
  CancleImgContainer,
  OrderStatus,
  ProductImg,
  ReviewButton,
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
  AddressButton,
  ModalContainer,
  ModalView,
  ModalViewBody,
  ModalViewBodyTable,
  ModalViewBodyTableLeft,
  ModalViewFooter,
  ModalViewBodyTableButton,
  ModalViewFooterButtonLeft,
  ModalViewFooterButtonmiddle,
  ModalViewFooterButtonRight,
  ReviewListContainer,
  ProductImg2,
  MyPageReviewImage,
  MyPageReviewContent,
  MyPageReviewContentTopButton,
  MyPageReviewContent2,
  MyPageReviewContentText,
  MyPageReviewDelete,
  CancleImgContainer3,
  TextWrapper,
  EditButton2,
  AddModalContainer,
  AddModalView,
  ModalViewBodyTableRightInput,
  AdInputBox
};
