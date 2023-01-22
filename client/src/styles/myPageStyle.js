import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListHeader = styled.div`
  display: flex;
  width: 100%;
  max-width: 702px;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
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
  display: grid;
  width: 100%;
  max-width: 1024px;

  @media ${(props) => props.theme.mobile} {
    display: flex;
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

const UserWrapper = styled.div`
  width: 100%;
  max-width: 160px;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    max-width: 140px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    max-width: 100%;
  }
`;

const UserInfoContainer = styled.div`
  display: grid;
  width: 100%;
  border: 1px solid ${(props) => props.theme.borderColor};

  @media ${(props) => props.theme.mobile} {
    display: flex;
    border: none;
    padding: 0 30px 0 30px;
  }
`;

const InfoContainer = styled.div`
  width: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  width: 100%;
`;

const WellcomText = styled.div`
  margin: 12px 12px 12px 8px;
  font-size: 14px;
  color: ${(props) => props.theme.primaryColor};

  @media ${(props) => props.theme.tablet} {
    margin: 12px 0 12px 8px;
    font-size: 12px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const NameText = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 12px 12px 8px;
  font-size: 14px;

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
    margin: 12px 0 12px 8px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const OtherText = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 0 8px 8px;
  font-size: 8px;

  @media ${(props) => props.theme.tablet} {
    padding: 4px 0 4px 8px;
    font-size: 4px;
    zoom: 0.9;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }
`;

const EditbuttonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    padding-top: 60px;
  }
`;

const EditButton = styled.button`
  width: 100%;
  max-width: 122px;
  margin: 12px 0 12px 0;
  padding: 4px 0 4px 0;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};
  font-size: 8px;

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
  width: 100%;
  max-width: 137px;
  padding: 14px 0 14px 0;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: ${(props) => props.theme.primaryColor};

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

const OrderDate = styled.div`
  display: flex;
  margin-top: 28px;
  margin-bottom: 12px;
`;
const OrderListContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  height: 185px;
  padding: 24px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  margin-bottom: 28px;
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
  margin-right: 12px;

  @media ${(props) => props.theme.tablet} {
    width: 72px;
    height: 72px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 48px;
    height: 48px;
  }
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
`;

const CenterContent = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 8px;
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
  font-weight: bold;
`;

const OrderListPrice = styled.div``;

const OrderQuantity = styled.div``;

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

const OrderStatus = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const MyQuestionButton = styled.button`
  max-width: 100px;
  font-size: 12px;
  border: 1px solid ${(props) => props.theme.primaryColor};
  border-radius: 4px;
`;

const MyReviewContainer = styled.div`
  width: 100%;
  max-width: 700%;
  display: center;
  border: 1px solid ${(props) => props.theme.blackColor};
  border-radius: 10px;
`;

const ContentLeft = styled.div``;

const ContentRight = styled.div``;

const ReviewProductImage = styled.div``;

const ReviewProductImg = styled.div`
  width: 135px;
  height: 135px;
`;
const ReviewTitle = styled.div`
  font-size: 24px;
`;

const ReviewProductInfo = styled.div`
  font-size: 16px;
`;

const CreationDate = styled.div``;

const ProductName2 = styled.div``;

const MyAddressContainer = styled.div`
  width: 100%;
  max-width: 700px;
  display: grid;
  align-items: center;
  justify-content: space-between;
`;

const AddressTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 99px;

  border: 1px solid ${(props) => props.theme.blackColor};
  border-radius: 10px;
  background-color: ${(props) => props.theme.primaryColor};
`;

const AddressInfo = styled.div`
  width: 100%;
  height: 99px;
  display: flex;
  align-items: center;

  border: 1px solid ${(props) => props.theme.blackColor};
  border-radius: 10px;
`;

const Select = styled.div`
  font-size: 20px;
`;

const Address = styled.div`
  font-size: 20px;
`;

const Recipient = styled.div`
  font-size: 20px;
`;

const SelectText = styled.div`
  font-size: 20px;
`;

const SelectImg = styled.svg``;

const AddressText = styled.div`
  font-size: 16px;
`;

const RecipientText = styled.div`
  font-size: 16px;
`;

const PhoneNumber = styled.div`
  font-size: 20px;
`;

const PhoneNumberText = styled.div`
  font-size: 16px;
`;

const Modify = styled.div`
  font-size: 20px;
`;

const ModifyImg = styled.svg``;

const AddressButton = styled.button`
  display: flex;
  justify-content: end;
  font-size: 16px;
  border: 1px solid;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primaryColor};
`;

export {
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
  UserWrapper,
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
  OrderDate,
  OrderListContainer,
  LeftContent,
  CenterContent,
  RightContent,
  ProductName,
  OrderListPrice,
  OrderQuantity,
  OrderStatus,
  ProductImg,
  MyQuestionButton,
  MyReviewContainer,
  ContentLeft,
  ReviewProductImage,
  ReviewProductImg,
  ContentRight,
  ReviewTitle,
  ReviewProductInfo,
  CreationDate,
  ProductName2,
  MyAddressContainer,
  AddressTitle,
  AddressInfo,
  Select,
  Address,
  Recipient,
  SelectText,
  SelectImg,
  AddressText,
  RecipientText,
  PhoneNumber,
  PhoneNumberText,
  Modify,
  ModifyImg,
  AddressButton
};
