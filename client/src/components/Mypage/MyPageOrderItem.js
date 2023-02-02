import {
  OrderListContainer,
  LeftContent,
  CenterContent,
  RightContent,
  ProductName,
  OrderListPrice,
  OrderQuantity,
  OrderStatus,
  ProductImg,
  ReviewButton
} from '../../styles/myPageStyle';
import { useState } from 'react';
import ReviewModal from './ReviewModal';
import { Link } from 'react-router-dom';

const MyPageOrderItem = ({ product, orderId }) => {
  const [isOpenReview, setIsOpenReview] = useState(false);

  const handleReviewOpen = () => {
    setIsOpenReview(!isOpenReview);
  };

  return (
    <>
      <OrderListContainer>
        <LeftContent>
          <Link to={`/product/${product.productId}`}>
            <ProductImg src={product.imageUrl} alt="" />
          </Link>
        </LeftContent>

        <CenterContent>
          <Link to={`/product/${product.productId}`}>
            <ProductName>{product.productName}</ProductName>
          </Link>
          <OrderListPrice>{product.price * product.quantity}원 </OrderListPrice>
          <OrderQuantity>{product.quantity}개</OrderQuantity>
        </CenterContent>

        <RightContent>
          <OrderStatus>주문완료</OrderStatus>
          <ReviewButton
            onClick={handleReviewOpen}
            aria-label="후기작성 버튼입니다"
          >
            후기 작성
          </ReviewButton>
          <ReviewModal
            productId={product.productId}
            orderId={orderId}
            isOpenReview={isOpenReview}
            setIsOpenReview={setIsOpenReview}
          />
        </RightContent>
      </OrderListContainer>
    </>
  );
};

export default MyPageOrderItem;
