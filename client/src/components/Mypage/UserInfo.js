import { ReactComponent as UserIcon } from '../../assets/icons/myPageIcon.svg';
import {
  UserWrapper,
  UserInfoContainer,
  ImgContainer,
  InfoContainer,
  NameText,
  OtherText,
  EditButtonContainer,
  EditButton
} from '../../styles/myPageStyle';

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

export default UserInfo;
