import { ReactComponent as RightArrow } from '../../assets/icons/rightArrow.svg';
import { NavContainer, CatagoryBox } from '../../styles/myPageStyle';

const MyPageNav = () => {
  return (
    <NavContainer>
      <CatagoryBox to="">
        회원정보
        <RightArrow />
      </CatagoryBox>
      <CatagoryBox to="">
        주소관리
        <RightArrow />
      </CatagoryBox>
      <CatagoryBox to="">
        주문목록
        <RightArrow />
      </CatagoryBox>
      <CatagoryBox to="">
        나의리뷰
        <RightArrow />
      </CatagoryBox>
      <CatagoryBox to="">
        나의문의
        <RightArrow />
      </CatagoryBox>
    </NavContainer>
  );
};

export default MyPageNav;
