import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { CarouselContainer } from '../../styles/productStyle';

const SliderData = [
  'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
  'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
];

const ResponsiveCarousel = () => {
  const settings = {
    autoPlay: true,
    infiniteLoop: true,
    interval: 3000,
    showStatus: false,
    showIndicators: false,
    showThumbs: false,
    swipeable: true,
    dynamicHeight: true
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
