import { ReactComponent as RightArrow } from '../../assets/icons/arrowIcon.svg';
import { NavContainer, CatagoryBox } from '../../styles/myPageStyle';

const MyPageNav = () => {
  return (
    <NavContainer>
      <CatagoryBox to={'/mypage'}>
        주소관리
        <RightArrow />
      </CatagoryBox>
      <CatagoryBox to={'/mypage/orderlist'}>
        주문목록
        <RightArrow />
      </CatagoryBox>
      <CatagoryBox to={'/mypage/review'}>
        나의후기
        <RightArrow />
      </CatagoryBox>
      <CatagoryBox to={'/mypage/question'}>
        나의문의
        <RightArrow />
      </CatagoryBox>
    </NavContainer>
  );
};

export default MyPageNav;
