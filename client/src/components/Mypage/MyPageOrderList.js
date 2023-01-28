import { useEffect, useState } from 'react';
import { OrderDateContainer, OrderDate } from '../../styles/myPageStyle';
import MyPageHeader from './MyPageHeader';
import MyPageOrderItem from './MyPageOrderItem';
import { authAPI } from '../../api/customAxios';
import Loading from '../Layout/Loading';

const MyPageOrderList = () => {
  const [totalList, setTotalList] = useState([]);
  const [viewList, setViewList] = useState(null);
  console.log(totalList);

  useEffect(() => {
    init();
  }, []);
  useEffect(() => {
    console.log('viewList', viewList);
  }, [viewList]);

  // 데이터 초기화
  const init = async () => {
    // 주문 목록
    try {
      const result = await authAPI.get(`/order/order-history`);
      console.log('result', result.data.data.content);
      // 동일 날짜로 그룹화
      let newDateDataObj = {};
      await Promise.all(
        result.data.data.content.map((e) => {
          // YYYY-MM-DDThh:mm:ss => YYYY-MM-DD
          const yearMonthDay = e.createdAt.slice(0, 10);
          // newDateDataObj['YYYY-MM-DD']에 배열 미생성(undefined)일때 배열생성후 데이터 push
          if (newDateDataObj[`${yearMonthDay}`] === undefined) {
            newDateDataObj[`${yearMonthDay}`] = [];
            newDateDataObj[`${yearMonthDay}`].push(e);
          } else {
            newDateDataObj[`${yearMonthDay}`].push(e);
          }
          return false;
        })
      );
      console.log('newDateDataObj', newDateDataObj);
      // 단순 전체 목록
      setTotalList(result.data.data.content);
      // 날짜별 정렬된 오브젝트
      setViewList(newDateDataObj);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <MyPageHeader title={'주문목록'} />

      {/* 반복 구간 */}
      {viewList != null ? (
        <>
          {Object.entries(viewList).map(([key, value]) => {
            return (
              <>
                <OrderDateContainer>
                  {' '}
                  <OrderDate>{key}</OrderDate>
                </OrderDateContainer>
                {value.map((e) => {
                  return (
                    <>
                      {e.products.map((el) => {
                        return (
                          // 주문상품 컨텐츠
                          <MyPageOrderItem
                            productId={el.productId}
                            image={el}
                            name={el.productName}
                            price={el.price}
                            quantity={el.quantity}
                            orderState={el.status}
                          />
                        );
                      })}
                    </>
                  );
                })}
              </>
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
