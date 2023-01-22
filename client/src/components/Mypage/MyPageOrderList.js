// import { ReactComponet as cancleIcon } from '../../assets/icons/cancleIcon.svg';

import {
  OrderDateContainer,
  OrderDate,
  OrderListContainer,
  LeftContent,
  CenterContent,
  RightContent,
  ProductName,
  OrderListPrice,
  OrderQuantity,
  CancleImgContainer,
  OrderStatus,
  ProductImg,
  MyQuestionButton
} from '../../styles/myPageStyle';
import { ReactComponent as CancelIcon } from '../../assets/icons/cancleIcon.svg';

const MyPageOrderList = () => {
  const onRemove = () => {
    if (window.confirm('해당 상품에 대한 후기를 삭제하시겠습니까?')) {
      alert('삭제되었습니다');
    } else {
      alert('취소했습니다.');
    }
  };
  return (
    <>
      <OrderDateContainer>
        {' '}
        <OrderDate>2023.01.07</OrderDate>
      </OrderDateContainer>

      <OrderListContainer>
        <LeftContent>
          <ProductImg
            src={
              'https://thumbnail9.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/493405785878144-be8efa56-f85d-43e2-bbe2-79dcf26f6eac.jpg'
            }
            alt=""
          />
        </LeftContent>
        <CenterContent>
          <ProductName>상품명: 사과</ProductName>
          <OrderListPrice>가격: 10000원</OrderListPrice>
          <OrderQuantity>수량: 1개</OrderQuantity>
        </CenterContent>
        <RightContent>
          <CancleImgContainer>
            <CancelIcon onClick={onRemove} alt="후기 삭제 버튼입니다" />
          </CancleImgContainer>
          <OrderStatus>주문완료</OrderStatus>
          <MyQuestionButton>문의하기</MyQuestionButton>
        </RightContent>
      </OrderListContainer>
    </>
  );
};

export default MyPageOrderList;
