import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  OrderPaymentWrapper,
  OrderPaymentContainer,
  OrderReceipt,
  ReceiptContainer,
  ReceiptAmount,
  PaymentContainer,
  ReceiptTitle,
  ReceiptPayment,
  OrderButton,
  OrderButtonContainer,
  ShippingCotainer,
  ShippingInfo,
  OrderDisabledButton
} from '../../styles/orderStyle';

const OrderPayment = ({ onClickOrder, shippingFee, setShoppingFee }) => {
  const cart = useSelector((state) => state.order.cart);
  const orderAmount = useSelector((state) => state.order.orderAmount);
  const accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    const cartCheckFilter = cart.filter((el) => el.check === true)[0];

    setShoppingFee(
      orderAmount >= 10000 ||
        cart[0] === undefined ||
        cartCheckFilter === undefined
        ? 0
        : 3000
    );
  }, [cart, orderAmount, setShoppingFee]);

  return (
    <OrderPaymentWrapper>
      <OrderPaymentContainer>
        <OrderReceipt>
          <ReceiptContainer>
            <ReceiptAmount>총 상품금액</ReceiptAmount>
            <ReceiptAmount>
              {orderAmount.toLocaleString('ko-KR')}원
            </ReceiptAmount>
          </ReceiptContainer>

          <ReceiptContainer>
            <ShippingCotainer>
              <ReceiptAmount>총 배송비</ReceiptAmount>
              <ShippingInfo>(10,000원 이상 주문 시 배송비 무료)</ShippingInfo>
            </ShippingCotainer>
            <ReceiptAmount>
              +{shippingFee.toLocaleString('ko-KR')}원
            </ReceiptAmount>
          </ReceiptContainer>

          <PaymentContainer>
            <ReceiptTitle>결제금액</ReceiptTitle>
            <ReceiptPayment>
              {(orderAmount + shippingFee).toLocaleString('ko-KR')}원
            </ReceiptPayment>
          </PaymentContainer>
        </OrderReceipt>

        <OrderButtonContainer>
          {accessToken ? (
            <OrderButton type="button" onClick={onClickOrder}>
              결제하기
            </OrderButton>
          ) : (
            <OrderDisabledButton type="button" disabled>
              로그인 후 결제가능
            </OrderDisabledButton>
          )}
        </OrderButtonContainer>
      </OrderPaymentContainer>
    </OrderPaymentWrapper>
  );
};

export default OrderPayment;
