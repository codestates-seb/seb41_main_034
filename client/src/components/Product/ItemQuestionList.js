import {
  QuestionButton,
  FlexContainer,
  QuestionContainer,
  SubTitleText,
  TitleText,
  ListContainer,
  ListWrapper
} from '../../styles/productStyle';
import ItemQuestion from './ItemQuestion';
import { useState, useEffect } from 'react';
import QuestionModal from './QuestionModal';
import { itemQuestionGetAPI } from '../../api/question';

const ItemQuestionList = () => {
  const [isOpenQuestion, setIsOpenQuestion] = useState(false);
  const [Question, setQuestion] = useState(null);

  const handleQuestionOpen = () => {
    setIsOpenQuestion(!isOpenQuestion);
  };

  useEffect(() => {
    const body = 'productId';
    const data = itemQuestionGetAPI(body);
    setQuestion(data);
    console.log(Question);
  }, ['Question']);

  return (
    <>
      <ListWrapper>
        <ListContainer>
          <TitleText>상품문의</TitleText>
          <FlexContainer>
            <SubTitleText>상품에 대한 문의를 남기는 공간입니다.</SubTitleText>
            <QuestionButton
              onClick={handleQuestionOpen}
              aria-label="문의하기 버튼입니다"
            >
              문의하기
            </QuestionButton>
          </FlexContainer>
          <QuestionContainer>
            <ItemQuestion Question={Question} />
          </QuestionContainer>
        </ListContainer>
      </ListWrapper>

      <QuestionModal
        isOpenQuestion={isOpenQuestion}
        setIsOpenQuestion={setIsOpenQuestion}
      />
    </>
  );
};

export default ItemQuestionList;
