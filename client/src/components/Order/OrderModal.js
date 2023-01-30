import { useDispatch } from 'react-redux';
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
