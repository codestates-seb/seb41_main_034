import { authAPI } from './customAxios';

//기본 주소 조회
const userAddressGetAPI = async () => {
  try {
    // await authAPI.get(`/user-address/${userAddressId}/`);
    const address = await authAPI.get(`/user-address`);
    return address.data;
  } catch (err) {
    console.log(err);
  }
};

//회원 주소 삭제

export { userAddressGetAPI };
