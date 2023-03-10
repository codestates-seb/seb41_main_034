import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.primaryColor};
`;

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 24px;

  svg {
    width: 1px;
    fill: ${(props) => props.theme.activeColor};
  }

  @media ${(props) => props.theme.desktop} {
    margin-right: 64px;
  }

  @media ${(props) => props.theme.tablet} {
    margin-right: 56px;
  }
`;

const LeftCotainer = styled.div`
  flex-grow: 1;
`;

const Text = styled.div`
  font-size: 12px;

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
`;

const ListHeader2 = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0 16px 12px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.blackColor};
`;

const RightContainer2 = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;

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
  flex-grow: 1;
`;

const ItemLinkText = styled.div`
  font-size: 14px;

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
`;

const ItemText = styled.button`
  display: block;
  font-size: 12px;
  margin-bottom: 4px;
  transition: color 0.3s;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      color: ${(props) => props.theme.hoverColor};
    }
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
`;

const ItemText2 = styled(ItemText)`
  margin-right: 12px;
`;

const EditDeleteButton = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 10px;
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.primaryColor};
  transition: background-color 0.5s;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
    padding: 4px;
  }
`;

const DeleteEditButton = styled(EditDeleteButton)`
  border: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.blackColor};
  background-color: ${(props) => props.theme.whiteColor};
  transition: color 0.3s, background-color 0.5s;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      color: ${(props) => props.theme.whiteColor};
      background-color: ${(props) => props.theme.hoverColor};
    }
  }
`;

const EditDeleteContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  column-gap: 4px;

  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    row-gap: 4px;
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

const ActiveCatagoryBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.primaryColor};
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
    font-size: 12px;
    border: 1px solid ${(props) => props.theme.borderColor};
    border-radius: 4px;

    svg {
      display: block;
      width: 10px;
      height: 10px;
      fill: ${(props) => props.theme.whiteColor};
    }
  }
`;

const CatagoryBox = styled(ActiveCatagoryBox)`
  color: ${(props) => props.theme.blackColor};
  background-color: ${(props) => props.theme.whiteColor};
  transition: background-color 0.3s, color 0.3s;

  @media ${(props) => props.theme.desktop} {
    svg {
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 300px;
  padding: 24px 0;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 12px;
`;

const WellcomText = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.primaryColor};

  @media ${(props) => props.theme.tablet} {
    font-size: 14px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const Name = styled.div`
  display: flex;
  align-items: flex-end;
`;

const NameText = styled.p`
  font-size: 24px;

  @media ${(props) => props.theme.tablet} {
    font-size: 20px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 16px;
  }
`;

const NameNext = styled.span`
  display: block;
  margin-left: 4px;
  font-size: 16px;
  color: ${(props) => props.theme.grayColor};

  @media ${(props) => props.theme.tablet} {
    font-size: 14px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const OtherText = styled.p`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 50px;
  font-size: 16px;
  color: ${(props) => props.theme.primaryColor};

  @media ${(props) => props.theme.mobile} {
    font-size: 14px;
  }
`;

const EditbuttonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const EditButton = styled(Link)`
  display: block;
  margin-right: 12px;
  padding: 8px 20px;
  font-size: 12px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};
  transition: background-color 0.3s;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
`;

const UserEditWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 12px;
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
  height: 12px;
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

const DisabledButton = styled.button`
  width: 98px;
  height: 34px;
  margin: 4px 0 0 4px;
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.grayColor};
  border-radius: 4px;
  font-size: 12px;

  @media ${(props) => props.theme.tablet} {
    width: 84px;
    height: 28px;
    font-size: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 64px;
    height: 24px;
    font-size: 8px;
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
    width: 84px;
    height: 28px;
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
    width: 84px;
    height: 28px;
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
  align-items: flex-end;
  padding: 12px 0;
  border-bottom: 1px solid ${(props) => props.theme.grayColor};
`;

const OrderDate = styled.div`
  flex-shrink: 0;
  margin-right: 24px;
  font-size: 20px;
  font-weight: 700;
  color: ${(props) => props.theme.grayColor};

  @media ${(props) => props.theme.mobile} {
    font-size: 16px;
  }
`;

const OrderListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 24px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};

  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const LeftContent = styled.div`
  width: 72px;
  height: 72px;
  margin-right: 48px;
  border-radius: 4px;
  overflow: hidden;

  a {
    display: block;
    width: 100%;
    height: 100%;
  }

  &:hover {
    img {
      @media ${(props) => props.theme.desktop} {
        transform: scale(1.1);
      }
    }
  }

  @media ${(props) => props.theme.mobile} {
    width: 64px;
    height: 64px;
  }
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.3s;
`;

const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  flex-grow: 1;
  font-size: 20px;
`;

const ShippingInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 8px;
  font-size: 16px;

  @media ${(props) => props.theme.tablet} {
    font-size: 14px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const TextWrapper = styled.div`
  flex-shrink: 0;
`;

const ProductName = styled.div`
  margin-bottom: 4px;
  font-size: 16px;
  transition: color 0.3s;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      color: ${(props) => props.theme.hoverColor};
    }
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
`;

const OrderListPrice = styled.div`
  margin-bottom: 4px;
  font-size: 16px;
  color: ${(props) => props.theme.grayColor};

  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
`;

const Receiver = styled.div`
  font-size: 12px;

  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
`;

const OrderQuantity = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.grayColor};

  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
`;

const ShippingAddress = styled.div`
  font-size: 12px;
  margin-right: 12px;
  font-weight: 700;

  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
`;

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  font-size: 20px;

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
  font-size: 20px;
  font-weight: bold;

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const MyAddressContainer = styled.div`
  width: 100%;
  max-width: 100%;
  max-height: 600px;
  display: grid;
  align-items: center;
`;

const Addressheader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 12px 0;
  border-bottom: 1px solid ${(props) => props.theme.grayColor};
  color: ${(props) => props.theme.primaryColor};
`;

const AddressInfo = styled.div`
  display: flex;
  justify-content: space-between;
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
  width: 100%;
  max-width: 100px;
  font-size: 14px;
  font-weight: 700;

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const AddressTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 360px;
  font-size: 14px;
  font-weight: 700;

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const RecipientTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 210px;
  font-size: 14px;
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

const GrayCheckIconContainer = styled.div`
  width: 100%;
  max-width: 100px;
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

const CheckIconContainer = styled.div`
  width: 100%;
  max-width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 16px;
    height: 16px;
    fill: ${(props) => props.theme.primaryColor};
  }

  @media ${(props) => props.theme.mobile} {
    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

const AddressText = styled.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;

  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
`;

const RecipientText = styled.div`
  width: 100%;
  max-width: 210px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;

  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
`;

const EditIconContainer = styled.div`
  width: 100%;
  max-width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.mobile} {
  }
`;

const EditButton2 = styled.button`
  padding: 6px 12px;
  font-size: 12px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};
  transition: background-color 0.5s;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }

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
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.primaryColor};
  transition: background-color 0.5s;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
`;

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
  max-width: 500px;
  background-color: ${(props) => props.theme.whiteColor};
  border-radius: 4px;
  z-index: 99;
  transition: transform 0.5s;
  transform: translate(-50%, -50%)
    ${(props) => (props.modal ? 'translateY(0)' : 'translateY(-200%)')};
`;

const ModalViewBody = styled.div`
  width: 100%;
  margin: 24px 0 24px 0;
`;

const EditModalViewBodyTable = styled.div`
  display: grid;
  width: 100%;
  margin-top: 12px;
`;

const ModalViewBodyTable = styled.div`
  display: flex;
  width: 100%;
  margin-top: 12px;
`;

const EmptyTableLeft = styled.div`
  width: 100%;
  max-width: 100px;
`;

const ModalViewBodyTableLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 12px;
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

const AddFlexContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 4px 0 0 0;
`;

const AdInputBox = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  margin: 0 20px 12px 2px;
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
  height: 28px;
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

const EditModalFooterButtonLeft = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0px;
  width: 110px;
  height: 33px;
  border-radius: 4px;
  font-size: 12px;
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.primaryColor};

  @media ${(props) => props.theme.mobile} {
    max-width: 100px;
    padding: 4px;
    font-size: 8px;
  }
`;

const ModalViewFooterButtonLeft = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 0 15px 12px;
  width: 130px;
  height: 33px;
  font-size: 12px;
  color: ${(props) => (props.isPrimaryCheck ? '#F03E3E' : 'black')};

  @media ${(props) => props.theme.mobile} {
    max-width: 100px;
    padding: 4px;
    font-size: 8px;
    margin: 15px 0 15px 12px;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 4px;
    fill: ${(props) => (props.isPrimaryCheck ? '#F03E3E' : 'black')};
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
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  background-color: ${(props) => props.theme.whiteColor};
  color: ${(props) => props.theme.primaryColor};

  @media ${(props) => props.theme.mobile} {
    max-width: 73px;
    padding: 4px;
    font-size: 8px;
  }
`;

const ReviewListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
`;
const ReviewButton = styled.button`
  padding: 8px 4px;
  font-size: 12px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};
  transition: background-color 0.5s;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
`;

const MyPageReviewImage = styled.div`
  width: 72px;
  height: 72px;
  margin-right: 24px;
  border-radius: 4px;
  overflow: hidden;

  button {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media ${(props) => props.theme.desktop} {
    &:hover {
      img {
        transform: scale(1.1);
      }
    }
  }

  @media ${(props) => props.theme.mobile} {
    width: 64px;
    height: 64px;
  }
`;

const ProductImg2 = styled.img`
  width: 100%;
  height: 100%;
  transition: transform 0.3s;
`;

const MyPageReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 16px;
  font-size: 20px;
`;

const MyPageReviewContentTopButton = styled.div`
  display: flex;
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
  margin: 0 4px 0 0;
  font-size: 12px;
  color: ${(props) => props.theme.grayColor};
`;

const MyPageReviewDelete = styled.div`
  display: flex;
  column-gap: 4px;

  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    row-gap: 4px;
  }
`;

const CancleImgContainer3 = styled.div`
  display: flex;
  width: 100%;
`;

const MyReviewDeleteButton = styled.button`
  padding: 6px 12px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  color: ${(props) => props.theme.primaryColor};
  font-size: 12px;
  transition: color 0.3s, background-color 0.5s;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      color: ${(props) => props.theme.whiteColor};
      background-color: ${(props) => props.theme.hoverColor};
    }
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
  }
`;

const MyReviewEditButton = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};
  font-size: 12px;
  transition: background-color 0.5s;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 10px;
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
  position: sticky;
  top: 120px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  row-gap: 12px;
  width: 100%;
  max-width: 928px;

  @media ${(props) => props.theme.desktop} {
    top: 180px;
    max-width: 240px;
  }
`;

const MyPageContent = styled.div`
  width: 100%;
  flex-grow: 1;
`;

const BottomTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const OtherTextContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;

const TheOtherText = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  width: 50px;
  font-size: 30px;

  @media ${(props) => props.theme.mobile} {
    font-size: 24px;
  }
`;

const UserModalContainer = styled.div`
  width: 100%;
  padding: 24px;
  border-bottom: 1px solid ${(props) => props.theme.grayColor};
`;

const EditTextContainer = styled.div`
  width: 100%;
  margin: 24px 0;
`;

const TopText = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.secondaryColor};

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const BottomText = styled.div`
  margin-top: 12px;
  font-size: 12px;
  color: ${(props) => props.theme.grayColor};

  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }
`;

const EditPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 24px;
`;

const PasswordInput = styled.input`
  width: 100%;
  height: 32px;
  max-width: 400px;
  margin-left: 64px;
  padding: 4px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.borderColor};

  @media ${(props) => props.theme.tablet} {
    max-width: 350px;
  }

  @media ${(props) => props.theme.mobile} {
    max-width: 300px;
    margin-left: 32px;
  }
`;

const EditButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const EditUserButton = styled.button`
  width: 100%;
  max-width: 200px;
  padding: 8px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};
`;

const BottomTextWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 64px;
  margin-top: 24px;
  padding: 64px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
`;

const ReviewRightContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;

const OrderContainer = styled.div`
  margin-top: 48px;
`;

export {
  OrderContainer,
  ItemText2,
  DeleteEditButton,
  ActiveCatagoryBox,
  BottomTextWrapper,
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
  AdInputBox,
  BottomTextContainer,
  OtherTextContainer,
  TheOtherText,
  EditDeleteButton,
  EditDeleteContainer,
  UserModalContainer,
  EditTextContainer,
  TopText,
  BottomText,
  EditPasswordContainer,
  PasswordInput,
  EditButtonContainer,
  EditUserButton,
  MyReviewEditButton,
  ReviewRightContainer,
  GrayCheckIconContainer,
  AddFlexContainer,
  EmptyTableLeft,
  EditModalFooterButtonLeft,
  EditModalViewBodyTable,
  ShippingInfo,
  Receiver,
  ShippingAddress,
  MyReviewDeleteButton,
  DisabledButton
};
