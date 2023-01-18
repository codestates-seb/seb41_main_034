import styled from 'styled-components';

const CartContainer = styled.div`
  position: fixed;
  top: 160px;
  right: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 240px;
  height: 600px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  transition: transform 0.5s;
  transform: ${(props) =>
    props.isOpenCart ? 'translateX(0)' : 'translateX(200%)'};
  overflow: hidden;
  z-index: 97;

  @media ${(props) => props.theme.tablet} {
    right: 12px;
    width: 200px;
    height: 560px;
  }

  @media ${(props) => props.theme.mobile} {
    right: 4px;
    width: 150px;
    height: 380px;
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
  padding: 16px;

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
  }

  @media ${(props) => props.theme.tablet} {
    padding: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    padding: 4px;
  }
`;

const CartItemImage = styled.div`
  width: 90px;
  height: 90px;
  margin-right: 12px;
  border-radius: 4px;
  overflow: hidden;

  a {
    display: block;
    width: 100%;
    height: 100%;
  }

  @media ${(props) => props.theme.tablet} {
    width: 76px;
    height: 76px;
    margin-right: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 56px;
    height: 56px;
    margin-right: 4px;
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

  @media ${(props) => props.theme.desktop} {
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 40%;
  row-gap: 4px;
`;

const ProductName = styled.h3`
  a {
    font-size: 16px;
    font-weight: 700;
  }

  @media ${(props) => props.theme.desktop} {
    a {
      &:hover {
        color: ${(props) => props.theme.hoverColor};
      }
    }
  }

  @media ${(props) => props.theme.tablet} {
    a {
      font-size: 14px;
    }
  }

  @media ${(props) => props.theme.mobile} {
    a {
      font-size: 8px;
    }
  }
`;

const ProductPrice = styled.strong`
  display: block;
  flex-shrink: 0;
  font-size: 16px;
  font-weight: 700;

  @media ${(props) => props.theme.tablet} {
    font-size: 14px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }
`;

const ProductCount = styled.div`
  display: flex;
  width: 100%;
  max-width: 76px;
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
  width: 100%;
  max-width: 32px;
  font-size: 16px;
  text-align: center;

  @media ${(props) => props.theme.tablet} {
    font-size: 14px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }
`;

const CartItemDelete = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

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
    fill: ${(props) => props.theme.blackColor};
  }

  @media ${(props) => props.theme.desktop} {
    &:hover {
      svg {
        fill: ${(props) => props.theme.hoverColor};
      }
    }
  }

  @media ${(props) => props.theme.tablet} {
    svg {
      width: 16px;
      height: 16px;
    }
  }

  @media ${(props) => props.theme.mobile} {
    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

const OrderItemContainer = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 12px;

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
  }
`;

const OrderItemLeft = styled.div`
  display: flex;
  align-items: center;
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
`;

const CheckDelete = styled.button`
  font-size: 16px;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      color: ${(props) => props.theme.hoverColor};
    }
  }
`;

const OrderItemImage = styled.div`
  width: 96px;
  height: 96px;
  margin-left: 24px;
  border-radius: 4px;
  overflow: hidden;
`;

const OrderItemImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  transition: transform 0.3s;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const OrderItemName = styled.h3`
  margin-left: 12px;

  a {
    font-size: 16px;
    font-weight: 700;
    transition: color 0.3s;

    @media ${(props) => props.theme.desktop} {
      &:hover {
        color: ${(props) => props.theme.hoverColor};
      }
    }
  }
`;

const OrderItemRight = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const OrderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 60px 0;
  gap: 20px;
`;

const OrderListContianer = styled.div`
  width: 100%;
  flex-grow: 1;
`;

const OrderListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px;
`;

const OrderList = styled.ul`
  border-top: 1px solid ${(props) => props.theme.blackColor};
  border-bottom: 1px solid ${(props) => props.theme.blackColor};
`;

export {
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
  OrderListHeader
};
