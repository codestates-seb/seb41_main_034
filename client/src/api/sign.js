import { baseAPI } from './customAxios';

const signupAPI = async (body) => {
  try {
    await baseAPI.post(`/signup`, body);
  } catch (err) {
    console.log(err);
  }
};

const loginAPI = async (body) => {
  try {
    await baseAPI.post(`/login`, body);
  } catch (err) {
    console.log(err);
  }
};

export { signupAPI, loginAPI };
