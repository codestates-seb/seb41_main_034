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
  NameNext,
  BottomTextContainer,
  TheOtherText
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
          <BottomTextContainer>
            <OtherText>주문 수</OtherText>
            <OtherText>후기 수</OtherText>
            <OtherText>문의 수</OtherText>
          </BottomTextContainer>
          <BottomTextContainer>
            <TheOtherText>0</TheOtherText>
            <TheOtherText>0</TheOtherText>
            <TheOtherText>0</TheOtherText>
          </BottomTextContainer>
        </InfoContainer>
        <EditbuttonContainer>
          <EditButton to={'/mypage/edit'}>회원정보수정</EditButton>
        </EditbuttonContainer>
      </UserInfoContainer>
    </>
  );
};

export default UserInfo;
