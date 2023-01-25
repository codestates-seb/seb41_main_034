import { baseAPI } from './customAxios';

const signupAPI = async (body) => {
  try {
    await baseAPI.post(`/users/signup`, body);
  } catch (err) {
    console.log(err);
  }
};

const loginAPI = async (body) => {
  try {
    const res = await baseAPI.post(`/users/login`, body);
    localStorage.setItem('accessToken', JSON.stringify(res.headers));
  } catch (err) {
    console.log(err);
  }
};

export { signupAPI, loginAPI };
