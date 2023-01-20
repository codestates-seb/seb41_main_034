import { useState } from 'react';
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
  const [isOpenOrder, setIsOpenOrder] = useState(false);

  return (
    <>
      <ProductWrapper>
        <ProductContent>
          <ProductInfo />
          <ItemQuestionList />
        </ProductContent>

        <ProductOrder>
          <OrderProduct />
        </ProductOrder>

        <ProductButtonContainer>
          <OrderButton onClick={() => setIsOpenOrder(true)}>
            구매하기
          </OrderButton>
        </ProductButtonContainer>
      </ProductWrapper>
    </>
  );
};

export default Product;
