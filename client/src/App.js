import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/Layout/ScrollToTop';

function App() {
  const location = useLocation();

  const [isLogin, setIsLogin] = useState(false);

  const token = localStorage.getItem('jwt_token');

  useEffect(() => {
    setIsLogin(token ? true : false);
  }, [token]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header location={location} isLogin={isLogin} />

      <Main />

      <ScrollToTop />

      <Footer location={location} />
    </ThemeProvider>
  );
}

export default App;
