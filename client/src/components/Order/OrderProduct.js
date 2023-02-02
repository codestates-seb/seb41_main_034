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

const OrderProduct = ({ count, setCount, product }) => {
  const dispatch = useDispatch();

  const onClickAddCart = (e) => {
    e.preventDefault();

    dispatch(
      addCart({
        productId: product.id,
        imageUrl: product.imageUrls[0],
        productName: product.name,
        price: product.price,
        quantity: count
      })
    );
  };

  return (
    <OrderPaymentContainer>
      <OrderReceipt>
        <ReceiptContainer>
          <ReceiptAmount>{product.name}</ReceiptAmount>
          <ProductCounter count={count} setCount={setCount} />
        </ReceiptContainer>

        <PaymentContainer>
          <ReceiptTitle>주문금액</ReceiptTitle>
          <ReceiptPayment>
            {(product.price * count).toLocaleString('ko-KR')}원
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
