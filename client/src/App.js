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
import { useDispatch } from 'react-redux';
import { addCart } from './store/orderSlice';

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const accessToken = localStorage.accessToken;

  const checkLogin = async () => {
    try {
      await authAPI.get('/user/login-status');
    } catch (err) {
      console.log(err);
    }
  };

  const checkCart = async () => {
    try {
      const cart = await authAPI.get('/cart');

      cart.data.data.map((el) =>
        dispatch(
          addCart({
            id: el.id,
            img: el.imageUrl,
            name: el.productName,
            price: el.productPrice,
            count: el.quantity
          })
        )
      );
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
