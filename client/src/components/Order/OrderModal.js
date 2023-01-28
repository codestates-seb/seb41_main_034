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

const OrderModal = ({
  isOpenOrder,
  setIsOpenOrder,
  count,
  setCount,
  product
}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.order.cart);
  const cartFilter = cart.filter((el) => el.productId === product.id)[0];

  const onClickAddCart = (e) => {
    e.preventDefault();

    dispatch(
      addCart({
        id: cartFilter === undefined ? cart.length + 1 : cart.length,
        productId: product.id,
        img: product.imageUrls[0],
        name: product.name,
        price: product.price,
        count: count
      })
    );

    setIsOpenOrder(false);
  };

  return (
    <OrderModalContainer isOpenOrder={isOpenOrder}>
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
