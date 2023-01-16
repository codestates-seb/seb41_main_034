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

const CartContent = styled.div`
  flex-grow: 1;
  background-color: ${(props) => props.theme.whiteColor};
  overflow-y: auto;
`;

const CartFooter = styled.footer`
  a {
    display: block;
    padding: 12px 48px;
    background-color: ${(props) => props.theme.primaryColor};
    font-size: 16px;
    text-align: center;
    color: ${(props) => props.theme.whiteColor};
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

const CartItemContainer = styled.article`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 16px;

  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.borderColor};
  }
`;

const CartItemImage = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 4px;
  overflow: hidden;

  a {
    display: block;
    width: 100%;
    height: 100%;
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
      font-size: 12px;
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
    font-size: 12px;
  }
`;

const ProductCount = styled.div`
  display: flex;
  width: 100%;
  max-width: 80px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
`;

const CountButton = styled.button`
  padding: 4px 8px;
`;

const Count = styled.input`
  display: block;
  width: 100%;
  max-width: 32px;
  font-size: 16px;
  text-align: center;
  -webkit-appearance: none;
  margin: 0;

  @media ${(props) => props.theme.tablet} {
    font-size: 14px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
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
`;

export {
  CartContainer,
  CartHeader,
  CartContent,
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
  DeleteButton
};
