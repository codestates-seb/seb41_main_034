import styled from 'styled-components';
//ItemQuestionList
const ListWrapper = styled.div`
  display: flex;
  width: 100%;
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
  margin: 73px 0 0 16px;
  font-size: 30px;

  @media ${(props) => props.theme.tablet} {
    font-size: 26px;
  }

  @media ${(props) => props.theme.mobile} {
    margin: 56px 0 0 4px;
    font-size: 22px;
  }
`;

const SubTitleText = styled.div`
  margin: 22px 0 21px 16px;
  font-size: 12px;

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }

  @media ${(props) => props.theme.mobile} {
    display: none;
    margin: 12px 0 12px 4px;
    font-size: 8px;
  }
`;

const QuestionContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 16px 0 16px 0;
`;

const FlexContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.grayColor};

  @media ${(props) => props.theme.mobile} {
    justify-content: flex-end;
  }
`;

const QuestionButton = styled.button`
  display: flex;
  width: 131px;
  height: 43px;
  margin-right: 4px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.primaryColor};

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
      transition: 0.5s;
    }
  }

  @media ${(props) => props.theme.tablet} {
    width: 80px;
    height: 30px;
    font-size: 10px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 52px;
    height: 15px;
    margin: 0 16px 8px 0;
    font-size: 8px;
  }
`;
//ItemQuestion
const FlexContainer2 = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  align-items: center;
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
  margin: 8px 8px 0 8px;
  font-size: 12px;

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }
`;

const AnswerText = styled.div`
  margin: 20px 0 20px 24px;
  font-size: 12px;

  @media ${(props) => props.theme.tablet} {
    font-size: 12px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }
`;

const AnswerBox = styled.div`
  padding: 2px 4px 2px 4px;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 4px;
  color: ${(props) => props.theme.whiteColor};
  font-size: 8px;

  @media ${(props) => props.theme.tablet} {
    font-size: 4px;
  }

  @media ${(props) => props.theme.mobile} {
    padding: 1px;
    font-size: 10px !important;
    zoom: 0.8;
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
