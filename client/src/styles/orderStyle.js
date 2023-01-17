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
`;

const ProductName = styled.h3`
  margin-bottom: 4px;

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
  margin-bottom: 4px;
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

const DeleteButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

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
    top: 8px;
    right: 8px;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  @media ${(props) => props.theme.mobile} {
    top: 4px;
    right: 8px;

    svg {
      width: 12px;
      height: 12px;
    }
  }
`;

const OrderContainer = styled.div`
  margin-top: 120px;
`;

const OrderSummaryComponent = styled.div`
  position: sticky;
  top: 120px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  margin: 40px 0px;
`;

const OrderContentTop = styled.div`
  margin: auto;
  display: table;
  font-size: 15px;
  border-bottom: 1px #dee2e6 solid;
`;

const OrderContentTopContainer = styled.div`
  width: 100%;
  display: table-cell;
  vertical-align: middle;
`;

const OrderContentTopDetail = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const OrderContentTopDetailItem = styled.div`
  font-size: 15px;
`;

const OrderContentBottom = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
`;

const OrderContentTotalPrice = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const OrderButton = styled.button`
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 10px;
  font-size: 20px;
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
  ProductName,
  ProductPrice,
  ProductCount,
  CountButton,
  Count,
  DeleteButton,
  OrderContainer,
  OrderSummaryComponent,
  OrderContentTop,
  OrderContentTopContainer,
  OrderContentTopDetail,
  OrderContentTopDetailItem,
  OrderContentBottom,
  OrderContentTotalPrice,
  OrderButton
};
