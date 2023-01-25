import { useState } from 'react';
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
} from '../../styles/layoutStyle';
import { ReactComponent as SearchIcon } from '../../assets/icons/searchIcon.svg';
import { ReactComponent as LogoIcon } from '../../assets/icons/foodmeet.svg';
import { ReactComponent as CartIcon } from '../../assets/icons/cartIcon.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menuIcon.svg';
import { ReactComponent as MyPageIcon } from '../../assets/icons/myPageIcon.svg';
import Menu from '../Menu/Menu';
import MobileMenu from '../Menu/MobileMenu';
import ShoppingCart from '../Order/ShoppingCart';
import { useSelector } from 'react-redux';

const Header = ({ location, isLogin }) => {
  const cart = useSelector((state) => state.order.cart);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const onClickLogout = () => {
    const isLogout = window.confirm('로그아웃 하시겠습니까?');

    isLogout && localStorage.removeItem('accessToken');
  };

  if (location.pathname === '/login' || location.pathname === '/signup') {
    return null;
  }
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
                  <MyPageLink to={'/mypage'}>
                    <MyPageIcon />
                  </MyPageLink>
                  <LogoutButton onClick={onClickLogout}>로그아웃</LogoutButton>
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
                {cart.length !== 0 && <CartCount>{cart.length}</CartCount>}
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
