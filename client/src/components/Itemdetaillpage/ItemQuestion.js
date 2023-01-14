import {
  FlexContainer2,
  QAText,
  ItemText,
  AnswerText,
  AnswerBox
} from '../../styles/itemquestionlistStyle';

const ItemQuestion = () => {
  return (
    <>
      <FlexContainer2>
        <QAText>Question</QAText>
        <ItemText>김응찬/바나나/2023. 01. 10</ItemText>
        <AnswerBox>답변완료</AnswerBox>
      </FlexContainer2>
      <AnswerText>해당 제품에 대한 배송이 너무 느려요.</AnswerText>
      <FlexContainer2>
        <QAText>Answer</QAText>
        <ItemText>푸드밋</ItemText>
      </FlexContainer2>
      <AnswerText>죄송합니다. 빠른 시일 내에 처리해드리겠습니다.</AnswerText>
    </>
  );
};

export default ItemQuestion;
