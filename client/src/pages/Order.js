import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const cart = useSelector((state) => state.order.cart);
  const orderAmount = useSelector((state) => state.order.orderAmount);
  const [shippingFee, setShoppingFee] = useState(3000);

  const onClickOrder = (e) => {
    const { IMP } = window;
    IMP.init('imp04631732');

    IMP.request_pay(
      {
        pg: 'html5_inicis',
        pay_method: 'card',
        merchant_uid: 'merchant_' + new Date().getTime(),
        name: '푸드밋',
        amount: orderAmount + shippingFee,
        buyer_name: '구매자이름',
        buyer_email: ''
      },
      (rsp) => {
        if (rsp.success) {
          alert('결제완료');
          navigate('/mypage/orderlist');
        } else {
          alert(rsp.error_msg);
        }
      }
    );
  };

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
          {cart.map((el) => (
            <OrderItem cart={el} key={el.id} />
          ))}
        </OrderList>
      </OrderListContianer>

      <OrderPayment
        onClickOrder={onClickOrder}
        shippingFee={shippingFee}
        setShoppingFee={setShoppingFee}
      />

      <MobileOrderButton type="button" onClick={onClickOrder}>
        결제하기
      </MobileOrderButton>
    </OrderContainer>
  );
};

export default Order;
