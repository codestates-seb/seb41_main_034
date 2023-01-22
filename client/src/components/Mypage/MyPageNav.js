import { ReactComponent as RightArrow } from '../../assets/icons/arrowIcon.svg';
import { NavContainer, CatagoryBox } from '../../styles/myPageStyle';

const MyPageNav = () => {
  return (
    <NavContainer>
      <CatagoryBox aria-label="주소관리 카테고리버튼입니다." to="">
        주소관리
        <RightArrow />
      </CatagoryBox>
      <CatagoryBox aria-label="주문목록 카테고리버튼입니다." to="">
        주문목록
        <RightArrow />
      </CatagoryBox>
      <CatagoryBox aria-label="나의리뷰 카테고리버튼입니다." to="">
        나의리뷰
        <RightArrow />
      </CatagoryBox>
      <CatagoryBox aria-label="나의문의 카테고리버튼입니다." to="">
        나의문의
        <RightArrow />
      </CatagoryBox>
    </NavContainer>
  );
};

export default MyPageNav;
