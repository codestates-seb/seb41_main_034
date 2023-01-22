import {
  CompletButton,
  BigInput,
  SmallInput,
  MiddleContainer,
  LeftText,
  LeftTextContainer,
  MiddleText,
  CancleImgContainer,
  QuestionModalWrapper,
  QuestionModalContainer
} from '../../styles/productStyle';
import { ReactComponent as CancelIcon } from '../../assets/icons/cancleIcon.svg';
// import { useState } from 'react';
// import { questionPostAPI } from '../../api/question';

const QuestionModal = ({ isOpenQuestion, setIsOpenQuestion }) => {
  const handleQuestionClose = () => {
    setIsOpenQuestion(false);
  };

  // const [title, setTitle] = useState('');
  // const [itemName, setItemName] = useState('');
  // const [content, setConet] = useState('');
  // // question add button call func
  // const questionAdd = async () => {
  //   const body = {
  //     title: title,
  //     itemName: itemName,
  //     content: content
  //   };
  //   await questionPostAPI(body);
  //   setIsQuestion(false); // modal false
  // };

  return (
    <>
      <QuestionModalWrapper
        onClick={handleQuestionClose}
        isOpenQuestion={isOpenQuestion}
      />

      <QuestionModalContainer isOpenQuestion={isOpenQuestion}>
        <CancleImgContainer>
          <CancelIcon onClick={handleQuestionClose} />
        </CancleImgContainer>
        <MiddleText>문의하기</MiddleText>
        <LeftTextContainer>
          <LeftText htmlFor="title">제목</LeftText>
        </LeftTextContainer>
        <MiddleContainer>
          <SmallInput
            id="title"
            aria-label="제목을 입력하세요."
            placeholder="제목을 입력하세요."
          />
        </MiddleContainer>
        <LeftTextContainer>
          <LeftText htmlFor="ItemName">상품명</LeftText>
        </LeftTextContainer>
        <MiddleContainer>
          <SmallInput
            id="ItemName"
            aria-label="상품명을 입력하세요."
            placeholder="상품명을 입력하세요."
          />
        </MiddleContainer>
        <LeftTextContainer>
          <LeftText htmlFor="Question">문의내용</LeftText>
        </LeftTextContainer>
        <MiddleContainer>
          <BigInput
            id="Question"
            aria-label="문의내용을 입력하세요."
            placeholder="문의내용을 입력하세요."
          />
        </MiddleContainer>
        <MiddleContainer>
          <CompletButton>완료</CompletButton>
        </MiddleContainer>
      </QuestionModalContainer>
    </>
  );
};

export default QuestionModal;
