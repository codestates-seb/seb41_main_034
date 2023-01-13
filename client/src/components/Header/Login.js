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
  UserImg,
  MobileListImg,
  MobileInput,
  MobileSearchImg,
  MobileContainer,
  Img,
  MobileFlex,
  LinkContainer
} from '../../styles/headerStyle';
import CartImg from './../../assets/icons/shoppingCart.svg';
import SearchImg from './../../assets/icons/search.svg';
import ListImage from './../../assets/icons/list.svg';
import LogoImg from './../../assets/icons/foodmeet.svg';
import UserImage from './../../assets/icons/user.svg';
import { Link } from 'react-router-dom';
import {
  CatagoryButton,
  CatagoryContainer,
  CatagoryWrapper
} from '../../styles/catagoryStyle';

const Login = () => {
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
              <Button>로그아웃</Button>
              <UserImg src={UserImage} />
              <Img src={CartImg} />
              <LinkContainer to="mobilemenu">
                <MobileListImg src={ListImage} />
              </LinkContainer>
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
    </>
  );
};

export default Login;
