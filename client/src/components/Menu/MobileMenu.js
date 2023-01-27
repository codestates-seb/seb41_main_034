import { Link } from 'react-router-dom';
import {
  MobileLink,
  MobileButtonContainer,
  MobileMenuHeader,
  MobileCategoryButton,
  MobileCategoryContainer,
  MobileMenuWrapper,
  MobileMenuContainer,
  MobileButton,
  MobileMyPageLink,
  CancleButton
} from '../../styles/menuStyle';
import { Logo } from '../../styles/layoutStyle';
import { ReactComponent as LogoIcon } from '../../assets/icons/foodmeet.svg';
import { ReactComponent as MyPageIcon } from '../../assets/icons/myPageIcon.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/cancleIcon.svg';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../store/userSlice';

const MobileMenu = ({ isOpenMenu, setIsOpenMenu }) => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.user.dbId);

  const onClickLogout = () => {
    const isLogout = window.confirm('로그아웃 하시겠습니까?');

    isLogout && setIsOpenMenu(false);
    isLogout && localStorage.clear();
    isLogout && dispatch(logoutUser());
  };

  return (
    <>
      <MobileMenuWrapper
        onClick={() => setIsOpenMenu(false)}
        isOpenMenu={isOpenMenu}
      >
        <CancleButton type="button">
          <DeleteIcon />
        </CancleButton>
      </MobileMenuWrapper>
      <MobileMenuContainer isOpenMenu={isOpenMenu}>
        <MobileMenuHeader>
          <Logo>
            <Link to={'/'}>
              <LogoIcon />
            </Link>
          </Logo>
          <MobileButtonContainer>
            {login ? (
              <>
                <MobileMyPageLink
                  to={'/mypage'}
                  onClick={() => setIsOpenMenu(false)}
                >
                  <MyPageIcon />
                </MobileMyPageLink>
                <MobileButton type="button" onClick={onClickLogout}>
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
          {['채소', '과일', '육류', '수산물', '견과류'].map((el, idx) => (
            <MobileCategoryButton
              to={`/products/${el}`}
              key={idx}
              onClick={() => setIsOpenMenu(false)}
            >
              {el}
            </MobileCategoryButton>
          ))}
        </MobileCategoryContainer>
      </MobileMenuContainer>
    </>
  );
};

export default MobileMenu;
