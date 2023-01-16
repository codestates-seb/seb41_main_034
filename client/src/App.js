import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle, Main, Container } from './styles/globalStyle';
import theme from './styles/theme';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Products from './pages/Products';
import Order from './pages/Order';
import MyPage from './pages/MyPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />

      <Main>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/products/:category" element={<Products />} />
            <Route path="/order" element={<Order />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        </Container>
      </Main>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
