import { useEffect, useState } from 'react';
import {
  ReviewItemContainer,
  FlexContainer,
  QAText,
  ItemText,
  AnswerText,
  AnswerBox,
  Text,
  TextBold,
  TextGray
} from '../../styles/productStyle';
import QuestionModal from './QuestionModal';
import Loading from '../Layout/Loading';

const ProductQuestionItem = ({
  question,
  params,
  setIsOpenQuestion,
  isOpenQuestion
}) => {
  const [Question, setQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [date, setDate] = useState(null);

  useEffect(() => {
    setQuestion(question);
    setIsLoading(true);
    const dater = new Date(question.createdAt).toLocaleDateString();
    setDate(dater);
  }, [question]);

  return isLoading ? (
    <>
      <ReviewItemContainer>
        <FlexContainer>
          <QAText>Question</QAText>
          {Question.answer === null ? (
            <AnswerBox>답변대기</AnswerBox>
          ) : (
            <AnswerBox>답변완료</AnswerBox>
          )}
        </FlexContainer>
        <ItemText>
          <Text>{Question.createByName} /</Text>
          <TextBold>{Question.productName} /</TextBold>
          <TextGray>{date}</TextGray>
        </ItemText>
        <AnswerText>{Question.body}</AnswerText>
        <QAText>Answer</QAText>

        {Question.answer === null ? null : (
          <>
            <FlexContainer>
              <ItemText>푸드밋</ItemText>
            </FlexContainer>
            <AnswerText>{Question.answer.body}</AnswerText>
          </>
        )}
      </ReviewItemContainer>

      <QuestionModal
        isOpenQuestion={isOpenQuestion}
        setIsOpenQuestion={setIsOpenQuestion}
        params={params}
        question={question}
      />
    </>
  ) : (
    <Loading />
  );
};

export default ProductQuestionItem;
