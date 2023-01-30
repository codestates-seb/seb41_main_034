import ResponsiveCarousel from '../components/Product/ResponsiveCarousel';
import HomeProduct from '../components/Product/HomeProduct';
import { useState } from 'react';
import { baseAPI } from '../api/customAxios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { myCart } from '../store/orderSlice';

const Home = () => {
  const [best, setBest] = useState([]);
  const dispatch = useDispatch();
  const accessToken = localStorage.accessToken;

  const getBestProducts = async () => {
    try {
      const res = await baseAPI.get('/product?size=12&sort=sold,desc');
      setBest(res.data.data.content);
      accessToken !== undefined &&
        dispatch(myCart({ cart: JSON.parse(localStorage.cart || `[]`) }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBestProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [best]);

  return (
    <>
      <ResponsiveCarousel />

      <HomeProduct title={'인기상품'} data={best} />
    </>
  );
};

export default Home;
