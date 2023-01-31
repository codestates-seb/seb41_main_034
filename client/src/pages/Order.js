import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allCheckCart, deleteCheckCart } from '../store/orderSlice';
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
  MobileOrderButton,
  MobileDisabledButton
} from '../styles/orderStyle';
import { authAPI } from '../api/customAxios';
import { useEffect } from 'react';

const Order = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = localStorage.accessToken;
  const userId = localStorage.userId;
  const cart = useSelector((state) => state.order.cart);
  const orderAmount = useSelector((state) => state.order.orderAmount);
  const [shippingFee, setShoppingFee] = useState(3000);
  const [user, setUser] = useState(null);

  const userAPI = async () => {
    try {
      const res = await authAPI.get(`/user/${userId}`);
      setUser(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const orderAPI = async () => {
    const body = JSON.stringify({
      products: cart
        .filter((el) => el.check === true)
        .map((el) => ({
          productId: el.productId,
          price: el.price,
          quantity: el.quantity
        })),
      recipient: user.displayName,
      address: user.address
    });

    try {
      await authAPI.post('ordering', body);
      dispatch(
        deleteCheckCart({
          product: cart.filter((el) => el.check === true)
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const onClickOrder = () => {
    const { IMP } = window;
    IMP.init('imp04631732');
    IMP.request_pay(
      {
        pg: 'html5_inicis',
        pay_method: 'card',
        merchant_uid: 'merchant_' + new Date().getTime(),
        name: '푸드밋',
        amount: orderAmount + shippingFee,
        buyer_name: `${user.displayName}`,
        buyer_email: ''
      },
      (rsp) => {
        if (rsp.success) {
          alert('결제완료');
          orderAPI();
          navigate('/mypage/order');
        } else {
          alert(rsp.error_msg);
        }
      }
    );
  };

  useEffect(() => {
    accessToken !== undefined && userAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessToken]);

  return (
    <>
      <OrderContainer>
        <OrderListContianer>
          <OrderListHeader>
            <CheckBox>
              <CheckInput
                type={'checkbox'}
                id="checkAll"
                checked={
                  cart.filter((el) => el.check === true)[0] === undefined
                    ? false
                    : true
                }
                onChange={() => dispatch(allCheckCart())}
              />
              <CheckLabel htmlFor="checkAll">모두선택</CheckLabel>
            </CheckBox>
            <CheckDelete
              type={'button'}
              onClick={() =>
                dispatch(
                  deleteCheckCart({
                    product: cart.filter((el) => el.check === true)
                  })
                )
              }
            >
              선택삭제
            </CheckDelete>
          </OrderListHeader>
          <OrderList>
            {cart.map((el, idx) => (
              <OrderItem cart={el} key={idx} />
            ))}
          </OrderList>
        </OrderListContianer>

        <OrderPayment
          onClickOrder={onClickOrder}
          shippingFee={shippingFee}
          setShoppingFee={setShoppingFee}
        />

        {accessToken ? (
          <MobileOrderButton type="button" onClick={onClickOrder}>
            결제하기
          </MobileOrderButton>
        ) : (
          <MobileDisabledButton type="button" disabled>
            로그인 후 결제가능
          </MobileDisabledButton>
        )}
      </OrderContainer>
    </>
  );
};

export default Order;
