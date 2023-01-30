import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { CarouselContainer } from '../../styles/productStyle';

const SliderData = [
  'https://cdn.pixabay.com/photo/2017/05/23/22/36/vegetables-2338824_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/02/08/15/02/meat-3139641_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/06/04/16/17/prawns-2371440_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/12/29/10/45/mixed-1938302_1280.jpg'
];

const ResponsiveCarousel = () => {
  const settings = {
    autoPlay: true,
    infiniteLoop: true,
    interval: 3000,
    showStatus: false,
    showIndicators: false,
    showThumbs: false,
    swipeable: true
  };

  return (
    <CarouselContainer>
      <Carousel {...settings}>
        {SliderData.map((el, idx) => {
          return (
            <div key={idx}>
              <img src={el} alt="" />
            </div>
          );
        })}
      </Carousel>
    </CarouselContainer>
  );
};

export default ResponsiveCarousel;
