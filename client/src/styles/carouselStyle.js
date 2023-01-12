import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
  background-color: blue;
`;
export const Container = styled.div`
  /* display: flex; */
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  margin: auto;
  background-color: aqua;
`;

export const CarouselOuter = styled.div`
  /* background-color: red; */
  //Desktop
  width: 1024px;
  margin: auto;
  //Tablet
  @media ${(props) => props.theme.tablet} {
    width: 400px;
  }
  //Mobile
  @media ${(props) => props.theme.mobile} {
    width: 90%;
  }
`;

export const CarouselContainer = styled.div`
  //Desktop
  width: 100%;
  //Tablet
  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
  //Mobile
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

export const CarouselView = styled.div`
  //Desktop
  width: 1024px;
  height: 500px;
  margin: auto;
  //Tablet
  @media ${(props) => props.theme.tablet} {
    width: 400px;
    height: 500px;
    margin: auto;
  }
  //Mobile
  @media ${(props) => props.theme.mobile} {
    width: 90%;
    margin: auto;
  }
`;
export const Footer = styled.div`
  width: 100%;
  height: 320px;
  background-color: red;
`;
