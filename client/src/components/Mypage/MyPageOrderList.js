import {
  OrderListContainer,
  LeftContent,
  CenterContent,
  RightContent,
  ProductName,
  OrderListPrice,
  OrderQuantity,
  OrderStatus,
  ProductImg
} from '../../styles/myPageStyle';
// import { Link } from 'react-router-dom';

const OrderList = () => {
  return (
    <>
      <OrderListContainer>
        <LeftContent>
          <ProductImg
            src={
              'https://thumbnail9.coupangcdn.com/thumbnails/remote/135x135ex/image/retail/images/2021/11/15/17/5/92006a2c-bb1e-4aa5-8414-71d1514d2588.jpg'
            }
            alt=""
          />
        </LeftContent>
        <CenterContent>
          <OrderStatus>주문완료</OrderStatus>
        </CenterContent>
        <RightContent>
          <ProductName>상품명</ProductName>
          <OrderListPrice>가격: 10000원</OrderListPrice>
          <OrderQuantity>수량: 1개</OrderQuantity>
        </RightContent>
      </OrderListContainer>
    </>
  );
};

export default OrderList;
