import { useEffect, useState } from 'react';
import {
  OrderContainer,
  OrderDateContainer,
  OrderDate,
  Receiver,
  ShippingAddress
} from '../../styles/myPageStyle';
import MyPageHeader from './MyPageHeader';
import MyPageOrderItem from './MyPageOrderItem';
import { authAPI } from '../../api/customAxios';
import Loading from '../Layout/Loading';
import Pagination from '../Layout/Pagination';

const MyPageOrderList = () => {
  const [orderList, setOrderList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const getOrderList = async () => {
      try {
        const res = await authAPI.get(
          `/order/order-history?page=${page}&size=10`
        );
        setOrderList(res.data.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getOrderList();
  }, [page]);

  return (
    <>
      <MyPageHeader title={'주문내역'} />

      {loading ? (
        <Loading />
      ) : (
        orderList.content.map((el, idx) => (
          <OrderContainer key={idx}>
            <OrderDateContainer>
              <OrderDate>{el.createdAt.substring(0, 10)}</OrderDate>
              <ShippingAddress>배송지: {el.address}</ShippingAddress>
              <Receiver>받는사람: {el.recipient}</Receiver>
            </OrderDateContainer>

            {el.products.map((ele, idex) => (
              <MyPageOrderItem orderId={el.id} product={ele} key={idex} />
            ))}
          </OrderContainer>
        ))
      )}

      {loading === false && (
        <Pagination
          total={orderList.totalPages}
          page={page}
          setPage={setPage}
        />
      )}
    </>
  );
};

export default MyPageOrderList;
