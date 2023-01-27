import { ThemeProvider } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/Layout/ScrollToTop';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authAPI } from './api/customAxios';
import { loginDbId } from './store/userSlice';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const loginUserId = useSelector((state) => state.user.userId);

  const checkLogin = async () => {
    try {
      const user = await authAPI.get('/user/login-status');
      localStorage.setItem('userDbId', user.data.data.id);
      dispatch(loginDbId(user.data.data.id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loginUserId && checkLogin();
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
}

export default App;
