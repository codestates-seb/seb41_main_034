import Footer from './components/Footer';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';
import Login from './components/Header/Login';
// import Logout from './components/Header/Logout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Login />
      <Footer />
    </ThemeProvider>
  );
}

export default App;