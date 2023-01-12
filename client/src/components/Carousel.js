import {
  Header,
  Footer,
  Container,
  CarouselOuter,
  CarouselContainer,
  CarouselView
} from '../styles/carouselStyle';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

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
                <img src="https://avatars.mds.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d-4473719-images-taas-consumers" />
                {/* <p className="legend">page 1</p> */}
              </CarouselView>
            </CarouselContainer>
            <CarouselContainer>
              <CarouselView>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
                {/* <p className="legend">page 2</p> */}
              </CarouselView>
            </CarouselContainer>
            <CarouselContainer>
              <CarouselView>
                <img src="https://www.w3schools.com/css/img_forest.jpg" />
                {/* <p className="legend">page 3</p> */}
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
