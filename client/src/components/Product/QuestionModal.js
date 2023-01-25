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
  QuestionModalContainer,
  ModalView
} from '../../styles/productStyle';
import { ReactComponent as CancelIcon } from '../../assets/icons/cancleIcon.svg';
import { useState } from 'react';
import { questionPostAPI } from '../../api/question';

const QuestionModal = ({ isOpenQuestion, setIsOpenQuestion, question }) => {
  // const [title, setTitle] = useState('');
  const [productName, setProductName] = useState('');
  const [content, setContent] = useState('');

  const handleQuestionClose = () => {
    setIsOpenQuestion(false);
    console.log('close');
  };

  const questionAdd = async () => {
    const body = {
      // body: title,
      productName: productName,
      answer: content
    };
    await questionPostAPI(body);
    setIsOpenQuestion(false);
  };

  console.log(question);

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
          <MiddleText>문의하기</MiddleText>
          {/* <LeftTextContainer>
            <LeftText htmlFor="title">제목</LeftText>
          </LeftTextContainer> */}
          {/* <MiddleContainer>
            <SmallInput
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              aria-label="제목을 입력하세요."
              placeholder="제목을 입력하세요."
            />
          </MiddleContainer> */}
          <LeftTextContainer>
            <LeftText htmlFor="ItemName">상품명</LeftText>
          </LeftTextContainer>
          <MiddleContainer>
            {/* {question[0].productName} */}
            <SmallInput
              onChange={(e) => setProductName(e.target.value)}
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
              onChange={(e) => setContent(e.target.value)}
              id="Question"
              aria-label="문의내용을 입력하세요."
              placeholder="문의내용을 입력하세요."
            />
          </MiddleContainer>
          <MiddleContainer>
            <CompletButton onClick={questionAdd}>완료</CompletButton>
          </MiddleContainer>
        </QuestionModalContainer>
      </ModalView>
    </>
  );
};

export default QuestionModal;
