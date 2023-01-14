import {
  CarouselOuter,
  CarouselContainer,
  CarouselView
} from '../styles/carouselStyle';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Carousel1 from '../assets/icons/carousel.svg';

function CarouselComponent() {
  return (
    <>
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
    </>
  );
}

export default CarouselComponent;