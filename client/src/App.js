import { ThemeProvider } from 'styled-components';
import { useLocation } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import Footer from './components/Layout/Footer';

function App() {
  const location = useLocation();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header location={location} />

      <Main />

      <Footer location={location} />
    </ThemeProvider>
  );
}

export default App;
