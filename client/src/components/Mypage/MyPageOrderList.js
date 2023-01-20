// import { ReactComponet as cancleIcon } from '../../assets/icons/cancleIcon.svg';

import {
  OrderListContainer,
  OrderDate,
  LeftContent,
  CenterContent,
  RightContent,
  ProductName,
  OrderListPrice,
  OrderQuantity,
  OrderStatus,
  ProductImg,
  MyQuestionButton
} from '../../styles/myPageStyle';
import { ReactComponent as CancelIcon } from '../../assets/icons/cancleIcon.svg';

const OrderList = () => {
  return (
    <>
      <OrderDate>2023.01.07</OrderDate>
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
          <ProductName>상품명</ProductName>
          <OrderListPrice>가격: 10000원</OrderListPrice>
          <OrderQuantity>수량: 1개</OrderQuantity>
        </CenterContent>
        <RightContent>
          <CancelIcon />
          <OrderStatus>주문완료</OrderStatus>
          <MyQuestionButton>문의하기</MyQuestionButton>
        </RightContent>
      </OrderListContainer>
    </>
  );
};

export default OrderList;
