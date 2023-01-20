import OrderItem from '../components/Order/OrderItem';
import OrderPayment from '../components/Order/OrderPayment';
import {
  OrderContainer,
  OrderList,
  CheckBox,
  CheckInput,
  CheckLabel,
  CheckDelete,
  OrderListContianer,
  OrderListHeader,
  MobileOrderButton
} from '../styles/orderStyle';

const Order = () => {
  return (
    <OrderContainer>
      <OrderListContianer>
        <OrderListHeader>
          <CheckBox>
            <CheckInput id="checkAll" type={'checkbox'} />
            <CheckLabel htmlFor="checkAll">모두선택</CheckLabel>
          </CheckBox>
          <CheckDelete type={'button'}>선택삭제</CheckDelete>
        </OrderListHeader>
        <OrderList>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, idx) => (
            <OrderItem key={idx} />
          ))}
        </OrderList>
      </OrderListContianer>

      <OrderPayment />

      <MobileOrderButton>주문하기</MobileOrderButton>
    </OrderContainer>
  );
};

export default Order;
