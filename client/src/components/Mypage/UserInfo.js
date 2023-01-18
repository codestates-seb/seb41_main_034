import styled from 'styled-components';
import { ReactComponent as UserIcon } from '../../assets/icons/userIcon.svg';

const UserInfo = () => {
  return (
    <>
      <UserWrapper>
        <UserInfoContainer>
          <ImgContainer>
            <UserIcon />
          </ImgContainer>
          <InfoContainer>
            <NameText>홍길동</NameText>
            <OtherText>주소 : 대한민국</OtherText>
            <OtherText>이메일 : 123123@naver.com</OtherText>
            <OtherText>연락처 : 010-1234-1234</OtherText>
            <OtherText>문의 수 : 3 | 리뷰 수 : 3</OtherText>
          </InfoContainer>
        </UserInfoContainer>
        <EditButtonContainer>
          <EditButton>회원정보수정</EditButton>
        </EditButtonContainer>
      </UserWrapper>
    </>
  );
};

const UserWrapper = styled.div`
  width: 100%;
  max-width: 602px;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    max-width: 393px;
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
`;

const ImgContainer = styled.div`
  display: flex;
  width: 35%;
  justify-content: center;
  align-items: center;

  svg {
    width: 150px;
    height: 150px;

    @media ${(props) => props.theme.tablet} {
      width: 102px;
      height: 102px;
    }

    @media ${(props) => props.theme.mobile} {
      width: 102px;
      height: 102px;
    }
  }
`;

const InfoContainer = styled.div`
  display: grid;
  width: 65%;
`;

const NameText = styled.div`
  display: flex;
  padding: 12px 0 12px 0;
  font-size: 24px;
  align-items: center;

  @media ${(props) => props.theme.tablet} {
    font-size: 16px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const OtherText = styled.div`
  display: flex;
  font-size: 12px;
  padding-bottom: 8px;
  align-items: center;

  @media ${(props) => props.theme.tablet} {
    font-size: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }
`;

const EditButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const EditButton = styled.button`
  width: 167px;
  height: 41px;
  margin: 12px 0 12px 0;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};
  font-size: 12px;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }

  @media ${(props) => props.theme.tablet} {
    width: 96px;
    height: 29px;
    font-size: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 88px;
    height: 28px;
    font-size: 8px;
  }
`;

export default UserInfo;
