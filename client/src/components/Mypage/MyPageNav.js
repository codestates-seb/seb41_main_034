import { ReactComponent as RightArrow } from '../../assets/icons/arrowIcon.svg';
import {
  NavContainer,
  CatagoryBox,
  ActiveCatagoryBox
} from '../../styles/myPageStyle';

const MyPageNav = () => {
  const currentPath = decodeURI(window.location.pathname).substring(8);

  return (
    <NavContainer>
      {currentPath === 'address' ? (
        <ActiveCatagoryBox to={'/mypage/address'}>
          주소관리
          <RightArrow />
        </ActiveCatagoryBox>
      ) : (
        <CatagoryBox to={'/mypage/address'}>
          주소관리
          <RightArrow />
        </CatagoryBox>
      )}

      {currentPath === 'order' ? (
        <ActiveCatagoryBox to={'/mypage/order'}>
          주문내역
          <RightArrow />
        </ActiveCatagoryBox>
      ) : (
        <CatagoryBox to={'/mypage/order'}>
          주문내역
          <RightArrow />
        </CatagoryBox>
      )}

      {currentPath === 'review' ? (
        <ActiveCatagoryBox to={'/mypage/review'}>
          나의후기
          <RightArrow />
        </ActiveCatagoryBox>
      ) : (
        <CatagoryBox to={'/mypage/review'}>
          나의후기
          <RightArrow />
        </CatagoryBox>
      )}

      {currentPath === 'question' ? (
        <ActiveCatagoryBox to={'/mypage/question'}>
          나의문의
          <RightArrow />
        </ActiveCatagoryBox>
      ) : (
        <CatagoryBox to={'/mypage/question'}>
          나의문의
          <RightArrow />
        </CatagoryBox>
      )}
    </NavContainer>
  );
};

export default MyPageNav;
