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
  width: 100%;
  justify-content: space-between;

  svg {
    width: 1px;
    fill: ${(props) => props.theme.activeColor};
  }
`;

const LeftCotainer = styled.div`
  width: 100%;
  max-width: 363px;
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
  width: 100%;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
    fill: ${(props) => props.theme.blackColor};
  }
`;

const LeftCotainer2 = styled.div`
  width: 100%;
  max-width: 363px;
`;

const Text2 = styled.button`
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

const NavContainer = styled.div`
  position: relative;
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
  font-size: 12px;
  background-color: ${(props) => props.theme.whiteColor};

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
    margin-top: 19px;
    justify-content: center;
    align-items: center;
    font-size: 4px;
    zoom: 0.7;

    svg {
      display: none;
    }
  }
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
  NavContainer,
  CatagoryBox,
  Container,
  Title,
  SubTitle
};
