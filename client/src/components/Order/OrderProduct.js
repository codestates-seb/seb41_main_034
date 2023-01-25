import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCart } from '../../store/orderSlice';
import {
  OrderPaymentContainer,
  OrderReceipt,
  ReceiptContainer,
  ReceiptAmount,
  PaymentContainer,
  ReceiptTitle,
  ReceiptPayment,
  OrderButtonContainer,
  ProductOrderButton,
  CartButton
} from '../../styles/orderStyle';
import ProductCounter from '../Product/ProductCounter';

const OrderProduct = ({ count, setCount }) => {
  const dispatch = useDispatch();

  const onClickAddCart = (e) => {
    e.preventDefault();

    dispatch(
      addCart({
        id: 1,
        img: 'https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/493405785878144-be8efa56-f85d-43e2-bbe2-79dcf26f6eac.jpg',
        name: '사과',
        price: 1000,
        priceAmount: 1000,
        count: count
      })
    );
  };

  return (
    <OrderPaymentContainer>
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

      <OrderButtonContainer>
        <CartButton type="button" onClick={onClickAddCart}>
          장바구니 담기
        </CartButton>
        <ProductOrderButton type="button" onClick={onClickAddCart}>
          <Link to={'/order'}>주문하기</Link>
        </ProductOrderButton>
      </OrderButtonContainer>
    </OrderPaymentContainer>
  );
};

export default OrderProduct;
