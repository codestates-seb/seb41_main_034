import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ButtonContainer,
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderWrapper,
  Logo,
  SearchContainer,
  SearchInput,
  SearchLabel,
  SignLink,
  CartButton,
  CartCount,
  MobileMenu,
  LogoutButton,
  MyPageLink
} from '../../styles/headerStyle';
import { ReactComponent as SearchIcon } from '../../assets/icons/searchIcon.svg';
import { ReactComponent as LogoIcon } from '../../assets/icons/foodmeet.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cartIcon.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menuIcon.svg';
import { ReactComponent as MyPageIcon } from '../../assets/icons/myPageIcon.svg';
import MobileMenuModal from './MobileMenuModal';
import Category from '../Category';

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const token = localStorage.getItem('jwt_token');

  useEffect(() => {
    setIsLogin(token ? true : false);
  }, [token]);

  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <HeaderLeft>
            <Logo>
              <Link to="/">
                <LogoIcon />
              </Link>
            </Logo>
          </HeaderLeft>

          <SearchContainer>
            <SearchInput
              type="text"
              id="search"
              aria-label="검색어를 입력하세요."
            />
            <SearchLabel htmlFor="search">
              <SearchIcon />
            </SearchLabel>
          </SearchContainer>

          <HeaderRight>
            <ButtonContainer>
              {isLogin ? (
                <>
                  <LogoutButton>로그아웃</LogoutButton>
                  <MyPageLink>
                    <MyPageIcon />
                  </MyPageLink>
                </>
              ) : (
                <>
                  <SignLink to="/login">로그인</SignLink>
                  <SignLink to="/signup">회원가입</SignLink>
                </>
              )}
              <CartButton type="button" aria-label="장바구니 보기">
                <CartIcon />
                <CartCount>2</CartCount>
              </CartButton>
            </ButtonContainer>
          </HeaderRight>

          <MobileMenu
            type="button"
            aria-label="메뉴 열기"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <MenuIcon />
          </MobileMenu>
        </HeaderContainer>
      </HeaderWrapper>

      <Category />

      <MobileMenuModal
        isLogin={isLogin}
        isOpenMenu={isOpenMenu}
        setIsOpenMenu={setIsOpenMenu}
      />
    </>
  );
};

export default Header;
