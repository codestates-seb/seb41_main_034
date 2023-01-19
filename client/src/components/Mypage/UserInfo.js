import { ReactComponent as UserIcon } from '../../assets/icons/myPageIcon.svg';
import {
  UserWrapper,
  UserInfoContainer,
  ImgContainer,
  InfoContainer,
  NameText,
  OtherText,
  EditButton,
  EditbuttonContainer
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
          </InfoContainer>
          <EditbuttonContainer>
            <EditButton>회원정보수정</EditButton>
          </EditbuttonContainer>
        </UserInfoContainer>
      </UserWrapper>
    </>
  );
};

export default UserInfo;
