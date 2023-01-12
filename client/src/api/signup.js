import { baseAPI } from './customAxios';

const signupAPI = async (body) => {
  try {
    await baseAPI.post(`/signup`, body);
  } catch (error) {
    console.log(error);
  }
};

export { signupAPI };
