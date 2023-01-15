import {
  MobileLink,
  MobileButtonContainer,
  MobileMenuHeader,
  MobileCategoryButton,
  MobileCategoryContainer,
  MobileMenuWrapper,
  MobileMenuContainer,
  MobileButton,
  MobileMyPageLink
} from '../../styles/catagoryStyle';
import { Logo } from '../../styles/headerStyle';
import { ReactComponent as LogoIcon } from '../../assets/icons/foodmeet.svg';
import { ReactComponent as MyPageIcon } from '../../assets/icons/myPageIcon.svg';
import { Link } from 'react-router-dom';

const MobileMenuModal = ({ isLogin, isOpenMenu, setIsOpenMenu }) => {
  return (
    <>
      <MobileMenuWrapper
        onClick={() => setIsOpenMenu(false)}
        isOpenMenu={isOpenMenu}
      />
      <MobileMenuContainer isOpenMenu={isOpenMenu}>
        <MobileMenuHeader>
          <Logo>
            <Link to="/">
              <LogoIcon />
            </Link>
          </Logo>
          <MobileButtonContainer>
            {isLogin ? (
              <>
                <MobileMyPageLink>
                  <MyPageIcon />
                </MobileMyPageLink>
                <MobileButton
                  type="button"
                  onClick={() => setIsOpenMenu(false)}
                >
                  로그아웃
                </MobileButton>
              </>
            ) : (
              <>
                <MobileLink to="/login" onClick={() => setIsOpenMenu(false)}>
                  로그인
                </MobileLink>
                <MobileLink to="/signup" onClick={() => setIsOpenMenu(false)}>
                  회원가입
                </MobileLink>
              </>
            )}
          </MobileButtonContainer>
        </MobileMenuHeader>

        <MobileCategoryContainer>
          <MobileCategoryButton>카테고리</MobileCategoryButton>
          <MobileCategoryButton>카테고리</MobileCategoryButton>
          <MobileCategoryButton>카테고리</MobileCategoryButton>
          <MobileCategoryButton>카테고리</MobileCategoryButton>
          <MobileCategoryButton>카테고리</MobileCategoryButton>
          <MobileCategoryButton>카테고리</MobileCategoryButton>
          <MobileCategoryButton>카테고리</MobileCategoryButton>
          <MobileCategoryButton>카테고리</MobileCategoryButton>
          <MobileCategoryButton>카테고리</MobileCategoryButton>
          <MobileCategoryButton>카테고리</MobileCategoryButton>
          <MobileCategoryButton>카테고리</MobileCategoryButton>
          <MobileCategoryButton>카테고리</MobileCategoryButton>
          <MobileCategoryButton>카테고리</MobileCategoryButton>
          <MobileCategoryButton>카테고리</MobileCategoryButton>
          <MobileCategoryButton>카테고리</MobileCategoryButton>
          <MobileCategoryButton>카테고리</MobileCategoryButton>
          <MobileCategoryButton>카테고리</MobileCategoryButton>
        </MobileCategoryContainer>
      </MobileMenuContainer>
    </>
  );
};

export default MobileMenuModal;
