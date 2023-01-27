import { authAPI } from './customAxios';

//회원조회할 때 사용
const UserGetAPI = async (userId) => {
  try {
    const result = await authAPI.get(`/user/${userId}`);
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

export { UserGetAPI };
