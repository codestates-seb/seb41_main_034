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
  MobileMenuButton,
  LogoutButton,
  MyPageLink
} from '../../styles/headerStyle';
import { ReactComponent as SearchIcon } from '../../assets/icons/searchIcon.svg';
import { ReactComponent as LogoIcon } from '../../assets/icons/foodmeet.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cartIcon.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menuIcon.svg';
import { ReactComponent as MyPageIcon } from '../../assets/icons/myPageIcon.svg';
import Menu from '../Menu/Menu';
import MobileMenu from '../Menu/MobileMenu';
import ShoppingCart from '../Order/ShoppingCart';

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

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
              <Link to={'/'}>
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
                  <MyPageLink to={'/mypage'}>
                    <MyPageIcon />
                  </MyPageLink>
                </>
              ) : (
                <>
                  <SignLink to="/login">로그인</SignLink>
                  <SignLink to="/signup">회원가입</SignLink>
                </>
              )}
              <CartButton
                type="button"
                aria-label="장바구니 보기"
                onClick={() => setIsOpenCart(!isOpenCart)}
              >
                <CartIcon />
                <CartCount>2</CartCount>
              </CartButton>
            </ButtonContainer>
          </HeaderRight>

          <MobileMenuButton
            type="button"
            aria-label="메뉴 열기"
            onClick={() => setIsOpenMenu(!isOpenMenu)}
          >
            <MenuIcon />
          </MobileMenuButton>
        </HeaderContainer>
      </HeaderWrapper>

      <Menu />

      <ShoppingCart isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart} />

      <MobileMenu
        isLogin={isLogin}
        isOpenMenu={isOpenMenu}
        setIsOpenMenu={setIsOpenMenu}
      />
    </>
  );
};

export default Header;