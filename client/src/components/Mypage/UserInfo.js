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
import { questionGetAPI } from '../../api/question';
import { UserGetAPI } from '../../api/user';
import { OrderGetAPI } from '../../api/order';
import { userReviewGetAPI } from '../../api/review';

const UserInfo = () => {
  const [question, setQuestion] = useState(null);
  const [userName, setUserName] = useState(null);
  const [order, setOrder] = useState(null);
  const [review, setReview] = useState(null);
  const User = useSelector((state) => state.user.dbId);

  useEffect(() => {
    const API = async () => {
      const UserAPI = await UserGetAPI(User);
      setUserName(UserAPI.data.displayName);
      const QuestionAPI = await questionGetAPI();
      setQuestion(QuestionAPI.data.totalElements);
      const OrderAPI = await OrderGetAPI();
      setOrder(OrderAPI.data.totalElements);
      const ReviewAPI = await userReviewGetAPI();
      setReview(ReviewAPI.data.totalElements);
    };
    API();
  }, []);

  return (
    <>
      <UserInfoContainer>
        <InfoContainer>
          <TextContainer>
            <WellcomText>환영합니다 !</WellcomText>
            <Name>
              <NameText>{userName}</NameText>
              <NameNext>님</NameNext>
            </Name>
          </TextContainer>
          <BottomTextContainer>
            <OtherText>주문 수</OtherText>
            <OtherText>후기 수</OtherText>
            <OtherText>문의 수</OtherText>
          </BottomTextContainer>
          <BottomTextContainer>
            <TheOtherText>{order}</TheOtherText>
            <TheOtherText>{review}</TheOtherText>
            <TheOtherText>{question}</TheOtherText>
          </BottomTextContainer>
        </InfoContainer>
        <EditbuttonContainer>
          <EditButton to={'/mypage/editmodal'}>회원정보수정</EditButton>
        </EditbuttonContainer>
      </UserInfoContainer>
    </>
  );
};

export default UserInfo;
