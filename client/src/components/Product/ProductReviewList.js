import {
  ReviewListContainer,
  ProductDetailContainer,
  ProductDetailHeader,
  ProductDetailTitle
} from '../../styles/productStyle';
import ProductReviewItem from './ProductReviewItem';

const ProductReviewList = () => {
  return (
    <>
      <ProductDetailContainer>
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
