import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';
import Header from './components/Header';
import { Main, Container } from './styles/contentStyle';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Products from './pages/Products';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />

      <Main>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Container>
      </Main>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
