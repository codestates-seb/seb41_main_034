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

function App() {
  const location = useLocation();
  const accessToken = localStorage.getItem('accessToken');

  const checkLogin = async () => {
    try {
      const user = await authAPI.get('/user/login-status');
      const id = `${user.data.data.id}`;
      localStorage.setItem('userId', id);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    accessToken && checkLogin();
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
