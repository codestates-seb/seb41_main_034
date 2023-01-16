import styled from 'styled-components';
//ItemQuestionList
const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ListContainer = styled.div`
  width: 100%;
  max-width: 1024px;

  @media ${(props) => props.theme.tablet} {
    max-width: 638px;
  }
`;

const TitleText = styled.div`
  width: 100%;
  font-size: 30px;
  margin: 73px 0 0 0;
  margin-left: 16px;

  @media ${(props) => props.theme.tablet} {
    font-size: 26px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 22px;
  }
`;

const SubTitleText = styled.div`
  font-size: 16px;
  margin: 22px 0 21px 0;
  margin-left: 16px;

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }
`;

const QuestionContainer = styled.div`
  width: 100%;
  max-width: 1024px;
`;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.grayColor};
`;

const QuestionButton = styled.button`
  width: 131px;
  height: 43px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 4px;
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.primaryColor};

  @media ${(props) => props.theme.tablet} {
    width: 80px;
    height: 30px;
    font-size: 12px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 52px;
    height: 15px;
    font-size: 8px;
    margin-right: 16px;
  }
`;
//ItemQuestion
const FlexContainer2 = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  align-items: center;
  margin-left: 4px;
`;

const QAText = styled.div`
  font-size: 16px;
  color: ${(props) => props.theme.primaryColor};
  margin: 8px 8px 8px 0;

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }
`;

const ItemText = styled.div`
  font-size: 16px;
  margin: 8px 8px 8px 0;

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }
`;

const AnswerText = styled.div`
  font-size: 16px;
  margin: 8px 0 8px 24px;

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }
`;

const AnswerBox = styled.div`
  width: 80px;
  height: 22px;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 8px;
  color: ${(props) => props.theme.whiteColor};
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.tablet} {
    width: 60px;
    height: 16px;
    font-size: 12px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 36px;
    height: 12px;
    font-size: 4px;
  }
`;
export {
  QuestionButton,
  FlexContainer,
  QuestionContainer,
  SubTitleText,
  TitleText,
  ListContainer,
  ListWrapper,
  FlexContainer2,
  QAText,
  ItemText,
  AnswerText,
  AnswerBox
};
