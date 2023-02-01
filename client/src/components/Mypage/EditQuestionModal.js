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
  EditQuModal,
  EditQuModalView
} from '../../styles/productStyle';
import { ReactComponent as CancelIcon } from '../../assets/icons/cancleIcon.svg';
import { useState } from 'react';
import { authAPI } from '../../api/customAxios';

const EditQuestionModal = ({ isEdit, setIsEdit, itemQuestion }) => {
  const [content, setContent] = useState('');

  const EditQuestion = async () => {
    const QuestionPatchAPI = async (questionId, body) => {
      try {
        await authAPI.patch(`/question/${questionId}`, { body });
      } catch (error) {
        console.log(error);
      }
    };
    setIsEdit(false);
    await QuestionPatchAPI(itemQuestion.id, content);
    window.location.reload();
  };

  return (
    <>
      <EditQuModal onClick={() => setIsEdit(false)} isEdit={isEdit}>
        <CancleImgContainer>
          <CancelIcon onClick={() => setIsEdit(false)} />
        </CancleImgContainer>
      </EditQuModal>

      <EditQuModalView isEdit={isEdit}>
        <QuestionModalContainer>
          <MiddleText>문의수정</MiddleText>
          <LeftTextContainer>
            <LeftText htmlFor="ItemName">작성자</LeftText>
            <RightText>{itemQuestion.createByName}</RightText>
          </LeftTextContainer>
          <LeftTextContainer>
            <LeftText htmlFor="ItemName">상품명</LeftText>
            <RightText>{itemQuestion.productName}</RightText>
          </LeftTextContainer>
          <SpaceDiv />
          <LeftTextContainer>
            <LeftText htmlFor="Question">문의내용</LeftText>
          </LeftTextContainer>
          <MiddleContainer>
            <BigInput onChange={(e) => setContent(e.target.value)} />
          </MiddleContainer>
          <MiddleContainer>
            <CompletButton onClick={EditQuestion}>수정완료</CompletButton>
          </MiddleContainer>
        </QuestionModalContainer>
      </EditQuModalView>
    </>
  );
};

export default EditQuestionModal;
