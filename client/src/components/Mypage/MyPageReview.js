import {
  ReviewListContainer,
  CancleImgContainer3,
  ProductImg2,
  MyPageReviewImage,
  MyPageReviewContent,
  MyPageReviewContentTopButton,
  MyPageReviewContent2,
  MyPageReviewContentText,
  MyPageReviewDelete
} from '../../styles/myPageStyle';
import MyPageHeader from './MyPageHeader';
import { ReactComponent as CancelIcon } from '../../assets/icons/cancleIcon.svg';
//   import { Link } from 'react-router-dom';

const MyPageReview = () => {
  const onRemove = () => {
    if (window.confirm('해당 상품에 대한 후기를 삭제하시겠습니까?')) {
      alert('삭제되었습니다');
    } else {
      alert('취소했습니다.');
    }
  };
  const textLengthOverCut = (txt, len, lastTxt) => {
    if (len === '' || len === null) {
      // 기본값
      len = 20;
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
      <MyPageHeader title={'나의후기'} />
      <ReviewListContainer>
        <MyPageReviewImage>
          <ProductImg2
            src={
              'https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/493405785878144-be8efa56-f85d-43e2-bbe2-79dcf26f6eac.jpg'
            }
            alt=""
          />
        </MyPageReviewImage>
        <MyPageReviewContent>
          <MyPageReviewContentTopButton>
            {textLengthOverCut(
              '구매한 상품에 대한 후기 제목은 구매한 상품에 대한 후기 제목은 구매한 상품에 대한 후기 제목은 구매한 상품에 대한 후기 제목은',
              20,
              '...'
            )}
          </MyPageReviewContentTopButton>
          <MyPageReviewContent2>
            <MyPageReviewContentText>작성일</MyPageReviewContentText>
            <MyPageReviewContentText>2023.01.02</MyPageReviewContentText>
            <MyPageReviewContentText>상품명 : 사과</MyPageReviewContentText>
          </MyPageReviewContent2>
        </MyPageReviewContent>
        <MyPageReviewDelete>
          <CancleImgContainer3>
            <CancelIcon onClick={onRemove} alt="후기 삭제 버튼입니다" />
          </CancleImgContainer3>
        </MyPageReviewDelete>
      </ReviewListContainer>
    </>
  );
};

export default MyPageReview;
