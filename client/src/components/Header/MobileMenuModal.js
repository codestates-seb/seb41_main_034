import {
  MobileMenuCancle,
  MobileLink,
  MobileButtonContainer,
  MobileCategoryButton,
  MobileCategoryContainer,
  MobileMenuWrapper,
  MobileButton,
  MobileMyPageLink
} from '../../styles/catagoryStyle';
import { ReactComponent as CancleIcon } from '../../assets/icons/cancleIcon.svg';
import { ReactComponent as MyPageIcon } from '../../assets/icons/myPageIcon.svg';

const MobileMenuModal = ({ isLogin, setIsOpenMenu }) => {
  return (
    <MobileMenuWrapper>
      <MobileMenuCancle
        type="button"
        aria-label="메뉴 닫기"
        onClick={() => setIsOpenMenu(false)}
      >
        <CancleIcon />
      </MobileMenuCancle>
      <MobileButtonContainer>
        {isLogin ? (
          <>
            <MobileMyPageLink>
              <MyPageIcon />
            </MobileMyPageLink>
            <MobileButton type="button" onClick={() => setIsOpenMenu(false)}>
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

      <MobileCategoryContainer>
        <MobileCategoryButton>카테고리</MobileCategoryButton>
        <MobileCategoryButton>카테고리</MobileCategoryButton>
        <MobileCategoryButton>카테고리</MobileCategoryButton>
        <MobileCategoryButton>카테고리</MobileCategoryButton>
      </MobileCategoryContainer>
    </MobileMenuWrapper>
  );
};

export default MobileMenuModal;
