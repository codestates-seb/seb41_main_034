import {
  UserWrapper,
  UserInfoContainer,
  InfoContainer,
  TextContainer,
  NameText,
  WellcomText,
  OtherText,
  EditButton,
  EditbuttonContainer
} from '../../styles/myPageStyle';

const UserInfo = () => {
  return (
    <>
      <UserWrapper>
        <UserInfoContainer>
          <InfoContainer>
            <TextContainer>
              <WellcomText>환영합니다 !</WellcomText>
              <NameText>홍길동님</NameText>
            </TextContainer>
            <OtherText>주소 : 대한민국</OtherText>
            <OtherText>문의 수 : 3</OtherText>
            <OtherText>리뷰 수 : 3</OtherText>
          </InfoContainer>
          <EditbuttonContainer>
            <EditButton aria-label="회원정보수정 버튼입니다.">
              회원정보수정
            </EditButton>
          </EditbuttonContainer>
        </UserInfoContainer>
      </UserWrapper>
    </>
  );
};

export default UserInfo;
