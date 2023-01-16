import { Link } from 'react-router-dom';
import {
  CartContainer,
  CartHeader,
  CartContent,
  OrderAmount,
  CartFooter
} from '../../styles/order';
import MyCartItem from './MyCartItem';

const ShoppingCart = ({ isOpenCart, setIsOpenCart }) => {
  return (
    <CartContainer isOpenCart={isOpenCart}>
      <CartHeader>
        <h2>장바구니</h2>
      </CartHeader>
      <CartContent>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((el, idx) => (
          <MyCartItem key={idx} />
        ))}
      </CartContent>
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
