import {
  CompletButton,
  BigInput,
  MiddleContainer,
  LeftText,
  LeftTextContainer,
  MiddleText,
  CancleImgContainer,
  QuestionModalContainer,
  RightText,
  SpaceDiv,
  EditReModal,
  EditReModalView
} from '../../styles/productStyle';
import { useState } from 'react';
import { ReactComponent as CancelIcon } from '../../assets/icons/cancleIcon.svg';
import { authAPI } from '../../api/customAxios';

const EditReviewModal = ({ isEditModal, setIsEditModal, userReview }) => {
  const [content, setContent] = useState('');

  const EditComplete = () => {
    const ReviewEditAPI = async (reviewId, body) => {
      try {
        await authAPI.patch(`/review/${reviewId}`, { body });
        setContent('');
        setIsEditModal(false);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    };
    ReviewEditAPI(userReview.id, content);
  };

  return (
    <>
      <EditReModal
        isEditModal={isEditModal}
        onClick={() => setIsEditModal(false)}
      >
        <CancleImgContainer>
          <CancelIcon onClick={() => setIsEditModal(false)} />
        </CancleImgContainer>
      </EditReModal>

      <EditReModalView isEditModal={isEditModal}>
        <QuestionModalContainer>
          <MiddleText>후기수정</MiddleText>
          <LeftTextContainer>
            <LeftText htmlFor="ItemName">작성자</LeftText>
            <RightText>{userReview.createdByName}</RightText>
          </LeftTextContainer>
          <LeftTextContainer>
            <LeftText htmlFor="ItemName">상품명</LeftText>
            <RightText>{userReview.productName}</RightText>
          </LeftTextContainer>
          <SpaceDiv />
          <LeftTextContainer>
            <LeftText htmlFor="Question">문의내용</LeftText>
          </LeftTextContainer>
          <MiddleContainer>
            <BigInput
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
          </MiddleContainer>
          <MiddleContainer>
            <CompletButton onClick={EditComplete}>수정완료</CompletButton>
          </MiddleContainer>
        </QuestionModalContainer>
      </EditReModalView>
    </>
  );
};

export default EditReviewModal;
