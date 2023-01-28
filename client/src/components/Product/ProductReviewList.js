import {
  ReviewListContainer,
  ProductDetailContainer,
  ProductDetailHeader,
  ProductDetailTitle,
  TabInput
} from '../../styles/productStyle';
import ProductReviewItem from './ProductReviewItem';
import { useEffect, useState } from 'react';
import { authAPI } from '../../api/customAxios';
import { useParams } from 'react-router-dom';

const ProductReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const params = useParams();

  useEffect(() => {
    const reviewAPI = async (productId) => {
      const result = await authAPI.get(`/product/${productId}/review`);
      setReviews(result.data.data.content);
    };
    reviewAPI(params.productId);
  }, [params.productId]);

  return (
    <>
      <ProductDetailContainer>
        <TabInput id="review" readOnly />
        <ProductDetailHeader>
          <ProductDetailTitle>후기</ProductDetailTitle>
        </ProductDetailHeader>

        <ReviewListContainer>
          {reviews.map((e, idx) => (
            <ProductReviewItem key={idx} review={e} />
          ))}
        </ReviewListContainer>
      </ProductDetailContainer>
    </>
  );
};
export default ProductReviewList;
