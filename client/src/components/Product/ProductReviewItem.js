import {
  ReviewItemContainer,
  FirstInfo,
  ReviewProductName,
  ReviewImageContainer,
  ReviewImg,
  SecondInfo,
  Writer,
  Reviews,
  CreationDate,
  Detail,
  ReviewFlexBox
} from '../../styles/productStyle';

const ProductReviewItem = ({ review }) => {
  const date = new Date(review.createdAt).toLocaleDateString();
  console.log(review);

  return (
    <ReviewItemContainer>
      <FirstInfo>
        <CreationDate>{date}</CreationDate>
      </FirstInfo>
      <SecondInfo>
        <ReviewImageContainer>
          <ReviewImg src={review.productImageUrl} alt="" />
          <Detail>
            <ReviewFlexBox>
              <Writer>{review.createdByName}</Writer>/
              <ReviewProductName>{review.productName}</ReviewProductName>
            </ReviewFlexBox>
            <Reviews>{review.body}</Reviews>
          </Detail>
        </ReviewImageContainer>
      </SecondInfo>
    </ReviewItemContainer>
  );
};
export default ProductReviewItem;
