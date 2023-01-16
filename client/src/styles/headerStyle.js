import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 72px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.whiteColor};
  z-index: 96;

  @media ${(props) => props.theme.mobile} {
    display: flex;
    height: 128px;
  }
`;

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  padding: 0 32px;

  @media ${(props) => props.theme.tablet} {
    padding: 0 16px;
  }

  @media ${(props) => props.theme.mobile} {
    align-items: flex-start;
    padding: 24px 16px 0 16px;
  }
`;

const HeaderLeft = styled.div`
  margin-right: 16px;

  @media ${(props) => props.theme.mobile} {
    margin-right: 0;
    order: 2;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  @media ${(props) => props.theme.mobile} {
    order: 3;
  }
`;

const Logo = styled.h1`
  position: relative;

  svg {
    width: 64px;
    height: 64px;
  }

  @media ${(props) => props.theme.mobile} {
    top: -14px;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 544px;
  margin-right: 16px;

  @media ${(props) => props.theme.tablet} {
    margin-right: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    position: absolute;
    top: 73px;
    left: 0;
    margin-right: 0;
    padding: 0 16px;
    z-index: 998;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  padding: 8px;
  font-size: 16px;

  &:focus {
    border: 1px solid ${(props) => props.theme.activeColor};

    & + label {
      svg {
        fill: ${(props) => props.theme.activeColor};
      }
    }
  }

  @media ${(props) => props.theme.tablet} {
    border: none;
  }
`;

const SearchLabel = styled.label`
  position: absolute;
  top: 10px;
  right: 8px;

  svg {
    width: 16px;
    height: 16px;
    fill: ${(props) => props.theme.grayColor};
  }

  @media ${(props) => props.theme.tablet} {
    cursor: pointer;

    svg {
      fill: ${(props) => props.theme.blackColor};
    }
  }

  @media ${(props) => props.theme.mobile} {
    right: 32px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SignLink = styled(Link)`
  font-size: 14px;
  margin-right: 8px;
  flex-shrink: 0;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      color: ${(props) => props.theme.hoverColor};
    }
  }

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const LogoutButton = styled.button`
  font-size: 14px;
  margin-right: 8px;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      color: ${(props) => props.theme.hoverColor};
    }
  }

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const CartButton = styled.button`
  position: relative;
  margin-right: 8px;

  @media ${(props) => props.theme.desktop} {
    svg {
      &:hover {
        g {
          g {
            stroke: ${(props) => props.theme.hoverColor};
          }
        }
      }
    }
  }

  @media ${(props) => props.theme.mobile} {
    margin-right: 0;
  }
`;

const CartCount = styled.div`
  position: absolute;
  top: -2px;
  right: -2px;
  padding: 2px 4px;
  border: 1px solid ${(props) => props.theme.whiteColor};
  border-radius: 50px;
  font-size: 8px;
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.primaryColor};
`;

const MyPageLink = styled(Link)`
  margin-right: 8px;

  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    svg {
      fill: ${(props) => props.theme.hoverColor};
    }
  }

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const MobileMenu = styled.button`
  display: none;

  @media ${(props) => props.theme.mobile} {
    position: relative;
    top: 6px;
    display: block;
    order: 1;

    svg {
      width: 22px;
      height: 22px;
    }
  }
`;

const CatagoryWrapper = styled.div`
  position: fixed;
  top: 72px;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.whiteColor};
  z-index: 97;

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const CatagoryContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 32px;
  overflow-x: auto;

  @media ${(props) => props.theme.tablet} {
    padding: 0 16px;
  }
`;

const CatagoryButton = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 12px 0;

  &:not(:last-child) {
    margin-right: 24px;
  }

  @media ${(props) => props.theme.desktop} {
    &:hover {
      color: ${(props) => props.theme.hoverColor};
    }
  }

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }
`;

const MobileMenuWrapper = styled.div`
  display: none;

  @media ${(props) => props.theme.mobile} {
    display: ${(props) => (props.isOpenMenu ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 97;
  }
`;

const MobileMenuContainer = styled.div`
  display: none;

  @media ${(props) => props.theme.mobile} {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    width: 250px;
    height: 100vh;
    padding: 24px 16px 24px 16px;
    background-color: ${(props) => props.theme.whiteColor};
    overflow-y: auto;
    transition: transform 0.5s;
    transform: ${(props) =>
      props.isOpenMenu ? 'translateX(0)' : 'translateX(-270px)'};
    z-index: 98;
  }
`;

const MobileMenuHeader = styled.header`
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
`;

const MobileButtonContainer = styled.div`
  display: flex;
`;

const MobileLink = styled(Link)`
  font-size: 16px;

  &:first-child {
    margin-right: 12px;
  }
`;

const MobileCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MobileCategoryButton = styled(Link)`
  font-size: 14px;
  font-weight: 700;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const MobileMyImg = styled.img`
  width: 28px;
  height: 28px;
  margin: 0 20px 0 0;
`;

const MobileButton = styled.button`
  font-size: 20px;
`;

const MobileMyPageLink = styled(Link)`
  margin-right: 12px;

  svg {
    width: 32px;
    height: 32px;
  }

  &:hover {
    svg {
      fill: ${(props) => props.theme.hoverColor};
    }
  }
`;

export {
  HeaderWrapper,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  Logo,
  SearchContainer,
  SearchInput,
  SearchLabel,
  ButtonContainer,
  SignLink,
  LogoutButton,
  CartButton,
  CartCount,
  MyPageLink,
  MobileMenu,
  CatagoryWrapper,
  CatagoryContainer,
  CatagoryButton,
  MobileMenuWrapper,
  MobileMenuContainer,
  MobileMenuHeader,
  MobileButtonContainer,
  MobileLink,
  MobileCategoryContainer,
  MobileCategoryButton,
  MobileMyImg,
  MobileButton,
  MobileMyPageLink
};
