import { authAPI } from './customAxios';

//특정 상품의 후기 목록 조회
const reviewGetAPI = async (productId) => {
  try {
    const result = await authAPI.get(`/product/${productId}/review`);
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

//회원의 후기 목록 조회
const userReviewGetAPI = async () => {
  try {
    const result = await authAPI.get(`/review/review-history`);
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

export { reviewGetAPI, userReviewGetAPI };
