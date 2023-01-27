import { OrderDateContainer, OrderDate } from '../../styles/myPageStyle';

import MyPageHeader from './MyPageHeader';
import MyPageOrderItem from './MyPageOrderItem';
const MyPageOrderList = () => {
  return (
    <>
      <MyPageHeader title={'주문목록'} />
      <OrderDateContainer>
        {' '}
        <OrderDate>2023.01.07</OrderDate>
      </OrderDateContainer>

      <MyPageOrderItem />
    </>
  );
};

export default MyPageOrderList;
