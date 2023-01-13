import {
  Button,
  ButtonContainer,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderWrapper,
  Logo,
  SearchContainer,
  SearchInput,
  Img,
  MobileListImg,
  MobileInput,
  MobileSearchImg,
  MobileContainer,
  MobileFlex
} from '../../styles/headerStyle';
import CartImg from './../../assets/icons/shoppingCart.svg';
import SearchImg from './../../assets/icons/search.svg';
import ListImage from './../../assets/icons/list.svg';
import LogoImg from './../../assets/icons/foodmeet.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MobileLogoutMenu from './MobileMenuCategory/Logout';
import {
  CatagoryButton,
  CatagoryContainer,
  CatagoryWrapper
} from '../../styles/catagoryStyle';

const Logout = () => {
  const [isMobile, setIsMobile] = useState(false);

  const MobileMenuOpen = () => {
    setIsMobile(true);
  };
  const MobileMenuClose = () => {
    setIsMobile(false);
  };
  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <HeaderLeft>
            <Link to="/">
              <Logo src={LogoImg} />
            </Link>
          </HeaderLeft>
          <HeaderRight>
            <SearchContainer>
              <SearchInput />
              <Img src={SearchImg} alt="검색" />
            </SearchContainer>
            <ButtonContainer>
              <Button>로그인</Button>
              <Button>회원가입</Button>
              <Img src={CartImg} alt="장바구니이미지" />
              <MobileListImg src={ListImage} onClick={MobileMenuOpen} />
            </ButtonContainer>
          </HeaderRight>
        </HeaderContainer>
      </HeaderWrapper>
      <MobileFlex>
        <MobileContainer>
          <MobileInput />
          <MobileSearchImg src={SearchImg} />
        </MobileContainer>
      </MobileFlex>
      <CatagoryWrapper>
        <CatagoryContainer>
          <CatagoryButton>카테고리</CatagoryButton>
          <CatagoryButton>카테고리</CatagoryButton>
          <CatagoryButton>카테고리</CatagoryButton>
          <CatagoryButton>카테고리</CatagoryButton>
        </CatagoryContainer>
      </CatagoryWrapper>
      {isMobile === true && (
        <MobileLogoutMenu MobileMenuClose={MobileMenuClose} />
      )}
    </>
  );
};

export default Logout;
