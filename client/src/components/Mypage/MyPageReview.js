import {
  ReviewListContainer,
  CancleImgContainer3,
  ProductImg2,
  MyPageReviewImage,
  MyPageReviewContent,
  MyPageReviewContentTopButton,
  MyPageReviewContent2,
  MyPageReviewContentText,
  MyPageReviewDelete,
  MyReviewEditButton,
  ReviewRightContainer,
  MyReviewDeleteButton
} from '../../styles/myPageStyle';
import { useState } from 'react';
import EditReviewModal from './EditReviewModal';
import { authAPI } from '../../api/customAxios';

const MyPageReview = ({ userReview }) => {
  const dater = new Date(userReview.createdAt).toLocaleDateString();
  const [isEditModal, setIsEditModal] = useState(false);

  const onRemove = () => {
    if (window.confirm('해당 상품에 대한 후기를 삭제하시겠습니까?')) {
      const DeleteReviewAPI = async (reviewId) => {
        try {
          authAPI.delete(`/review/${reviewId}`);
        } catch (error) {
          console.log(error);
        }
      };
      DeleteReviewAPI(userReview.id);
      alert('삭제되었습니다');
      window.location.reload();
    } else {
      alert('취소했습니다.');
    }
  };

  const textLengthOverCut = (txt, len, lastTxt) => {
    if (len === '' || len === null) {
      // 기본값
      len = 30;
    }
    if (lastTxt === '' || lastTxt === null) {
      // 기본값
      lastTxt = '...';
    }
    if (txt.length > len) {
      txt = txt.substr(0, len) + lastTxt;
    }
    return txt;
  };

  return (
    <>
      <ReviewListContainer>
        <MyPageReviewImage>
          <ProductImg2
            src={
              'https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/493405785878144-be8efa56-f85d-43e2-bbe2-79dcf26f6eac.jpg'
            }
            alt=""
          />
        </MyPageReviewImage>
        <ReviewRightContainer>
          <MyPageReviewContent>
            <MyPageReviewContentTopButton>
              {textLengthOverCut(`${userReview.body}`, 20, '...')}
            </MyPageReviewContentTopButton>
            <MyPageReviewContent2>
              <MyPageReviewContentText>
                {userReview.productName}
              </MyPageReviewContentText>
              <MyPageReviewContentText>/</MyPageReviewContentText>
              <MyPageReviewContentText>{dater}</MyPageReviewContentText>
            </MyPageReviewContent2>
          </MyPageReviewContent>
          <MyPageReviewDelete>
            <CancleImgContainer3>
              <MyReviewEditButton
                alt="후기 수정 버튼입니다."
                onClick={() => setIsEditModal(true)}
              >
                수정
              </MyReviewEditButton>
              <MyReviewDeleteButton
                onClick={onRemove}
                alt="후기 삭제 버튼입니다"
              >
                삭제
              </MyReviewDeleteButton>
            </CancleImgContainer3>
          </MyPageReviewDelete>
        </ReviewRightContainer>
      </ReviewListContainer>

      <EditReviewModal
        isEditModal={isEditModal}
        setIsEditModal={setIsEditModal}
        userReview={userReview}
      />
    </>
  );
};

export default MyPageReview;
