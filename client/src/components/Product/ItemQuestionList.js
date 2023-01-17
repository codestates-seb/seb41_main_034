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
import { useState } from 'react';
//useEffect
import QuestionModal from './QuestionModal';
// import { questionAPI } from '../../api/question';

const ItemQuestionList = () => {
  const [isOpenQuestion, setIsOpenQuestion] = useState(false);
  // const [Question, setQuestion] = useState(null);

  const handleQuestionOpen = () => {
    setIsOpenQuestion(!isOpenQuestion);
  };

  // useEffect(() => {
  //   setQuestion(questionAPI)
  // }, [Question,setQuestion])

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
            {/* {Question.map(() => <ItemQuestion Question={Question}></ItemQuestion>)} */}
            <ItemQuestion />
          </QuestionContainer>
        </ListContainer>
      </ListWrapper>

      {isOpenQuestion && (
        <QuestionModal
          isOpenQuestion={isOpenQuestion}
          setIsOpenQuestion={setIsOpenQuestion}
        />
      )}
    </>
  );
};

export default ItemQuestionList;
