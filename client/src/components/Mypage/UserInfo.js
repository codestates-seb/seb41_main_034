import { useEffect, useState } from 'react';
import {
  UserInfoContainer,
  TextContainer,
  NameText,
  WellcomText,
  OtherText,
  EditButton,
  EditbuttonContainer,
  Name,
  NameNext,
  BottomTextContainer,
  TheOtherText,
  BottomTextWrapper
} from '../../styles/myPageStyle';
import { authAPI } from '../../api/customAxios';

const UserInfo = () => {
  const [question, setQuestion] = useState(null);
  const [userName, setUserName] = useState(null);
  const [order, setOrder] = useState(null);
  const [review, setReview] = useState(null);
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const UserAPI = async (userId) => {
      try {
        const result = await authAPI.get(`/user/${userId}`);
        setUserName(result.data.data.displayName);
      } catch (err) {
        console.log(err);
      }
    };
    const QuestionAPI = async () => {
      try {
        const result = await authAPI.get(`/question/question-history`);
        setQuestion(result.data.data.totalElements);
      } catch (err) {
        console.log(err);
      }
    };
    const OrderAPI = async () => {
      try {
        const result = await authAPI.get(`/order/order-history`);
        setOrder(result.data.data.totalElements);
      } catch (err) {
        console.log(err);
      }
    };
    const ReviewAPI = async () => {
      try {
        const result = await authAPI.get(`/review/review-history`);
        setReview(result.data.data.totalElements);
      } catch (err) {
        console.log(err);
      }
    };

    OrderAPI();
    QuestionAPI();
    UserAPI(userId);
    ReviewAPI();
  }, [userId]);

  return (
    <>
      <UserInfoContainer>
        <TextContainer>
          <WellcomText>환영합니다 !</WellcomText>
          <Name>
            <NameText>{userName}</NameText>
            <NameNext>님</NameNext>
          </Name>
        </TextContainer>
        <BottomTextWrapper>
          <BottomTextContainer>
            <OtherText>주문</OtherText>
            <TheOtherText>{order}</TheOtherText>
          </BottomTextContainer>
          <BottomTextContainer>
            <OtherText>후기</OtherText>
            <TheOtherText>{review}</TheOtherText>
          </BottomTextContainer>
          <BottomTextContainer>
            <OtherText>문의</OtherText>
            <TheOtherText>{question}</TheOtherText>
          </BottomTextContainer>
        </BottomTextWrapper>
        <EditbuttonContainer>
          <EditButton to={'/mypage/confirmpw'}>회원정보수정</EditButton>
        </EditbuttonContainer>
      </UserInfoContainer>
    </>
  );
};

export default UserInfo;
