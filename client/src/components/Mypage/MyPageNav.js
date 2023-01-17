import { ReactComponent as RightArrow } from '../../assets/icons/rightArrow.svg';
import {
  NavWrapper,
  NavContainer,
  CatagoryBox,
  TopContainer,
  BottomContainer
} from '../../styles/myPageStyle';

const MyPageNav = () => {
  return (
    <NavWrapper>
      <NavContainer>
        <TopContainer>
          <CatagoryBox to="">
            회원정보
            <RightArrow />
          </CatagoryBox>
          <CatagoryBox to="">
            주소관리
            <RightArrow />
          </CatagoryBox>
        </TopContainer>
        <BottomContainer>
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
        </BottomContainer>
      </NavContainer>
    </NavWrapper>
  );
};

export default MyPageNav;
