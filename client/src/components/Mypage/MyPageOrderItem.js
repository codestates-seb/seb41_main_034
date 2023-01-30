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
  ReviewButton,
  ShippingInfo,
  Receiver,
  ShippingAddress
} from '../../styles/myPageStyle';
import { useState } from 'react';
import ReviewModal from './ReviewModal';
import { Link } from 'react-router-dom';

const MyPageOrderItem = ({
  productId,
  image,
  name,
  price,
  quantity,
  recipient,
  address,
  orderId
}) => {
  const [isOpenReview, setIsOpenReview] = useState(false);

  const handleReviewOpen = () => {
    setIsOpenReview(!isOpenReview);
  };

  return (
    <>
      <OrderListContainer>
        <LeftContent>
          <ProductImg
            src={
              image
              // 'https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/493405785878144-be8efa56-f85d-43e2-bbe2-79dcf26f6eac.jpg'
            }
            alt=""
          />
        </LeftContent>
        <CenterContent>
          {/* 상품 상세 이동 */}
          <Link to={`/product/${productId}`}>
            <ProductName>{name}</ProductName>
          </Link>
          <OrderListPrice>{price}원 </OrderListPrice>
          <OrderQuantity>{quantity}개</OrderQuantity>
        </CenterContent>
        <ShippingInfo>
          <Receiver>받는사람: {recipient}</Receiver>
          <ShippingAddress>주소: {address}</ShippingAddress>
        </ShippingInfo>
        <RightContent>
          <OrderStatus>주문완료</OrderStatus>
          <ReviewButton
            onClick={handleReviewOpen}
            aria-label="후기작성 버튼입니다"
          >
            후기 작성
          </ReviewButton>
          <ReviewModal
            productId={productId}
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
