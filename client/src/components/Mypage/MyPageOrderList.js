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
  ProductImg
} from '../../styles/myPageStyle';
import MyPageHeader from './MyPageHeader';
import { ReactComponent as CancelIcon } from '../../assets/icons/cancleIcon.svg';

const MyPageOrderList = () => {
  const onRemove = () => {
    if (window.confirm('해당 상품에 대한 주문목록을 삭제하시겠습니까?')) {
      alert('삭제되었습니다');
    } else {
      alert('취소했습니다.');
    }
  };
  return (
    <>
      <MyPageHeader title={'주문목록'} />
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
          <CancleImgContainer type="button">
            <CancelIcon onClick={onRemove} alt="주문목록 삭제 버튼입니다" />
          </CancleImgContainer>
          <OrderStatus>주문완료</OrderStatus>
        </RightContent>
      </OrderListContainer>
    </>
  );
};

export default MyPageOrderList;
