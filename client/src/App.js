import { ThemeProvider } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/Layout/ScrollToTop';
import { authAPI } from './api/customAxios';
import { useEffect } from 'react';

const App = () => {
  const location = useLocation();
  const accessToken = localStorage.accessToken || '';

  const checkLogin = async () => {
    try {
      await authAPI.get('/user/login-status');
    } catch (err) {
      console.log(err);
      err.response.data.error.status === 401 && console.log('토큰만료');
    }
  };

  const checkCart = async () => {
    try {
      const cart = await authAPI.get('/cart');
      localStorage.cart = JSON.stringify(cart.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    accessToken && checkLogin();
    accessToken && checkCart();
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header location={location} />

      <Main />

      <ScrollToTop />

      <Footer location={location} />
    </ThemeProvider>
  );
};

export default App;
