import {
  ReviewContainer,
  ReviewHeader,
  ReviewText,
  ReviewImage
} from '../../styles/productStyle';
import Carousel1 from '../assets/image/Review.png';

function Review() {
  return (
    <>
      <ReviewContainer>
        <ReviewHeader>상품리뷰</ReviewHeader>
        <ReviewText>상품 리뷰 남기는 공간입니다.</ReviewText>
        <ReviewImage image={Carousel1} />
      </ReviewContainer>
    </>
  );
}
export default Review;
