import styled from 'styled-components';

const CarouselOuter = styled.div`
  width: 100%;
  max-width: 1024px;
`;

const CarouselContainer = styled.div`
  width: 100%;
`;

const CarouselView = styled.div`
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

export { CarouselOuter, CarouselContainer, CarouselView };
