import {
  CompletButton,
  BigInput,
  SmallInput,
  MiddleContainer,
  LeftText,
  LeftTextContainer,
  MiddleText,
  CancleImgContainer,
  ReviewNotice,
  ReviewModalWrapper,
  ReviewModalContainer,
  ReviewWrapper
} from '../../styles/productStyle';
import { ReactComponent as CancelIcon } from '../../assets/icons/cancleIcon.svg';

const ReviewModal = ({ isOpenReview, setIsOpenReview }) => {
  const handleReviewClose = () => {
    setIsOpenReview(false);
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
            <CompletButton>완료</CompletButton>
          </MiddleContainer>
        </ReviewWrapper>
      </ReviewModalContainer>
    </>
  );
};

export default ReviewModal;
