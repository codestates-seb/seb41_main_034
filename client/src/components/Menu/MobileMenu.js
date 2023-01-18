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
} from '../../styles/menuStyle';
import { Logo } from '../../styles/layoutStyle';
import { ReactComponent as LogoIcon } from '../../assets/icons/foodmeet.svg';
import { ReactComponent as MyPageIcon } from '../../assets/icons/myPageIcon.svg';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isLogin, isOpenMenu, setIsOpenMenu }) => {
  return (
    <>
      <MobileMenuWrapper
        onClick={() => setIsOpenMenu(false)}
        isOpenMenu={isOpenMenu}
      />
      <MobileMenuContainer isOpenMenu={isOpenMenu}>
        <MobileMenuHeader>
          <Logo>
            <Link to={'/'}>
              <LogoIcon />
            </Link>
          </Logo>
          <MobileButtonContainer>
            {isLogin ? (
              <>
                <MobileMyPageLink to={'/mypage'}>
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
                <MobileLink to={'/login'} onClick={() => setIsOpenMenu(false)}>
                  로그인
                </MobileLink>
                <MobileLink to={'/signup'} onClick={() => setIsOpenMenu(false)}>
                  회원가입
                </MobileLink>
              </>
            )}
          </MobileButtonContainer>
        </MobileMenuHeader>

        <MobileCategoryContainer>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el, idx) => (
            <MobileCategoryButton
              to={`/products/${el}`}
              key={idx}
              onClick={() => setIsOpenMenu(false)}
            >
              카테고리
            </MobileCategoryButton>
          ))}
        </MobileCategoryContainer>
      </MobileMenuContainer>
    </>
  );
};

export default MobileMenu;
