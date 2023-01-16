import styled from 'styled-components';

const CartContainer = styled.div`
  position: fixed;
  top: 50%;
  right: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 180px;
  height: 480px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  transition: transform 0.5s;
  transform: translateY(-50%)
    ${(props) => (props.isOpenCart ? 'translateX(0)' : 'translateX(200%)')};
  overflow: hidden;
  z-index: 97;

  @media ${(props) => props.theme.tablet} {
    right: 12px;
    width: 140px;
    height: 400px;
  }

  @media ${(props) => props.theme.mobile} {
    right: 4px;
    width: 100px;
    height: 300px;
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
`;

const CartFooter = styled.footer`
  padding: 12px 48px;
  background-color: ${(props) => props.theme.primaryColor};
  text-align: center;

  a {
    font-size: 16px;
    color: ${(props) => props.theme.whiteColor};
  }

  @media ${(props) => props.theme.tablet} {
    padding: 12px 32px;

    a {
      font-size: 14px;
    }
  }

  @media ${(props) => props.theme.mobile} {
    padding: 6px 16px;

    a {
      font-size: 12px;
    }
  }
`;

export { CartContainer, CartHeader, CartContent, CartFooter };
