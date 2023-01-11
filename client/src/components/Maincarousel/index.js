import {
  Header,
  Footer,
  Container,
  Aside,
  Slider,
  Content
} from '../../styles/carouselStyle';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

function CarouselComponent() {
  return (
    <>
      <Header></Header>
      <Container>
        {/* <Content>
          <Aside></Aside>
        </Content>
        <Slider></Slider> */}
        {/* 캐러셀 영역 */}
        <Carousel>
          <div>
            <img src="https://avatars.mds.yandex.net/i?id=84dbd50839c3d640ebfc0de20994c30d-4473719-images-taas-consumers&n=27&h=480&w=480" />
            <p className="legend">page 1</p>
          </div>
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
            <p className="legend">page 2</p>
          </div>
          <div>
            <img src="https://www.w3schools.com/css/img_forest.jpg" />
            <p className="legend">page 3</p>
          </div>
        </Carousel>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default CarouselComponent;
