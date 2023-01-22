import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  width: 100%;
  max-width: 702px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  color: ${(props) => props.theme.primaryColor};

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    max-width: 399px;
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

  svg {
    width: 1px;
    fill: ${(props) => props.theme.activeColor};
  }
`;

const LeftCotainer = styled.div`
  width: 100%;
  max-width: 363px;
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
  width: 702px;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  color: ${(props) => props.theme.blackColor};

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    max-width: 399px;
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
  max-width: 363px;
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
  flex-direction: column;
  width: 100%;
  row-gap: 1px;

  @media ${(props) => props.theme.mobile} {
    flex-direction: row;
  }
`;

const CatagoryBox = styled(Link)`
  display: flex;
  width: 100%;
  max-width: 160px;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  font-size: 12px;
  background-color: ${(props) => props.theme.whiteColor};

  svg {
    width: 10px;
    height: 10px;
  }

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
      color: ${(props) => props.theme.whiteColor};

      svg {
        fill: ${(props) => props.theme.whiteColor};
      }
    }
  }

  @media ${(props) => props.theme.tablet} {
    width: 140px;
    padding: 12px;
    font-size: 8px;

    svg {
      width: 8px;
      height: 8px;
    }
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    max-width: 100%;
    padding: 12px;
    margin-top: 19px;
    justify-content: center;
    align-items: center;
    font-size: 4px;
    zoom: 0.7;

    svg {
      display: none;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100px;
  padding: 30px;
`;

const Title = styled.div`
  width: 100%;
  height: 60px;
  font-size: 40px;

  @media ${(props) => props.theme.tablet} {
    font-size: 30px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 30px;
    text-align: center;
  }
`;

const SubTitle = styled.div`
  width: calc(100% - 250px);
  height: 45px;
  font-size: 30px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  margin: 0px 0px 0px auto;

  @media ${(props) => props.theme.tablet} {
    width: calc(100% - 150px);
    font-size: 20px;
  }
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const UserInfoContainer = styled.div`
  padding: 16px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;

  @media ${(props) => props.theme.mobile} {
    display: flex;
    border: none;
    padding: 0 30px 0 30px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 12px;
`;

const WellcomText = styled.div`
  font-size: 12px;
  color: ${(props) => props.theme.primaryColor};
`;

const NameText = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
    margin: 12px 0 12px 8px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const OtherText = styled.p`
  font-size: 10px;
`;

const EditbuttonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;

  @media ${(props) => props.theme.mobile} {
    padding-top: 60px;
  }
`;

const EditButton = styled(Link)`
  display: block;
  padding: 4px 8px;
  font-size: 10px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }

  @media ${(props) => props.theme.tablet} {
    max-width: 98px;
    padding: 4px 0 4px 0;
    font-size: 4px;
    zoom: 0.9;
  }

  @media ${(props) => props.theme.mobile} {
    max-width: 88px;
    margin: 0;
    font-size: 4px;
    zoom: 0.9;
  }
`;

const UserEditWrapper = styled.div`
  width: 100%;
  max-width: 602px;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    max-width: 393px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const UserEditContainer = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  border-radius: 4px;
`;

const EditCotainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const LeftBox = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 0 14px 0;
  width: 100%;
  max-width: 137px;
  font-size: 12px;
  border: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};

  @media ${(props) => props.theme.tablet} {
    max-width: 77px;
    padding: 12px 0 12px 0;
    font-size: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    max-width: 120px;
  }
`;

const RightBox = styled.div`
  display: grid;
  width: 100%;
  padding: 4px;
  align-items: center;

  @media ${(props) => props.theme.mobile} {
    border: none;
  }
`;

const InputBox = styled.input`
  width: 100%;
  padding: 6px;
  margin: 12px 2px 12px 2px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
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
  padding: 4px;
  font-size: 12px;

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

  @media ${(props) => props.theme.mobile} {
    display: grid;
    justify-content: center;
  }
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
    width: 220px;
    height: 28px;
    font-size: 8px;
    order: 1;
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
    width: 220px;
    height: 28px;
    font-size: 8px;
    order: 2;
  }
`;

//MyPageOrderList
const OrderDateContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 28px;
  margin-bottom: 12px;
  font-weight: bold;
`;

const OrderDate = styled.div`
  font-size: 20px;
`;
const OrderListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 600px;
  height: 185px;
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
  width: 96px;
  height: 96px;
  margin-top: 8px;
  margin-right: 12px;

  @media ${(props) => props.theme.tablet} {
    width: 72px;
    height: 72px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 30px;
    height: 30px;
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
    max-width: 399px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const ProductName = styled.div`
  margin-bottom: 4px;
  font-weight: bold;
`;

const OrderListPrice = styled.div`
  margin-bottom: 4px;
`;

const OrderQuantity = styled.div`
  margin-bottom: 4px;
`;

const RightContent = styled.div`
  width: 100%;
  max-width: 200px;
  display: grid;
  align-items: center;
  font-size: 20px;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    max-width: 399px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
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
    fill: ${(props) => props.theme.grayColor};
  }
`;

const OrderStatus = styled.div`
  margin-top: 12px;
  font-size: 20px;
  font-weight: bold;
`;
const MyQuestionButton = styled.button`
  margin-top: 12px;
  max-width: 100px;
  font-size: 12px;
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-radius: 4px;
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
  height: 100%;
  max-height: 300px;
  color: ${(props) => props.theme.primaryColor};
`;

const AddressInfo = styled.div`
  display: flex;
  align-items: center;
  max-height: 300px;
  width: 100%;
  height: 100%;
  margin: 12px 0px;

  border-bottom: 1px solid ${(props) => props.theme.grayColor};
`;

const SelectTitle = styled.div`
  width: 15%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const AddressTitle = styled.div`
  width: 25%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const RecipientTitle = styled.div`
  width: 20%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;
const PhoneNumberTitle = styled.div`
  width: 25%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const EditTitle = styled.div`
  width: 15%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const SelectText = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  margin-top: 35px;
  margin-bottom: 5px;

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
    width: 24px;
    height: 24px;
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
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const RecipientText = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const PhoneNumberText = styled.div`
  width: 25%;
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
  svg {
    width: 24px;
    height: 24px;
    fill: ${(props) => props.theme.grayColor};
  }

  @media ${(props) => props.theme.mobile} {
    svg {
      width: 12px;
      height: 12px;
    }
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
  font-size: 16px;
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
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(173, 181, 189, 0.7);
  /* border-bottom: solid ${(props) => props.theme.borderColor};  */
`;

const ModalView = styled.div`
  width: 90%;
  height: 35%;
  background-color: ${(props) => props.theme.whiteColor};
  border-radius: 4px;
`;

const ModalViewBody = styled.div`
  width: 100%;
  height: 60%;
`;

const ModalViewBodyTable = styled.div`
  width: 100%;
  height: 33%;
  display: flex;
`;

const ModalViewBodyTableLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
  width: 30%;
  height: 100%;
  font-size: 12px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};
`;

const ModalViewBodyTableRightInput = styled.input`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  width: 70%;
  height: 100%;
  font-size: 12px;
  border-bottom: 1px solid ${(props) => props.theme.grayColor};
`;

const ModalViewBodyTableButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
  width: 30%;
  height: 70%;
  font-size: 12px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};
`;

const ModalViewFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0px 20px;
  width: 100%;
  height: 40%;
`;

const ModalViewFooterButtonLeft = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15% 0px;
  width: 23%;
  height: 50%;
  font-size: 12px;
  border: 1px solid ${(props) => props.theme.grayColor};
  border-radius: 5px;
  background-color: ${(props) => props.theme.whiteColor};
  color: ${(props) => props.theme.primaryColor};
`;

const ModalViewFooterButtonRight = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  width: 23%;
  height: 50%;
  font-size: 12px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};
`;

//MyPageReview
const ReviewListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  margin-bottom: 8px;
  width: 100%;
  max-width: 100%;
  height: 185px;
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

const ProductImg2 = styled.img`
  width: 100%;
  height: 100%;
`;
const MyPageReviewImage = styled.div`
  width: 40%;
  height: 100%;
  max-width: 100%;
`;

const MyPageReviewContent = styled.div`
  padding: 10px;
  width: 70%;
  height: 100%;
`;

const MyPageReviewContentTop = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70%;
  font-size: 8px;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    font-size: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    font-size: 4px;
  }
`;

const MyPageReviewContent2 = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 30%;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    font-size: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    font-size: 4px;
  }
`;

const MyPageReviewContentText = styled.div`
  font-size: 8px;
  margin-right: 8px;
`;

const MyPageReviewDelete = styled.div`
  width: 10%;
  height: 100%;
`;

const CancleImgContainer3 = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;

  svg {
    fill: ${(props) => props.theme.grayColor};
  }
`;

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.desktop} {
    flex-direction: row;
    column-gap: 24px;
  }
`;

const MyPageNavbar = styled.nav`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 12px;
`;

const MyPageContent = styled.div`
  width: 100%;
  flex-grow: 1;
`;

export {
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
  SubTitle,
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
  MyQuestionButton,
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
  ModalViewFooterButtonRight,
  ReviewListContainer,
  ProductImg2,
  MyPageReviewImage,
  MyPageReviewContent,
  MyPageReviewContentTop,
  MyPageReviewContent2,
  MyPageReviewContentText,
  MyPageReviewDelete,
  CancleImgContainer3
};
