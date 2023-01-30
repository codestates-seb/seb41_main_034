import { ThemeProvider } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/Layout/ScrollToTop';
import { useEffect } from 'react';
import { authAPI } from './api/customAxios';

const App = () => {
  const location = useLocation();
  const accessToken = localStorage.accessToken;
  const xCart = JSON.parse(localStorage.xCart || `[]`);

  const checkToken = async () => {
    try {
      await authAPI.get('/user/login-status');
    } catch (err) {
      err.response.data.error.status === 401 && localStorage.clear();
    }
  };

  const getUserCart = async () => {
    try {
      const res = await authAPI.get('cart');
      localStorage.cart = JSON.stringify(
        res.data.data.map((el) => ({ ...el, check: true }))
      );
    } catch (err) {
      console.log(err);
    }
  };

  const postAPI = async (el) => {
    try {
      await authAPI.post(
        `/cart`,
        JSON.stringify({ productId: el.productId, quantity: el.quantity })
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    xCart !== [] && xCart.map((el) => postAPI(el));
    localStorage.removeItem('xCart');
    accessToken !== undefined && checkToken();
    accessToken !== undefined && getUserCart();
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
