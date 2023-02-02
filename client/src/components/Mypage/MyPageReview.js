import {
  ReviewListContainer,
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
import { useNavigate } from 'react-router-dom';

const MyPageReview = ({ userReview }) => {
  const navigate = useNavigate();
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
      len = 30;
    }
    if (lastTxt === '' || lastTxt === null) {
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
          <button
            type="button"
            onClick={() => navigate(`/product/${userReview.productId}`)}
          >
            <ProductImg2 src={userReview.productImageUrl} alt="" />
          </button>
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
        </ReviewRightContainer>

        <MyPageReviewDelete>
          <MyReviewDeleteButton onClick={onRemove} alt="후기 삭제 버튼입니다">
            삭제
          </MyReviewDeleteButton>
          <MyReviewEditButton
            alt="후기 수정 버튼입니다."
            onClick={() => setIsEditModal(true)}
          >
            수정
          </MyReviewEditButton>
        </MyPageReviewDelete>
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
