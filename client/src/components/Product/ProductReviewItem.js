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

const ProductReviewItem = () => {
  return (
    <ReviewItemContainer>
      <FirstInfo>
        <CreationDate>2023.01.10</CreationDate>
      </FirstInfo>
      <SecondInfo>
        <ReviewImageContainer>
          <ReviewImg
            src={
              'https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/493405785878144-be8efa56-f85d-43e2-bbe2-79dcf26f6eac.jpg'
            }
            alt=""
          />
          <Detail>
            <ReviewFlexBox>
              <Writer>최*화</Writer>/
              <ReviewProductName> 사과</ReviewProductName>
            </ReviewFlexBox>
            <Reviews>당근이 너무 싱싱하고 맛있어요!</Reviews>
          </Detail>
        </ReviewImageContainer>
      </SecondInfo>
    </ReviewItemContainer>
  );
};
export default ProductReviewItem;
