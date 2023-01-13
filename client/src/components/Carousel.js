import {
  Container,
  CarouselOuter,
  CarouselContainer,
  CarouselView
} from '../styles/carouselStyle';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Carousel1 from '../assets/icons/Carousel.svg';

function CarouselComponent() {
  return (
    <>
      <Container>
        <CarouselOuter>
          <Carousel>
            <CarouselContainer>
              <CarouselView image={Carousel1} />
            </CarouselContainer>
            <CarouselContainer>
              <CarouselView image={Carousel1} />
            </CarouselContainer>
            <CarouselContainer>
              <CarouselView image={Carousel1} />
            </CarouselContainer>
          </Carousel>
        </CarouselOuter>
      </Container>
    </>
  );
}

export default CarouselComponent;
