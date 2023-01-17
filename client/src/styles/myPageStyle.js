import { Link } from 'react-router-dom';
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

const NavWrapper = styled.div`
  display: grid;
  width: 100%;
  margin-top: 64px;
  justify-items: center;

  @media ${(props) => props.theme.mobile} {
    padding: 0;
  }
`;

const NavContainer = styled.div`
  display: grid;
  width: 100%;
  max-width: 1024px;

  @media ${(props) => props.theme.mobile} {
    display: flex;
  }
`;

const CatagoryBox = styled(Link)`
  display: flex;
  width: 100%;
  max-width: 160px;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  font-size: 10px;
  background-color: ${(props) => props.theme.secondaryColor};

  svg {
    width: 10px;
    height: 10px;
  }

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
      color: ${(props) => props.theme.whiteColor};

      svg {
        fill: ${(props) => props.theme.whiteColor};
      }
    }
  }

  @media ${(props) => props.theme.tablet} {
    width: 120px;
    padding: 12px;
    font-size: 8px;

    svg {
      width: 8px;
      height: 8px;
    }
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    max-width: 100%;
    padding: 12px;
    justify-content: center;
    align-items: center;
    font-size: 4px;

    svg {
      display: none;
    }
  }
`;

const TopContainer = styled.div`
  display: grid;
  width: 100%;
`;

const BottomContainer = styled.div`
  display: grid;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 650px;
  padding: 30px;
`;

const Title = styled.div`
  width: 100%;
  height: 60px;
  font-size: 40px;

  @media ${(props) => props.theme.tablet} {
    font-size: 30px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 30px;
    text-align: center;
  }
`;

const SubTitle = styled.div`
  width: calc(100% - 250px);
  height: 45px;
  font-size: 30px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  margin: 0px 0px 0px auto;

  @media ${(props) => props.theme.tablet} {
    width: calc(100% - 150px);
    font-size: 20px;
  }
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
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
  MarginSpace,
  NavWrapper,
  NavContainer,
  CatagoryBox,
  TopContainer,
  BottomContainer,
  Container,
  Title,
  SubTitle
};
