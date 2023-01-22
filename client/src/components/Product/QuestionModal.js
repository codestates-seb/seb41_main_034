import {
  CompletButton,
  BigInput,
  SmallInput,
  MiddleContainer,
  LeftText,
  LeftTextContainer,
  MiddleText,
  ModalContainer,
  ModalWrapper,
  CancleImgContainer,
  ModalView
} from '../../styles/productStyle';
import { ReactComponent as CancelIcon } from '../../assets/icons/cancleIcon.svg';
import { useState } from 'react';
import { questionPostAPI } from '../../api/question';

const QuestionModal = ({ isOpenQuestion, setIsOpenQuestion }) => {
  const [title, setTitle] = useState('');
  const [productName, setProductName] = useState('');
  const [content, setContent] = useState('');

  const handleQuestionClose = () => {
    setIsOpenQuestion(false);
    console.log('close');
  };

  const questionAdd = async () => {
    const body = {
      body: title,
      productName: productName,
      answer: content
    };
    await questionPostAPI(body);
    setIsOpenQuestion(false);
  };

  return (
    <>
      <ModalWrapper
        onClick={handleQuestionClose}
        isOpenQuestion={isOpenQuestion}
      />

      <ModalView isOpenQuestion={isOpenQuestion}>
        <CancleImgContainer>
          <CancelIcon onClick={handleQuestionClose} />
        </CancleImgContainer>
        <ModalContainer>
          <MiddleText>문의하기</MiddleText>
          <LeftTextContainer>
            <LeftText htmlFor="title">제목</LeftText>
          </LeftTextContainer>
          <MiddleContainer>
            <SmallInput
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              aria-label="제목을 입력하세요."
              placeholder="제목을 입력하세요."
            />
          </MiddleContainer>
          <LeftTextContainer>
            <LeftText htmlFor="productName">상품명</LeftText>
          </LeftTextContainer>
          <MiddleContainer>
            <SmallInput
              onChange={(e) => setProductName(e.target.value)}
              id="productName"
              aria-label="상품명을 입력하세요."
              placeholder="상품명을 입력하세요."
            />
          </MiddleContainer>
          <LeftTextContainer>
            <LeftText htmlFor="Content">문의내용</LeftText>
          </LeftTextContainer>
          <MiddleContainer>
            <BigInput
              onChange={(e) => setContent(e.target.value)}
              id="Content"
              aria-label="문의내용을 입력하세요."
              placeholder="문의내용을 입력하세요."
            />
          </MiddleContainer>
          <MiddleContainer onClick={questionAdd}>
            <CompletButton>완료</CompletButton>
          </MiddleContainer>
        </ModalContainer>
      </ModalView>
    </>
  );
};

export default QuestionModal;
