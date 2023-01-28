import {
  OrderListContainer,
  LeftContent,
  CenterContent,
  RightContent,
  ProductName,
  OrderListPrice,
  OrderQuantity,
  // CancleImgContainer,
  OrderStatus,
  ProductImg,
  ReviewButton
} from '../../styles/myPageStyle';
// import { ReactComponent as CancelIcon } from '../../assets/icons/cancleIcon.svg';
import { useState, useEffect } from 'react';
import ReviewModal from './ReviewModal';
import { Link } from 'react-router-dom';

const MyPageOrderItem = ({
  productId,
  image,
  name,
  price,
  quantity,
  orderState
}) => {
  const [isOpenReview, setIsOpenReview] = useState(false);

  const handleReviewOpen = () => {
    setIsOpenReview(!isOpenReview);
  };

  useEffect(() => {
    console.log(isOpenReview);
  }, [isOpenReview]);

  // const onRemove = () => {
  //   if (window.confirm('해당 상품에 대한 주문목록을 삭제하시겠습니까?')) {
  //     alert('삭제되었습니다');
  //   } else {
  //     alert('취소했습니다.');
  //   }
  // };

  const orderStateFunc = (e) => {
    const stateObj = {
      WAITING_FOR_PAYMENT: '결제 대기',
      PAYMENT_FINISHED: '결제 완료',
      PREPARING_FOR_DELIVERY: '배송 대기 중',
      SHIPPING: '배송 중',
      DELIVERED: '배송 완료',
      WAITING_FOR_CANCELLATION: '취소 대기 중',
      CANCELED: '취소 완료'
    };
    return stateObj[e];
  };

  return (
    <>
      <OrderListContainer>
        <LeftContent>
          <ProductImg
            src={
              'https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/493405785878144-be8efa56-f85d-43e2-bbe2-79dcf26f6eac.jpg'
            }
            alt=""
          />
        </LeftContent>
        <CenterContent>
          {/* 상품 상세 이동 */}
          <Link to={`/product/${productId}`}>
            <ProductName>상품명: {name}</ProductName>
          </Link>
          <OrderListPrice>가격: {price}원</OrderListPrice>
          <OrderQuantity>수량: {quantity}개</OrderQuantity>
        </CenterContent>
        <RightContent>
          {/* <CancleImgContainer>
            <CancelIcon onClick={onRemove} alt="주문목록 삭제 버튼입니다" />
          </CancleImgContainer> */}
          <OrderStatus>{orderStateFunc(orderState)}</OrderStatus>
          <ReviewButton
            onClick={handleReviewOpen}
            aria-label="후기작성 버튼입니다"
          >
            후기 작성
          </ReviewButton>
          <ReviewModal
            isOpenReview={isOpenReview}
            setIsOpenReview={setIsOpenReview}
          />
        </RightContent>
      </OrderListContainer>
    </>
  );
};

export default MyPageOrderItem;
