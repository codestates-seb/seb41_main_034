import ResponsiveCarousel from '../components/Product/ResponsiveCarousel';
import HomeProduct from '../components/Product/HomeProduct';

const Home = () => {
  const homeData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <ResponsiveCarousel />

      <HomeProduct title={'인기상품'} homeData={homeData} />
    </>
  );
};

export default Home;
