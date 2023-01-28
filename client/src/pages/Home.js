import ResponsiveCarousel from '../components/Product/ResponsiveCarousel';
import HomeProduct from '../components/Product/HomeProduct';
import { useState } from 'react';
import { baseAPI } from '../api/customAxios';
import { useEffect } from 'react';

const Home = () => {
  const [best, setBest] = useState([]);

  const getBestProducts = async () => {
    try {
      const res = await baseAPI.get('/product?size=12&sort=sold,desc');
      setBest(res.data.data.content);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBestProducts();
  }, []);

  return (
    <>
      <ResponsiveCarousel />

      <HomeProduct title={'인기상품'} data={best} />
    </>
  );
};

export default Home;
