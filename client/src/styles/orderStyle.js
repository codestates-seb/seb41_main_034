import styled from 'styled-components';

const CartContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 240px;
  height: 600px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  transition: transform 0.5s;
  transform: translateY(-40%)
    ${(props) => (props.isOpenCart ? 'translateX(0)' : 'translateX(200%)')};
  overflow: hidden;
  z-index: 80;

  @media ${(props) => props.theme.tablet} {
    right: 12px;
    width: 220px;
    height: 560px;
  }

  @media ${(props) => props.theme.mobile} {
    right: 4px;
    width: 200px;
    height: 460px;
  }
`;

const CartHeader = styled.header`
  padding: 24px 48px;
  background-color: ${(props) => props.theme.primaryColor};
  text-align: center;

  h2 {
    font-size: 16px;
    color: ${(props) => props.theme.whiteColor};
  }

  @media ${(props) => props.theme.tablet} {
    padding: 24px 32px;

    h2 {
      font-size: 14px;
    }
  }

  @media ${(props) => props.theme.mobile} {
    padding: 12px 16px;

    h2 {
      font-size: 12px;
    }
  }
`;

const CartList = styled.ul`
  flex-grow: 1;
  background-color: ${(props) => props.theme.whiteColor};
  overflow-y: auto;
`;

const OrderAmount = styled.strong`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 16px;
  font-size: 16px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.whiteColor};

  @media ${(props) => props.theme.tablet} {
    padding: 16px 12px;
    font-size: 14px;
  }

  @media ${(props) => props.theme.mobile} {
    padding: 12px 8px;
    font-size: 12px;
  }
`;

const CartFooter = styled.footer`
  a {
    display: block;
    padding: 16px 48px;
    background-color: ${(props) => props.theme.primaryColor};
    font-size: 16px;
    text-align: center;
    color: ${(props) => props.theme.whiteColor};
    transition: background-color 0.5s;
  }

  @media ${(props) => props.theme.desktop} {
    &:hover {
      a {
        background-color: ${(props) => props.theme.hoverColor};
      }
    }
  }

  @media ${(props) => props.theme.tablet} {
    a {
      padding: 12px 32px;
      font-size: 14px;
    }
  }

  @media ${(props) => props.theme.mobile} {
    a {
      padding: 6px 16px;
      font-size: 12px;
    }
  }
`;

const CartItemContainer = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 24px 12px;
  row-gap: 8px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};

  @media ${(props) => props.theme.tablet} {
    padding: 16px 12px;
  }

  @media ${(props) => props.theme.mobile} {
    padding: 12px;
  }
`;

const CartItemImage = styled.div`
  width: 64px;
  height: 64px;
  margin-right: 12px;
  border-radius: 4px;
  overflow: hidden;

  a {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media ${(props) => props.theme.mobile} {
    width: 48px;
    height: 48px;
    margin-right: 8px;
  }
`;

const CartItemImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  transition: transform 0.3s;
`;

const ProductName = styled.h3`
  a {
    font-size: 10px;
    transition: color 0.3s;
  }

  @media ${(props) => props.theme.desktop} {
    a {
      font-size: 14px;
    }
  }

  @media ${(props) => props.theme.tablet} {
    a {
      font-size: 12px;
    }
  }
`;

const CartItemInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      ${CartItemImg} {
        transform: scale(1.1);
      }

      ${ProductName} {
        a {
          color: ${(props) => props.theme.hoverColor};
        }
      }
    }
  }
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 8px;
`;

const ProductPrice = styled.strong`
  display: block;
  font-size: 10px;
  font-weight: 700;

  @media ${(props) => props.theme.desktop} {
    font-size: 14px;
  }

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }
`;

const OrderPrice = styled.strong`
  font-size: 14px;
  font-weight: 700;

  @media ${(props) => props.theme.desktop} {
    font-size: 18px;
  }

  @media ${(props) => props.theme.tablet} {
    font-size: 16px;
  }
`;

const ProductCount = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
`;

const CountButton = styled.button`
  padding: 4px 8px;

  @media ${(props) => props.theme.mobile} {
    padding: 2px 4px;
  }
`;

const Count = styled.input`
  display: block;
  flex-grow: 1;
  font-size: 10px;
  font-weight: 700;
  text-align: center;

  @media ${(props) => props.theme.desktop} {
    font-size: 14px;
  }

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }
`;

const CartItemDelete = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;

  @media ${(props) => props.theme.tablet} {
    top: 8px;
    right: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    top: 4px;
    right: 8px;
  }
`;

const DeleteButton = styled.button`
  svg {
    width: 12px;
    height: 12px;
    fill: ${(props) => props.theme.grayColor};
  }

  @media ${(props) => props.theme.desktop} {
    &:hover {
      svg {
        fill: ${(props) => props.theme.hoverColor};
      }
    }
  }
`;

const OrderItemWrapper = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 24px;
  column-gap: 24px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

const OrderItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  row-gap: 12px;
`;

const OrderItemImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  transition: transform 0.3s;
`;

const OrderItemName = styled.h3`
  margin-left: 12px;

  a {
    font-size: 16px;
    transition: color 0.3s;

    @media ${(props) => props.theme.tablet} {
      font-size: 14px;
    }

    @media ${(props) => props.theme.mobile} {
      font-size: 12px;
    }
  }
`;

const OrderItemLeft = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      ${OrderItemImg} {
        transform: scale(1.1);
      }

      ${OrderItemName} {
        a {
          color: ${(props) => props.theme.hoverColor};
        }
      }
    }
  }
`;

const CheckBox = styled.div`
  display: flex;
  align-items: center;
`;

const CheckInput = styled.input`
  appearance: none;
  width: 24px;
  height: 24px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 100px;
  cursor: pointer;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-color: ${(props) => props.theme.primaryColor};
  }
`;

const CheckLabel = styled.label`
  margin-left: 8px;
  font-size: 16px;
  cursor: pointer;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      color: ${(props) => props.theme.hoverColor};
    }
  }

  @media ${(props) => props.theme.tablet} {
    font-size: 14px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const CheckDelete = styled.button`
  font-size: 16px;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      color: ${(props) => props.theme.hoverColor};
    }
  }

  @media ${(props) => props.theme.tablet} {
    font-size: 14px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const OrderItemImage = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 4px;
  overflow: hidden;

  @media ${(props) => props.theme.tablet} {
    width: 72px;
    height: 72px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 64px;
    height: 64px;
  }
`;

const OrderItemRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OrderContainer = styled.div`
  display: block;

  @media ${(props) => props.theme.desktop} {
    display: flex;
    width: 100%;
    gap: 20px;
  }
`;

const OrderListContianer = styled.div`
  width: 100%;
  flex-grow: 1;
`;

const OrderListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px;
`;

const OrderList = styled.ul`
  border-top: 1px solid ${(props) => props.theme.grayColor};
`;

const OrderPaymentWrapper = styled.div`
  width: 100%;
  max-width: 320px;

  @media ${(props) => props.theme.tablet} {
    max-width: 928px;
    margin-top: 20px;
  }

  @media ${(props) => props.theme.mobile} {
    max-width: 544px;
    margin-top: 20px;
  }
`;

const OrderPaymentContainer = styled.div`
  position: sticky;
  top: 168px;

  @media ${(props) => props.theme.mobile} {
    position: relative;
    top: 0;
  }
`;

const OrderReceipt = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 4px;

  @media ${(props) => props.theme.desktop} {
    border: 1px solid ${(props) => props.theme.borderColor};
  }
`;

const ReceiptContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const ShippingCotainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

const ShippingInfo = styled.strong`
  display: block;
  font-size: 12px;
  font-weight: 700;
`;

const PaymentContainer = styled(ReceiptContainer)`
  margin-top: 30px;
`;

const ReceiptAmount = styled.strong`
  display: block;
  font-size: 16px;

  @media ${(props) => props.theme.mobile} {
    font-size: 14px;
  }
`;

const ReceiptTitle = styled(ReceiptAmount)`
  font-weight: 700;
`;

const ReceiptPayment = styled.h3`
  font-size: 24px;
  font-weight: 700;

  @media ${(props) => props.theme.mobile} {
    font-size: 18px;
  }
`;

const OrderButtonContainer = styled.div`
  display: none;

  @media ${(props) => props.theme.desktop} {
    display: flex;
    align-items: center;
    gap: 8px;

    a {
      display: block;
      width: 100%;
    }
  }
`;

const ModalButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 4px;

  @media ${(props) => props.theme.desktop} {
    padding: 0;
  }
`;

const OrderDisabledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 4px;
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.grayColor};
  cursor: initial;
`;

const OrderButton = styled(OrderDisabledButton)`
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.primaryColor};
  transition: background-color 0.5s;
  cursor: pointer;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }

  @media ${(props) => props.theme.tablet} {
    font-size: 16px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 14px;
  }
`;

const CartButton = styled(OrderButton)`
  border: 1px solid ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.whiteColor};

  @media ${(props) => props.theme.desktop} {
    &:hover {
      color: ${(props) => props.theme.whiteColor};
      background-color: ${(props) => props.theme.hoverColor};
    }
  }
`;

const ProductOrderButton = styled.button`
  width: 100%;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    font-size: 18px;
    font-weight: 700;
    color: ${(props) => props.theme.whiteColor};
    background-color: ${(props) => props.theme.primaryColor};
    transition: background-color 0.5s;
    border-radius: 4px;

    @media ${(props) => props.theme.desktop} {
      &:hover {
        background-color: ${(props) => props.theme.hoverColor};
      }
    }

    @media ${(props) => props.theme.tablet} {
      font-size: 16px;
    }

    @media ${(props) => props.theme.mobile} {
      font-size: 14px;
    }
  }
`;

const MobileDisabledButton = styled.button`
  position: sticky;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 16px;
  font-weight: 700;
  border-radius: 4px;
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.grayColor};
  z-index: 70;
  cursor: initial;

  @media ${(props) => props.theme.desktop} {
    display: none;
  }
`;

const MobileOrderButton = styled(MobileDisabledButton)`
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.primaryColor};
  transition: background-color 0.5s;
  cursor: pointer;
`;

const OrderModalContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 200px;
  border-radius: 16px 16px 0 0;
  transition: transform 0.5s;
  transform: ${(props) =>
    props.isOpenOrder ? 'trnaslateY(0)' : 'translateY(200px)'};
  background-color: ${(props) => props.theme.whiteColor};
  z-index: 90;

  @media ${(props) => props.theme.desktop} {
    display: none;
  }
`;

export {
  MobileDisabledButton,
  OrderDisabledButton,
  ShippingCotainer,
  ShippingInfo,
  ModalButtonContainer,
  OrderModalContainer,
  OrderItemWrapper,
  OrderPrice,
  CartContainer,
  CartHeader,
  CartList,
  OrderAmount,
  CartFooter,
  CartItemContainer,
  CartItemImage,
  CartItemImg,
  CartItemInfo,
  CartItemDelete,
  PriceContainer,
  ProductName,
  ProductPrice,
  ProductCount,
  CountButton,
  Count,
  DeleteButton,
  OrderItemContainer,
  OrderItemLeft,
  OrderItemRight,
  CheckBox,
  CheckInput,
  CheckLabel,
  CheckDelete,
  OrderItemImage,
  OrderItemImg,
  OrderItemName,
  OrderContainer,
  OrderList,
  OrderListContianer,
  OrderListHeader,
  OrderPaymentWrapper,
  OrderPaymentContainer,
  OrderReceipt,
  ReceiptContainer,
  PaymentContainer,
  ReceiptTitle,
  ReceiptAmount,
  ReceiptPayment,
  OrderButtonContainer,
  OrderButton,
  CartButton,
  MobileOrderButton,
  ProductOrderButton
};
