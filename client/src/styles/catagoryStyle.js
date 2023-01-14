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
`;

const CatagoryButton = styled.button`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 0;

  &:not(:last-child) {
    margin-right: 24px;
  }

  &:hover {
    color: ${(props) => props.theme.hoverColor};
  }

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }
`;

const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 90px 0 0 64px;
  background-color: ${(props) => props.theme.whiteColor};
  z-index: 97;

  @media ${(props) => props.theme.tablet} {
    display: none;
  }

  @media ${(props) => props.theme.desktop} {
    display: none;
  }
`;

const MobileMenuCancle = styled.button`
  position: absolute;
  top: 24px;
  right: 32px;
  z-index: 99;

  svg {
    fill: ${(props) => props.theme.blackColor};
    width: 24px;
    height: 24px;
  }

  &:hover {
    svg {
      fill: ${(props) => props.theme.hoverColor};
    }
  }
`;

const MobileButtonContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const MobileLink = styled(Link)`
  font-size: 20px;

  &:first-child {
    margin-right: 12px;
  }

  &:hover {
    color: ${(props) => props.theme.hoverColor};
  }
`;

const MobileCategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MobileCategoryButton = styled.button`
  font-size: 18px;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  &:hover {
    color: ${(props) => props.theme.hoverColor};
  }
`;

const MobileMyImg = styled.img`
  width: 28px;
  height: 28px;
  margin: 0 20px 0 0;
`;

const MobileButton = styled.button`
  font-size: 20px;

  &:hover {
    color: ${(props) => props.theme.hoverColor};
  }
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
  MobileMenuCancle,
  MobileButtonContainer,
  MobileLink,
  MobileCategoryContainer,
  MobileCategoryButton,
  MobileMyImg,
  MobileButton,
  MobileMyPageLink
};
