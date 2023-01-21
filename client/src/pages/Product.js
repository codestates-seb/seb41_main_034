import { useState } from 'react';
import ProductInfo from '../components/Product/ProductInfo';
import ItemQuestionList from '../components/Product/ItemQuestionList';
import OrderProduct from '../components/Order/OrderProduct';
import OrderModal from '../components/Order/OrderModal';
import {
  ProductWrapper,
  ProductContent,
  ProductOrder,
  ProductButtonContainer,
  ProductModalWrapper,
  ProductModalCancle
} from '../styles/productStyle';
import { OrderButton, DeleteButton } from '../styles/orderStyle';
import { ReactComponent as DeleteIcon } from '../assets/icons/cancleIcon.svg';

const Product = () => {
  const [isOpenOrder, setIsOpenOrder] = useState(false);

  return (
    <>
      <ProductModalWrapper
        isOpenOrder={isOpenOrder}
        onClick={() => setIsOpenOrder(false)}
      >
        <ProductModalCancle>
          <DeleteButton>
            <DeleteIcon />
          </DeleteButton>
        </ProductModalCancle>
      </ProductModalWrapper>
      <OrderModal isOpenOrder={isOpenOrder} />

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
