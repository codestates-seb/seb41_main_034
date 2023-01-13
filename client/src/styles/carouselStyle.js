import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: gray;
`;

export const CarouselOuter = styled.div`
  width: 100%;
  max-width: 1024px;
`;

export const CarouselContainer = styled.div`
  width: 100%;
`;

export const CarouselView = styled.div`
  width: 100%;
  height: 700px;
  background-image: url(${(props) => props.image});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;

  @media ${(props) => props.theme.tablet} {
    height: 442px;
  }

  @media ${(props) => props.theme.mobile} {
    height: 256px;
  }
`;
