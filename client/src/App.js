import { ThemeProvider } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/Layout/ScrollToTop';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userToken } from './store/userSlice';

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.user.accessToken);

  useEffect(() => {
    accessToken !== undefined && dispatch(userToken());
  }, [accessToken, dispatch]);

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
