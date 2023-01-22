import {
  ReviewWrapper,
  ReviewHeader,
  TopTitle,
  MiddleTiTle,
  ReviewMiddleInfo,
  ReviewQuantity,
  ReviewButton,
  ReviewListContainer
} from '../../styles/productStyle';
import ItemReview from './ItemReview';
import { useState, useEffect } from 'react';
import ReviewModal from './ReviewModal';

const ItemReviewList = () => {
  const [isOpenReview, setIsOpenReview] = useState(false);

  const handleReviewOpen = () => {
    setIsOpenReview(!isOpenReview);
  };

  useEffect(() => {
    console.log(isOpenReview);
  }, [isOpenReview]);

  return (
    <>
      <ReviewWrapper>
        <ReviewHeader>
          <TopTitle>상품후기</TopTitle>
          <MiddleTiTle>상품에 대한 후기를 남기는 공간입니다.</MiddleTiTle>
        </ReviewHeader>
        <ReviewMiddleInfo>
          <ReviewQuantity>총 리뷰 3개</ReviewQuantity>
          <ReviewButton
            onClick={handleReviewOpen}
            aria-label="후기작성 버튼입니다"
          >
            후기 쓰기
          </ReviewButton>
        </ReviewMiddleInfo>
        <ReviewListContainer>
          <ItemReview />
          <ItemReview />
          <ItemReview />
        </ReviewListContainer>
      </ReviewWrapper>

      <ReviewModal
        isOpenReview={isOpenReview}
        setIsOpenReview={setIsOpenReview}
      />
    </>
  );
};
export default ItemReviewList;
