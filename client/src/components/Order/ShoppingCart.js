import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  CartContainer,
  CartHeader,
  CartList,
  OrderAmount,
  CartFooter
} from '../../styles/orderStyle';
import CartItem from './CartItem';

const ShoppingCart = ({ isOpenCart, setIsOpenCart }) => {
  const cart = useSelector((state) => state.order.cart);
  const cartAmount = useSelector((state) => state.order.cartAmount);

  return (
    <CartContainer isOpenCart={isOpenCart}>
      <CartHeader>
        <h2>장바구니</h2>
      </CartHeader>
      <CartList>
        {cart.map((el, idx) => (
          <CartItem cart={el} key={idx} />
        ))}
      </CartList>
      <OrderAmount>
        주문금액: {cartAmount.toLocaleString('ko-KR')}원
      </OrderAmount>
      <CartFooter>
        <Link to="/order" onClick={() => setIsOpenCart(false)}>
          주문하기
        </Link>
      </CartFooter>
    </CartContainer>
  );
};

export default ShoppingCart;
