import {
  FlexContainer2,
  QAText,
  ItemText,
  AnswerText,
  AnswerBox
} from '../../styles/productStyle';

const ProductQuestionItem = () => {
  // {Question}
  // 16:삼항연산자, 18,19,24:뿌려주기
  return (
    <>
      <FlexContainer2>
        <QAText>Question</QAText>
        <AnswerBox>답변완료</AnswerBox>
      </FlexContainer2>
      <ItemText>김응찬/바나나/2023. 01. 10</ItemText>
      <AnswerText>해당 제품에 대한 배송이 너무 느려요.</AnswerText>
      <QAText>Answer</QAText>
      <FlexContainer2>
        <ItemText>from 푸드밋</ItemText>
      </FlexContainer2>
      <AnswerText>죄송합니다. 빠른 시일 내에 처리해드리겠습니다.</AnswerText>
    </>
  );
};

export default ProductQuestionItem;
