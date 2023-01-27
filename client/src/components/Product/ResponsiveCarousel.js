import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { CarouselContainer } from '../../styles/productStyle';

const SliderData = [
  'https://cdn.pixabay.com/photo/2017/09/26/13/42/apple-2788662_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/10/09/19/29/eat-2834549_1280.jpg',
  'https://cdn.pixabay.com/photo/2018/02/08/15/02/meat-3139641_1280.jpg',
  'https://cdn.pixabay.com/photo/2013/07/19/00/18/seafood-165220_1280.jpg',
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
