import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  width: 100%;
  display: grid;
  height: 70px;
  justify-items: center;

  @media ${(props) => props.theme.tablet} {
    border-bottom: 1px solid ${(props) => props.theme.grayColor};
  }

  @media ${(props) => props.theme.mobile} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderContainer = styled.header`
  width: 100%;
  height: 70px;
  max-width: 1024px;
  border-bottom: 1px solid ${(props) => props.theme.grayColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 64px;
  position: relative;

  @media ${(props) => props.theme.mobile} {
    border-style: none;
  }
`;

export const HeaderLeft = styled.div``;

export const HeaderRight = styled.div`
  display: flex;
`;

export const Logo = styled.img`
  width: 100px;
  height: 28px;
  margin-right: 50px;
  //tablet
  @media ${(props) => props.theme.tablet} {
    width: 80px;
    height: 28px;
    margin-right: 20px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 80px;
    height: 30px;
    margin-right: 0px;
  }
`;

export const SearchContainer = styled.div`
  position: relative;

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 398px;
  border: 1px solid ${(props) => props.theme.blackColor};
  border-radius: 4px;
  padding: 8px;

  @media ${(props) => props.theme.tablet} {
  }
`;
export const ButtonContainer = styled.div`
  width: 30%;
  height: 50px;
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.tablet} {
    width: 30%;
    height: 40px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 90%;
    height: 15px;
    justify-content: end;
    align-items: center;
  }
`;

export const Button = styled.button`
  width: 68px;
  height: 21px;
  font-size: 18px;
  margin-right: 8px;
  &:hover {
    color: ${(props) => props.theme.hoverColor};
  }
  @media ${(props) => props.theme.tablet} {
    width: 120px;
    height: 30px;
    font-size: 13px;
  }
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

export const Img = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
`;
export const UserImg = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 8px 0 8px;
  @media ${(props) => props.theme.tablet} {
    width: 24px;
    height: 24px;
  }
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

export const MobileListImg = styled.img`
  display: none;
  @media ${(props) => props.theme.tablet} {
    display: none;
  }
  @media ${(props) => props.theme.mobile} {
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-left: 4px;
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

export const LinkContainer = styled(Link)`
  display: flex;
  align-items: center;
`;
