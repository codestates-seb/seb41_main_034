import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as RightArrow } from '../../assets/icons/rightArrow.svg';

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

const NavWrapper = styled.div`
  display: grid;
  width: 100%;
  margin-top: 64px;
  justify-items: center;

  @media ${(props) => props.theme.mobile} {
    padding: 0;
  }
`;

const NavContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 1024px;

  @media ${(props) => props.theme.mobile} {
    display: flex;
  }
`;

const CatagoryBox = styled(Link)`
  display: flex;
  width: 100%;
  max-width: 160px;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  font-size: 10px;
  background-color: ${(props) => props.theme.secondaryColor};

  svg {
    width: 10px;
    height: 10px;
  }

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
      color: ${(props) => props.theme.whiteColor};

      svg {
        fill: ${(props) => props.theme.whiteColor};
      }
    }
  }

  @media ${(props) => props.theme.tablet} {
    width: 120px;
    padding: 12px;
    font-size: 8px;

    svg {
      width: 8px;
      height: 8px;
    }
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    max-width: 100%;
    padding: 12px;
    justify-content: center;
    align-items: center;
    font-size: 4px;

    svg {
      display: none;
    }
  }
`;

const TopContainer = styled.div`
  display: grid;
  width: 100%;
`;

const BottomContainer = styled.div`
  display: grid;
  width: 100%;
`;

export default MyPageNav;
