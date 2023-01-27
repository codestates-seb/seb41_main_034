import {
  ReviewListContainer,
  ProductDetailContainer,
  ProductDetailHeader,
  ProductDetailTitle,
  TabInput
} from '../../styles/productStyle';
import ProductReviewItem from './ProductReviewItem';
import { reviewGetAPI } from '../../api/review';
import { useEffect, useState } from 'react';

const ProductReviewList = () => {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    const Reviews = async () => {
      const data = await reviewGetAPI(1);
      setReviews(data);
    };
    Reviews();
  }, []);

  return (
    <>
      <ProductDetailContainer>
        <TabInput id="review" readOnly />
        <ProductDetailHeader>
          <ProductDetailTitle>후기</ProductDetailTitle>
        </ProductDetailHeader>

        <ReviewListContainer>
          <ProductReviewItem />
          <ProductReviewItem />
        </ReviewListContainer>
      </ProductDetailContainer>
    </>
  );
};
export default ProductReviewList;
