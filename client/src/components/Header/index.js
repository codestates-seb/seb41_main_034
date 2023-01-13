import Login from './Login';
import Logout from './Logout';
import { useEffect, useState } from 'react';

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const token = localStorage.getItem('jwt_token');

  useEffect(() => {
    setIsLogin(token ? true : false);
  }, [token]);

  return isLogin ? <Login /> : <Logout />;
};

export default Header;
