import { useState } from 'react';
import {
  OrderPaymentContainer,
  OrderReceipt,
  ReceiptContainer,
  ReceiptAmount,
  PaymentContainer,
  ReceiptTitle,
  ReceiptPayment,
  OrderButtonContainer,
  OrderButton,
  CartButton
} from '../../styles/orderStyle';
import ProductCounter from '../Product/ProductCounter';

const OrderProduct = () => {
  const [count, setcount] = useState(1);

  return (
    <OrderPaymentContainer>
      <OrderReceipt>
        <ReceiptContainer>
          <ReceiptAmount>사과</ReceiptAmount>
          <ProductCounter count={count} setcount={setcount} />
        </ReceiptContainer>

        <PaymentContainer>
          <ReceiptTitle>주문금액</ReceiptTitle>
          <ReceiptPayment>
            {`${(12000).toLocaleString('ko-KR')}`}원
          </ReceiptPayment>
        </PaymentContainer>
      </OrderReceipt>

      <OrderButtonContainer>
        <CartButton>장바구니 담기</CartButton>
        <OrderButton to={'/order'}>주문하기</OrderButton>
      </OrderButtonContainer>
    </OrderPaymentContainer>
  );
};

export default OrderProduct;
