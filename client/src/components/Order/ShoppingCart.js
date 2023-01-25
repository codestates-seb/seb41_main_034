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

  return (
    <CartContainer isOpenCart={isOpenCart}>
      <CartHeader>
        <h2>장바구니</h2>
      </CartHeader>
      <CartList>
        {cart.map((el) => (
          <CartItem cart={el} key={el.id} />
        ))}
      </CartList>
      <OrderAmount>주문금액: 108,000원</OrderAmount>
      <CartFooter>
        <Link to="/order" onClick={() => setIsOpenCart(false)}>
          주문하기
        </Link>
      </CartFooter>
    </CartContainer>
  );
};

export default ShoppingCart;
