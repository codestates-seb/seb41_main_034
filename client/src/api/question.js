import { baseAPI } from './customAxios';

const questionGetAPI = async (body) => {
  try {
    const result = await baseAPI.get(`/question`);
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

const questionPostAPI = async (body) => {
  try {
    const result = await baseAPI.post(`/v1/question`, body);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { questionGetAPI, questionPostAPI };
