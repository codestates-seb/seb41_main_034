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

const ProductQuestionItem = () => {
  // {Question}
  // 16:삼항연산자, 18,19,24:뿌려주기
  return (
    <ReviewItemContainer>
      <FlexContainer>
        <QAText>Question</QAText>
        <AnswerBox>답변완료</AnswerBox>
      </FlexContainer>
      <ItemText>
        <Text>김응찬</Text>/<TextBold>바나나</TextBold>/
        <TextGray>2023. 01. 10</TextGray>
      </ItemText>
      <AnswerText>해당 제품에 대한 배송이 너무 느려요.</AnswerText>
      <QAText>Answer</QAText>

      <FlexContainer>
        <ItemText>푸드밋</ItemText>
      </FlexContainer>
      <AnswerText>죄송합니다. 빠른 시일 내에 처리해드리겠습니다.</AnswerText>
    </ReviewItemContainer>
  );
};

export default ProductQuestionItem;
