import { baseAPI } from './customAxios';

const productAPI = async () => {
  try {
    await baseAPI.get(`/product`);
  } catch (err) {
    console.log(err);
  }
};

export { productAPI };
