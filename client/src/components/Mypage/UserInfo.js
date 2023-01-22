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
      <UserInfoContainer>
        <InfoContainer>
          <TextContainer>
            <WellcomText>환영합니다 !</WellcomText>
            <NameText>홍길동님</NameText>
          </TextContainer>
          <OtherText>주소 : 대한민국</OtherText>
          <OtherText>주문 수 : 0</OtherText>
          <OtherText>문의 수 : 0</OtherText>
          <OtherText>리뷰 수 : 0</OtherText>
        </InfoContainer>
        <EditbuttonContainer>
          <EditButton to={'/mypage/edit'}>회원정보수정</EditButton>
        </EditbuttonContainer>
      </UserInfoContainer>
    </>
  );
};

export default UserInfo;
