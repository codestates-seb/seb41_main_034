import { useEffect, useState } from 'react';
import {
  UserInfoContainer,
  InfoContainer,
  TextContainer,
  NameText,
  WellcomText,
  OtherText,
  EditButton,
  EditbuttonContainer,
  Name,
  NameNext
} from '../../styles/myPageStyle';
import { useSelector } from 'react-redux';

const UserInfo = () => {
  const [token, setToken] = useState(null);
  const Token = useSelector((state) => state.user.userId);

  useEffect(() => {
    setToken(Token);
  }, [Token, token]);

  return (
    <>
      <UserInfoContainer>
        <InfoContainer>
          <TextContainer>
            <WellcomText>환영합니다 !</WellcomText>
            <Name>
              <NameText>홍길동</NameText>
              <NameNext>님</NameNext>
            </Name>
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
