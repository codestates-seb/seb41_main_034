import { Link } from 'react-router-dom';
import styled from 'styled-components';
//MyQuestionList
const ListHeader = styled.div`
  display: flex;
  width: 100%;
  max-width: 702px;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => props.theme.blackColor};
  border-radius: 4px;
  background-color: ${(props) => props.theme.activeColor};
  color: ${(props) => props.theme.whiteColor};

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    max-width: 399px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`;

const LeftCotainer = styled.div`
  flex-grow: 1.5;
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
//MyQuestion
const ListHeader2 = styled.div`
  display: flex;
  width: 702px;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => props.theme.blackColor};
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
  justify-content: space-between;
  flex-grow: 1;
`;

const LeftCotainer2 = styled.div`
  flex-grow: 1.3;
`;

const Text2 = styled.div`
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

const NavWrapper = styled.div`
  display: grid;
  width: 100%;
  margin-top: 64px;
  justify-items: center;

  @media ${(props) => props.theme.mobile} {
    padding: 0;
  }
`;

const NavContainer = styled.div`
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
  font-size: 10px;
  background-color: ${(props) => props.theme.secondaryColor};

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
    width: 120px;
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
    justify-content: center;
    align-items: center;
    font-size: 4px;

    svg {
      display: none;
    }
  }
`;

const TopContainer = styled.div`
  display: grid;
  width: 100%;
`;

const BottomContainer = styled.div`
  display: grid;
  width: 100%;
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

//주문목록
const OrderListContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 185px;
  display: flex;
  border: 1px solid ${(props) => props.theme.blackColor};
  border-radius: 10px;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    max-width: 399px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const LeftContent = styled.div`
  width: 100%;
  max-width: 200px;
  @media ${(props) => props.theme.tablet} {
    max-width: 399px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
  /* background-color: blue; */
`;

const ProductImg = styled.img`
  width: 135px;
  height: 135px;
  margin: 24px 30px 0 30px;
`;

const CenterContent = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    max-width: 399px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
  background-color: aqua;
`;

const OrderStatus = styled.div``;

const RightContent = styled.div`
  width: 100%;
  max-width: 200px;
  font-size: 16px;
  @media ${(props) => props.theme.tablet} {
    width: 100%;
    max-width: 399px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
  background-color: violet;
`;

const ProductName = styled.div``;

const OrderListPrice = styled.div``;

const OrderQuantity = styled.div``;

//Review
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

//MyAddress
const MyAddressContainer = styled.div`
  width: 100%;
  max-width: 700px;

  align-items: start;
  justify-content: space-between;
`;

const AddressTitle = styled.div`
  width: 100%;
  height: 99px;
  display: flex;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.blackColor};
  border-radius: 10px;
  background-color: ${(props) => props.theme.primaryColor};
`;
const AddressInfo = styled.div`
  width: 100%;
  height: 99px;
  display: flex;
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
  Text2,
  MarginSpace,
  NavWrapper,
  NavContainer,
  CatagoryBox,
  TopContainer,
  BottomContainer,
  Container,
  Title,
  SubTitle,
  OrderListContainer,
  LeftContent,
  CenterContent,
  RightContent,
  ProductName,
  OrderListPrice,
  OrderQuantity,
  OrderStatus,
  ProductImg,
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
