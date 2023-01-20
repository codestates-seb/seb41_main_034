import {
  OrderPaymentWrapper,
  OrderPaymentContainer,
  OrderReceipt,
  ReceiptContainer,
  ReceiptAmount,
  PaymentContainer,
  ReceiptTitle,
  ReceiptPayment,
  OrderButton
} from '../../styles/orderStyle';

function OrderPayment() {
  return (
    <OrderPaymentWrapper>
      <OrderPaymentContainer>
        <OrderReceipt>
          <ReceiptContainer>
            <ReceiptAmount>총 상품금액</ReceiptAmount>
            <ReceiptAmount>
              {`${(120000).toLocaleString('ko-KR')}`}원
            </ReceiptAmount>
          </ReceiptContainer>

          <ReceiptContainer>
            <ReceiptAmount>총 배송비</ReceiptAmount>
            <ReceiptAmount>
              {`+${(3000).toLocaleString('ko-KR')}`}원
            </ReceiptAmount>
          </ReceiptContainer>

          <ReceiptContainer>
            <ReceiptAmount>총 할인금액</ReceiptAmount>
            <ReceiptAmount>{`-${(0).toLocaleString('ko-KR')}`}원</ReceiptAmount>
          </ReceiptContainer>

          <PaymentContainer>
            <ReceiptTitle>결제금액</ReceiptTitle>
            <ReceiptPayment>
              {`${(123000).toLocaleString('ko-KR')}`}원
            </ReceiptPayment>
          </PaymentContainer>
        </OrderReceipt>

        <OrderButton>주문하기</OrderButton>
      </OrderPaymentContainer>
    </OrderPaymentWrapper>
  );
}

export default OrderPayment;
