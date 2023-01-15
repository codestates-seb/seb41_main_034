import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CatagoryWrapper = styled.div`
  position: fixed;
  top: 72px;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
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
  max-width: 1024px;
  padding: 0 64px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  overflow-x: auto;
`;

const CatagoryButton = styled.button`
  font-size: 14px;
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
    width: 270px;
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

const MobileCategoryButton = styled.button`
  font-size: 14px;

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
