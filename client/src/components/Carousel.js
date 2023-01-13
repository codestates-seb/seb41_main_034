import {
  Header,
  Footer,
  Container,
  CarouselOuter,
  CarouselContainer,
  CarouselView,
  Img
} from '../styles/carouselStyle';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Carousel1 from '../assets/icons/Carousel.svg';
function CarouselComponent() {
  return (
    <>
      <Header></Header>
      <Container>
        {/* 캐러셀 영역 */}
        <CarouselOuter>
          <Carousel>
            <CarouselContainer>
              <CarouselView>
                <Img image={Carousel1} />
              </CarouselView>
            </CarouselContainer>
            <CarouselContainer>
              <CarouselView>
                <Img image={Carousel1} />
              </CarouselView>
            </CarouselContainer>
            <CarouselContainer>
              <CarouselView>
                <Img image={Carousel1} />
              </CarouselView>
            </CarouselContainer>
          </Carousel>
        </CarouselOuter>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default CarouselComponent;
