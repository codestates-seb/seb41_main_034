import {
  CompletButton,
  BigInput,
  MiddleContainer,
  LeftText,
  LeftTextContainer,
  MiddleText,
  CancleImgContainer,
  QuestionModalWrapper,
  QuestionModalContainer,
  ModalView,
  RightText,
  SpaceDiv,
  BottomText
} from '../../styles/productStyle';
import { ReactComponent as CancelIcon } from '../../assets/icons/cancleIcon.svg';
import { useState } from 'react';
import { authAPI } from '../../api/customAxios';

const QuestionModal = ({
  isOpenQuestion,
  setIsOpenQuestion,
  params,
  question
}) => {
  const [content, setContent] = useState('');

  const handleQuestionClose = () => {
    setIsOpenQuestion(false);
  };

  const questionAdd = async () => {
    const body = {
      productId: params.productId,
      body: content
    };

    const QuestionPostAPI = async (body) => {
      try {
        await authAPI.post(`/question`, body);
        handleQuestionClose();
        setContent('');
      } catch (error) {
        console.log(error);
      }
    };

    QuestionPostAPI(body);
  };

  return (
    <>
      <QuestionModalWrapper
        onClick={handleQuestionClose}
        isOpenQuestion={isOpenQuestion}
      />

      <ModalView isOpenQuestion={isOpenQuestion}>
        <CancleImgContainer>
          <CancelIcon onClick={handleQuestionClose} />
        </CancleImgContainer>
        <QuestionModalContainer>
          <MiddleText>문의작성</MiddleText>
          <LeftTextContainer>
            <LeftText htmlFor="ItemName">작성자</LeftText>
            <RightText>{question.createByName}</RightText>
          </LeftTextContainer>
          <LeftTextContainer>
            <LeftText htmlFor="ItemName">상품명</LeftText>
            <RightText>{question.productName}</RightText>
          </LeftTextContainer>
          <SpaceDiv />
          <LeftTextContainer>
            <LeftText htmlFor="Question">문의내용</LeftText>
          </LeftTextContainer>
          <MiddleContainer>
            <BigInput
              onChange={(e) => setContent(e.target.value)}
              id="Question"
              aria-label="문의내용을 입력하세요."
              placeholder="문의내용을 입력하세요."
              value={content}
            />
          </MiddleContainer>
          <BottomText>문의작성 시 유의사항 !</BottomText>
          <BottomText>
            문의 사항은 평일 오전 9시에서 오후 6시 이전에 남겨 주시면 문의 하신
            내용에 따라 당일 답변이 가능 합니다. 휴일(토,일요일 포함)에 등록된
            내용은 사정상 답변이 늦어질 수 있습니다.
          </BottomText>
          <MiddleContainer>
            <CompletButton onClick={questionAdd}>완료</CompletButton>
          </MiddleContainer>
        </QuestionModalContainer>
      </ModalView>
    </>
  );
};

export default QuestionModal;
