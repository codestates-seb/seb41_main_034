import { OrderDateContainer, OrderDate } from '../../styles/myPageStyle';

import MyPageHeader from './MyPageHeader';
<<<<<<< HEAD
import MyPageOrderItem from './MyPageOrderItem';
const MyPageOrderList = () => {
=======
import { ReactComponent as CancelIcon } from '../../assets/icons/cancleIcon.svg';
import { useState } from 'react';
import ReviewModal from './ReviewModal';

const MyPageOrderList = () => {
  const [isOpenReview, setIsOpenReview] = useState(false);

  const handleReviewOpen = () => {
    setIsOpenReview(!isOpenReview);
  };

  const onRemove = () => {
    if (window.confirm('해당 상품에 대한 주문목록을 삭제하시겠습니까?')) {
      alert('삭제되었습니다');
    } else {
      alert('취소했습니다.');
    }
  };
>>>>>>> 10be998e34ec9dd7d45e79a911478a73704b5269
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
