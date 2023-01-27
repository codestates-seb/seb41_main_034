import { authAPI } from './customAxios';

//회원의 문의기록조회
const questionGetAPI = async () => {
  try {
    const result = await authAPI.get(`/question/question-history`);
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

//특정상품의 문의기록조회
const itemQuestionGetAPI = async (productId) => {
  try {
    const result = await authAPI.get(`/product/${productId}/question`);
    return result.data;
  } catch (err) {
    console.log(err);
  }
};
//특정 회원의 문의추가
const questionPostAPI = async (body) => {
  try {
    const result = await authAPI.post(`/question`, body);
    return result;
  } catch (error) {
    console.log(error);
  }
};
//특정 회원의 문의수정
const questionPatchAPI = async (questionId, body) => {
  try {
    const result = await authAPI.patch(`/question/${questionId}`, {
      body
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
//특정 회원의 문의삭제
const questionDeleteAPI = async (questionId) => {
  try {
    const result = await authAPI.delete(`/question/${questionId}`);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export {
  questionGetAPI,
  itemQuestionGetAPI,
  questionPostAPI,
  questionPatchAPI,
  questionDeleteAPI
};
