import { Link } from 'react-router-dom';
import {
  CartContainer,
  CartHeader,
  CartContent,
  CartFooter
} from '../../styles/shoppingCartStyle';

const ShoppingCart = ({ isOpenCart }) => {
  return (
    <CartContainer isOpenCart={isOpenCart}>
      <CartHeader>
        <h2>장바구니</h2>
      </CartHeader>
      <CartContent></CartContent>
      <CartFooter>
        <Link to="/order">주문하기</Link>
      </CartFooter>
    </CartContainer>
  );
};

export default ShoppingCart;