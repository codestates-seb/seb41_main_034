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
  CancleImgContainer
} from '../../styles/questionmodalStyle';
// import CancleIcon from '../../assets/icons/cancel.svg';
import { ReactComponent as CancelIcon } from '../../assets/icons/cancleIcon.svg';

const QuestionModal = ({ setIsQuestion }) => {
  const handleQuestionClose = () => {
    setIsQuestion(false);
  };

  return (
    <ModalWrapper>
      <ModalContainer>
        <CancleImgContainer>
          <CancelIcon onClick={handleQuestionClose} />
        </CancleImgContainer>
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
