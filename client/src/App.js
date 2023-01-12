import { ThemeProvider } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
