import {
  CompletButton,
  BigInput,
  SmallInput,
  MiddleContainer,
  LeftText,
  LeftTextContainer,
  MiddleText,
  ModalContainer,
  ModalWrapper
} from '../../styles/questionmodalStyle';

const QuestionModal = () => {
  return (
    <ModalWrapper>
      <ModalContainer>
        <MiddleText>문의하기</MiddleText>
        <LeftTextContainer>
          <LeftText>제목</LeftText>
        </LeftTextContainer>
        <MiddleContainer>
          <SmallInput />
        </MiddleContainer>
        <LeftTextContainer>
          <LeftText>상품명</LeftText>
        </LeftTextContainer>
        <MiddleContainer>
          <SmallInput />
        </MiddleContainer>
        <LeftTextContainer>
          <LeftText>문의내용</LeftText>
        </LeftTextContainer>
        <MiddleContainer>
          <BigInput />
        </MiddleContainer>
        <MiddleContainer>
          <CompletButton>완료</CompletButton>
        </MiddleContainer>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default QuestionModal;
