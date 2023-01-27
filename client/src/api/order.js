import { authAPI } from './customAxios';

//로그인한 회원 자신의 주문 내역을 조회할 때 사용
const OrderGetAPI = async () => {
  try {
    const result = await authAPI.get(`/order/order-history`);
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

export { OrderGetAPI };
