import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/Layout/ScrollToTop';
import { authAPI } from './api/customAxios';

const App = () => {
  const location = useLocation();

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

  useEffect(() => {
    if (localStorage.accessToken !== undefined) {
      checkToken();
      getUserCart();
    }
  }, []);

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
