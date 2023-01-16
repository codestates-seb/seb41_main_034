import {
  QuestionButton,
  FlexContainer,
  QuestionContainer,
  SubTitleText,
  TitleText,
  ListContainer,
  ListWrapper
} from '../../styles/itemquestionlistStyle';
import ItemQuestion from './ItemQuestion';
import { useState } from 'react';
import QuestionModal from './QuestionModal';

const ItemQuestionList = () => {
  const [isQuestion, setIsQuestion] = useState(false);

  const handleQuestionOpen = () => {
    setIsQuestion(!isQuestion);
  };

  return (
    <>
      <ListWrapper>
        <ListContainer>
          <TitleText>상품문의</TitleText>
          <FlexContainer>
            <SubTitleText>상품에 대한 문의를 남기는 공간입니다.</SubTitleText>
            <QuestionButton onClick={handleQuestionOpen}>
              문의하기
            </QuestionButton>
          </FlexContainer>
          <QuestionContainer>
            <ItemQuestion />
          </QuestionContainer>
        </ListContainer>
      </ListWrapper>
      {isQuestion && (
        <QuestionModal setIsQuestion={setIsQuestion}></QuestionModal>
      )}
    </>
  );
};

export default ItemQuestionList;
