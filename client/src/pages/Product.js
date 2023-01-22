import { useState } from 'react';
import ProductMain from '../components/Product/ProductMain';
import ProductNavbar from '../components/Product/ProductNavbar';
import ProductInfo from '../components/Product/ProductInfo';
import ProductDetail from '../components/Product/ProductDetail';
import ProductReviewList from '../components/Product/ProductReviewList';
import ProductQuestionList from '../components/Product/ProductQuestionList';
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
          <ProductMain />
          <ProductNavbar />
          <ProductInfo />
          <ProductDetail />
          <ProductReviewList />
          <ProductQuestionList />
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
