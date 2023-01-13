import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RightArrow from './../../assets/icons/rightArrow.svg';

const MyPageNav = () => {
  return (
    <NavWrapper>
      <NavContainer>
        <CatagoryBox to="">
          회원정보
          <Img src={RightArrow} />
        </CatagoryBox>
        <CatagoryBox to="">
          회원정보 수정
          <Img src={RightArrow} />
        </CatagoryBox>
        <CatagoryBox to="">
          주소 관리
          <Img src={RightArrow} />
        </CatagoryBox>
        <CatagoryBox to="">
          주문목록
          <Img src={RightArrow} />
        </CatagoryBox>
        <CatagoryBox to="">
          나의 리뷰
          <Img src={RightArrow} />
        </CatagoryBox>
        <CatagoryBox to="">
          나의 문의
          <Img src={RightArrow} />
        </CatagoryBox>
      </NavContainer>
    </NavWrapper>
  );
};

const NavWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  margin-top: 64px;
`;
const NavContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  display: grid;
  @media ${(props) => props.theme.mobile} {
    max-width: 425px;
    width: 80%;
  }
`;
const CatagoryBox = styled(Link)`
  width: 237px;
  height: 63px;
  border: 1px solid ${(props) => props.theme.grayColor};
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 16px;
  justify-content: space-between;
  font-size: 18px;
  &:hover {
    background-color: ${(props) => props.theme.activeColor};
    color: white;
  }
  @media ${(props) => props.theme.tablet} {
    width: 158px;
    height: 47px;
    font-size: 12px;
  }
  @media ${(props) => props.theme.mobile} {
    max-width: 425px;
    width: 100%;
    height: 40px;
    font-size: 8px;
  }
`;
const Img = styled.img`
  width: 12px;
  height: 12px;
  @media ${(props) => props.theme.tablet} {
    width: 8px;
    height: 8px;
  }
`;

export default MyPageNav;
