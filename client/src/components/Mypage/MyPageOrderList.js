import { useEffect, useState } from 'react';
import { OrderDateContainer, OrderDate } from '../../styles/myPageStyle';
import MyPageHeader from './MyPageHeader';
import MyPageOrderItem from './MyPageOrderItem';
import { authAPI } from '../../api/customAxios';
import Loading from '../Layout/Loading';

const MyPageOrderList = () => {
  const [viewList, setViewList] = useState(null);

  useEffect(() => {
    init();
  }, []);
  useEffect(() => {}, [viewList]);

  const init = async () => {
    try {
      const result = await authAPI.get(`/order/order-history`);
      let newDateDataObj = {};
      await Promise.all(
        result.data.data.content.map((e) => {
          const yearMonthDay = e.createdAt.slice(0, 10);
          if (newDateDataObj[`${yearMonthDay}`] === undefined) {
            newDateDataObj[`${yearMonthDay}`] = [];
            newDateDataObj[`${yearMonthDay}`].push(e);
          } else {
            newDateDataObj[`${yearMonthDay}`].push(e);
          }
          return false;
        })
      );
      setViewList(newDateDataObj);
    } catch (err) {}
  };

  return (
    <>
      <MyPageHeader title={'주문목록'} />

      {viewList != null ? (
        <>
          {Object.entries(viewList).map(([key, value]) => {
            return (
              <div key={key}>
                <OrderDateContainer>
                  {' '}
                  <OrderDate>{key}</OrderDate>
                </OrderDateContainer>
                {value.map((e) => {
                  return (
                    <div key={e.id}>
                      {e.products.map((el, idx) => {
                        return (
                          <MyPageOrderItem
                            key={idx}
                            productId={el.productId}
                            image={el.imageUrl}
                            name={el.productName}
                            price={el.price}
                            quantity={el.quantity}
                            orderState={el.status}
                            recipient={e.recipient}
                            address={e.address}
                            orderId={e.id}
                          />
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default MyPageOrderList;
