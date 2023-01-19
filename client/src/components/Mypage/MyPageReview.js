import {
  MyReviewContainer,
  ContentLeft,
  ReviewProductImage,
  ReviewProductImg,
  ContentRight,
  ReviewTitle,
  ReviewProductInfo,
  CreationDate,
  ProductName2
} from '../../styles/myPageStyle';
//   import { Link } from 'react-router-dom';

const MyReview = () => {
  return (
    <>
      <MyReviewContainer>
        <ContentLeft>
          <ReviewProductImage>
            <ReviewProductImg
              img={
                'https://thumbnail9.coupangcdn.com/thumbnails/remote/135x135ex/image/retail/images/2021/11/15/17/5/92006a2c-bb1e-4aa5-8414-71d1514d2588.jpg'
              }
            />
          </ReviewProductImage>
        </ContentLeft>
        <ContentRight>
          <ReviewTitle>구매한 상품에 대한 후기 제목</ReviewTitle>
          <ReviewProductInfo>
            <CreationDate>2023.01.02</CreationDate>
            <ProductName2>상품명: 토마토 </ProductName2>
          </ReviewProductInfo>
        </ContentRight>
      </MyReviewContainer>
    </>
  );
};

export default MyReview;
