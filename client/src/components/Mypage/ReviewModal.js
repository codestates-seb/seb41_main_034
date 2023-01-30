import {
  CompletButton,
  BigInput,
  MiddleContainer,
  MiddleText,
  CancleImgContainer,
  ReviewNotice,
  ReviewModalWrapper,
  ReviewModalContainer,
  ReviewWrapper
} from '../../styles/productStyle';
import { ReactComponent as CancelIcon } from '../../assets/icons/cancleIcon.svg';
import { authAPI } from '../../api/customAxios';
import { useState } from 'react';

const ReviewModal = ({ isOpenReview, setIsOpenReview, productId, orderId }) => {
  const [content, setContent] = useState('');

  const handleReviewClose = () => {
    setIsOpenReview(false);
  };

  const Complete = () => {
    const body = {
      orderId: orderId,
      productId: productId,
      body: content
    };
    const reviewPostAPI = async (body) => {
      await authAPI.post(`/review`, body);
    };
    reviewPostAPI(body);
    setIsOpenReview(false);
    alert('후기 작성을 완료했습니다.');
  };

  return (
    <>
      <ReviewModalWrapper
        onClick={handleReviewClose}
        isOpenReview={isOpenReview}
      />

      <ReviewModalContainer isOpenReview={isOpenReview}>
        <CancleImgContainer>
          <CancelIcon onClick={handleReviewClose} />
        </CancleImgContainer>
        <ReviewWrapper>
          <MiddleText>후기작성</MiddleText>
          <MiddleContainer>
            <BigInput
              onChange={(e) => setContent(e.target.value)}
              id="Review"
              aria-label="후기내용을 입력하세요."
              placeholder="후기내용을 입력하세요."
            />
          </MiddleContainer>
          <MiddleContainer>
            <ReviewNotice>작성시 유의사항</ReviewNotice>
            <ReviewNotice>
              일반 식품의 효능이나 효과 등에 오해의 소지가 있는 내용을 작성 시
              검토 후 비공개 조치가 될 수 있습니다.
            </ReviewNotice>
            <ReviewNotice>
              반품/환불/기타 상품문의는 문의로 가능합니다.
            </ReviewNotice>
          </MiddleContainer>
          <MiddleContainer>
            <CompletButton onClick={Complete}>완료</CompletButton>
          </MiddleContainer>
        </ReviewWrapper>
      </ReviewModalContainer>
    </>
  );
};

export default ReviewModal;
