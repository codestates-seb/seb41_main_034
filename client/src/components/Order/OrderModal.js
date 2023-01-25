import {
  OrderModalContainer,
  OrderReceipt,
  ReceiptContainer,
  ReceiptAmount,
  PaymentContainer,
  ReceiptTitle,
  ReceiptPayment,
  CartButton,
  OrderButton,
  ModalButtonContainer
} from '../../styles/orderStyle';
import OrderCounter from './OrderCounter';

const OrderModal = ({ isOpenOrder }) => {
  return (
    <OrderModalContainer isOpenOrder={isOpenOrder}>
      <OrderReceipt>
        <ReceiptContainer>
          <ReceiptAmount>사과</ReceiptAmount>
          <OrderCounter />
        </ReceiptContainer>

        <PaymentContainer>
          <ReceiptTitle>주문금액</ReceiptTitle>
          <ReceiptPayment>
            {`${(12000).toLocaleString('ko-KR')}`}원
          </ReceiptPayment>
        </PaymentContainer>
      </OrderReceipt>

      <ModalButtonContainer>
        <CartButton>장바구니 담기</CartButton>
        <OrderButton to={'/order'}>주문하기</OrderButton>
      </ModalButtonContainer>
    </OrderModalContainer>
  );
};

export default OrderModal;
