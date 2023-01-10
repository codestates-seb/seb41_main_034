import Dfooter from './components/Footer/Desktop';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyle';
// import LoginPage from './pages/LoginPage';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Dfooter />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter> */}
    </ThemeProvider>
  );
}

export default App;
