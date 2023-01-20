import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.whiteColor};
  z-index: 96;

  @media ${(props) => props.theme.mobile} {
    display: flex;
    height: 120px;
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
  padding: 0 64px;

  @media ${(props) => props.theme.tablet} {
    padding: 0 32px;
  }

  @media ${(props) => props.theme.mobile} {
    align-items: flex-start;
    padding: 24px 16px 0 16px;
  }
`;

const HeaderLeft = styled.div`
  margin-right: 64px;

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
    border: 1px solid ${(props) => props.theme.primaryColor};

    & + label {
      svg {
        fill: ${(props) => props.theme.primaryColor};
      }
    }
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

  @media ${(props) => props.theme.mobile} {
    right: 32px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
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

const MobileMenuButton = styled.button`
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

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.borderColor};
`;

const FooterContainer = styled.dl`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  max-width: 1200px;
  height: 240px;
  padding: 0 0 64px 64px;

  @media ${(props) => props.theme.tablet} {
    padding-left: 32px;
  }

  @media ${(props) => props.theme.mobile} {
    padding-left: 16px;
  }
`;

const Info = styled.div``;

const InfoName = styled.dt`
  font-size: 18px;
  margin-bottom: 8px;

  @media ${(props) => props.theme.tablet} {
    font-size: 16px;
    margin-bottom: 4px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 14px;
    margin-bottom: 4px;
  }
`;

const InfoNumber = styled.dd`
  margin-bottom: 16px;

  @media ${(props) => props.theme.tablet} {
    margin-bottom: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    margin-bottom: 8px;
  }

  a {
    font-size: 24px;

    @media ${(props) => props.theme.tablet} {
      font-size: 22px;
    }

    @media ${(props) => props.theme.mobile} {
      font-size: 20px;
    }
  }
`;

const InfoTime = styled.dd`
  font-size: 16px;
  margin-bottom: 16px;

  @media ${(props) => props.theme.tablet} {
    font-size: 14px;
    margin-bottom: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
    margin-bottom: 8px;
  }
`;

const EtcContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 8px;

  @media ${(props) => props.theme.tablet} {
    gap: 4px;
    margin-bottom: 4px;
  }

  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    gap: 4px;
    margin-bottom: 4px;
  }
`;

const Etc = styled.div`
  display: flex;
`;

const EtcDt = styled.dt`
  margin-right: 4px;
  font-size: 10px;
  color: ${(props) => props.theme.grayColor};
`;

const EtcDd = styled.dd`
  font-size: 10px;
  color: ${(props) => props.theme.grayColor};

  a {
    font-size: 10px;
    color: ${(props) => props.theme.grayColor};
  }
`;

const Copyright = styled.p`
  font-size: 10px;
  color: ${(props) => props.theme.grayColor};
`;

const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 120px;
`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 64px;

  @media ${(props) => props.theme.tablet} {
    padding: 32px;
  }

  @media ${(props) => props.theme.mobile} {
    padding: 16px;
  }
`;

export {
  MainWrapper,
  MainContainer,
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
  MobileMenuButton,
  FooterWrapper,
  FooterContainer,
  Info,
  InfoName,
  InfoNumber,
  InfoTime,
  EtcContainer,
  Etc,
  EtcDt,
  EtcDd,
  Copyright
};
