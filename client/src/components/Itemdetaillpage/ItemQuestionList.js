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

const ItemQuestionList = () => {
  return (
    <ListWrapper>
      <ListContainer>
        <TitleText>상품문의</TitleText>
        <FlexContainer>
          <SubTitleText>상품에 대한 문의를 남기는 공간입니다.</SubTitleText>
          <QuestionButton>문의하기</QuestionButton>
        </FlexContainer>
        <QuestionContainer>
          <ItemQuestion />
        </QuestionContainer>
      </ListContainer>
    </ListWrapper>
  );
};

export default ItemQuestionList;
