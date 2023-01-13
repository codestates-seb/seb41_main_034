import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 72px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.whiteColor};
  z-index: 96;

  @media ${(props) => props.theme.mobile} {
    display: flex;
    height: 128px;
  }
`;

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1024px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 64px;

  @media ${(props) => props.theme.mobile} {
    align-items: flex-start;
    padding: 24px 32px;
  }
`;

export const HeaderLeft = styled.div`
  margin-right: 16px;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const Logo = styled.h1`
  position: relative;

  svg {
    width: 64px;
    height: 64px;
  }

  @media ${(props) => props.theme.mobile} {
    top: -14px;
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 398px;
  margin-right: 16px;

  @media ${(props) => props.theme.mobile} {
    position: absolute;
    top: 73px;
    left: 0;
    z-index: 998;
    padding: 0 32px;
  }
`;

export const SearchInput = styled.input`
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
`;

export const SearchLabel = styled.label`
  position: absolute;
  top: 10px;
  right: 8px;

  svg {
    width: 16px;
    height: 16px;
    fill: ${(props) => props.theme.grayColor};
  }

  @media ${(props) => props.theme.mobile} {
    right: 42px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SignLink = styled(Link)`
  font-size: 14px;
  margin-right: 8px;

  &:hover {
    color: ${(props) => props.theme.hoverColor};
  }

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

export const LogoutButton = styled.button`
  font-size: 14px;
  margin-right: 8px;

  &:hover {
    color: ${(props) => props.theme.hoverColor};
  }

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

export const CartButton = styled.button`
  margin-right: 8px;

  svg {
    &:hover {
      g {
        g {
          stroke: ${(props) => props.theme.hoverColor};
        }
      }
    }
  }
`;

export const MyPageLink = styled(Link)`
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

export const MobileMenu = styled.button`
  svg {
    width: 22px;
    height: 22px;
  }

  &:hover {
    svg {
      fill: ${(props) => props.theme.hoverColor};
    }
  }

  @media ${(props) => props.theme.tablet} {
    display: none;
  }
  @media ${(props) => props.theme.desktop} {
    display: none;
  }
`;

export const MobileFlex = styled.div`
  display: flex;
  width: 100%;
  @media ${(props) => props.theme.mobile} {
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;

export const MobileContainer = styled.div`
  display: none;
  @media ${(props) => props.theme.tablet} {
    display: none;
  }
  @media ${(props) => props.theme.mobile} {
    width: 80%;
    height: 31px;
    display: flex;
    align-items: center;
    border: 1px solid black;
  }
`;

export const MobileInput = styled.input`
  display: none;
  @media ${(props) => props.theme.tablet} {
    display: none;
  }
  @media ${(props) => props.theme.mobile} {
    display: block;
    width: 90%;
    height: 29px;
    border: none;
  }
`;

export const MobileSearchImg = styled.img`
  display: none;
  @media ${(props) => props.theme.tablet} {
    display: none;
  }
  @media ${(props) => props.theme.mobile} {
    display: block;
    width: 10px;
    height: 10px;
  }
`;
