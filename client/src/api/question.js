import { baseAPI } from './customAxios';

//회원의 문의기록조회
const questionGetAPI = async (body) => {
  try {
    const result = await baseAPI.get(`/question/question-history`, {
      headers: { Authorization: 'Bearer <access-token>' }
    });
    return result.data;
  } catch (err) {
    console.log(err);
  }
};
//특정상품의 문의기록조회
const itemQuestionGetAPI = async (body) => {
  try {
    const result = await baseAPI.get(`/question/product/{productId}/question`, {
      headers: { Authorization: 'Bearer <access-token>' }
    });
    return result.data;
  } catch (err) {
    console.log(err);
  }
};
//특정 회원의 문의추가
const questionPostAPI = async (body) => {
  try {
    const result = await baseAPI.post(
      `/question`,
      {
        headers: { Authorization: 'Bearer <access-token>' }
      },
      body
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
//특정 회원의 문의수정
const questionPatchAPI = async (body) => {
  try {
    const result = await baseAPI.patch(
      `/question/{questionId}`,
      {
        headers: { Authorization: 'Bearer <access-token>' }
      },
      body
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
//특정 회원의 문의삭제
const questionDeleteAPI = async (body) => {
  try {
    const result = await baseAPI.delete(`/question/{questionId}`, {
      headers: { Authorization: 'Bearer <access-token>' }
    });
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
