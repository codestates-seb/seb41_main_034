import { Routes, Route } from 'react-router-dom';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import Products from '../../pages/Products';
import Product from '../../pages/Product';
import Order from '../../pages/Order';
import MyPage from '../../pages/MyPage';

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products/:category/*" element={<Products />} />
        <Route path="/product/:productId/*" element={<Product />} />
        <Route path="/order/*" element={<Order />} />
        <Route path="/mypage/*" element={<MyPage />} />
      </Routes>
    </>
  );
};

export default Routers;
