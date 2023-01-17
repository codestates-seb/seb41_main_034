import styled from 'styled-components';
//MyQuestionList
const ListHeader = styled.div`
  display: flex;
  width: 100%;
  max-width: 702px;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => props.theme.blackColor};
  border-radius: 4px;
  background-color: ${(props) => props.theme.activeColor};
  color: ${(props) => props.theme.whiteColor};

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    max-width: 399px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`;

const LeftCotainer = styled.div`
  flex-grow: 1.5;
`;

const Text = styled.div`
  font-size: 12px;

  @media ${(props) => props.theme.tablet} {
    font-size: 8px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 4px;
  }
`;
//MyQuestion
const ListHeader2 = styled.div`
  display: flex;
  width: 702px;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => props.theme.blackColor};
  border-radius: 4px;
  color: ${(props) => props.theme.blackColor};

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    max-width: 399px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const RightContainer2 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

const LeftCotainer2 = styled.div`
  flex-grow: 1.3;
`;

const Text2 = styled.div`
  font-size: 12px;

  @media ${(props) => props.theme.tablet} {
    font-size: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 4px;
  }
`;

const MarginSpace = styled.div`
  height: 8px;
`;

export {
  ListHeader,
  RightContainer,
  LeftCotainer,
  Text,
  ListHeader2,
  RightContainer2,
  LeftCotainer2,
  Text2,
  MarginSpace
};
