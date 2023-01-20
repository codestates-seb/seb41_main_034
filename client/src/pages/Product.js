import ProductInfo from '../components/Product/ProductInfo';
import ItemQuestionList from '../components/Product/ItemQuestionList';
import OrderProduct from '../components/Order/OrderProduct';
import {
  ProductWrapper,
  ProductContent,
  ProductOrder,
  ProductButtonContainer
} from '../styles/productStyle';
import { CartButton, OrderButton } from '../styles/orderStyle';

const Product = () => {
  return (
    <ProductWrapper>
      <ProductContent>
        <ProductInfo />
        <ItemQuestionList />
      </ProductContent>

      <ProductOrder>
        <OrderProduct />
      </ProductOrder>

      <ProductButtonContainer>
        <CartButton>장바구니 담기</CartButton>
        <OrderButton>주문하기</OrderButton>
      </ProductButtonContainer>
    </ProductWrapper>
  );
};

export default Product;
