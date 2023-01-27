import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCart } from '../../store/orderSlice';
import {
  OrderModalContainer,
  OrderReceipt,
  ReceiptContainer,
  ReceiptAmount,
  PaymentContainer,
  ReceiptTitle,
  ReceiptPayment,
  CartButton,
  ProductOrderButton,
  ModalButtonContainer
} from '../../styles/orderStyle';
import ProductCounter from '../Product/ProductCounter';

const OrderModal = ({ isOpenOrder, setIsOpenOrder, count, setCount }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.order.cart);
  const cartFilter = cart.filter((el) => el.productId === 1)[0];

  const onClickAddCart = (e) => {
    e.preventDefault();

    dispatch(
      addCart({
        id: cartFilter === undefined ? cart.length + 1 : cart.length,
        productId: 1,
        img: 'https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/493405785878144-be8efa56-f85d-43e2-bbe2-79dcf26f6eac.jpg',
        name: '사과',
        price: 1000,
        count: count
      })
    );

    setIsOpenOrder(false);
  };

  return (
    <OrderModalContainer isOpenOrder={isOpenOrder}>
      <OrderReceipt>
        <ReceiptContainer>
          <ReceiptAmount>사과</ReceiptAmount>
          <ProductCounter count={count} setCount={setCount} />
        </ReceiptContainer>

        <PaymentContainer>
          <ReceiptTitle>주문금액</ReceiptTitle>
          <ReceiptPayment>
            {(1000 * count).toLocaleString('ko-KR')}원
          </ReceiptPayment>
        </PaymentContainer>
      </OrderReceipt>

      <ModalButtonContainer>
        <CartButton onClick={onClickAddCart}>장바구니 담기</CartButton>
        <ProductOrderButton onClick={onClickAddCart}>
          <Link to={'/order'}>주문하기</Link>
        </ProductOrderButton>
      </ModalButtonContainer>
    </OrderModalContainer>
  );
};

export default OrderModal;
