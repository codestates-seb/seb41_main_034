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
import Loading from '../Layout/Loading';

const ProductQuestionItem = ({ question }) => {
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
        <Text>김응찬 /</Text>
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
          <AnswerText>
            죄송합니다. 빠른 시일 내에 처리해드리겠습니다.
          </AnswerText>
        </>
      )}
    </ReviewItemContainer>
  ) : (
    <Loading />
  );
};

export default ProductQuestionItem;
