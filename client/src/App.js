import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';
import Signup from './pages/Signup';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Signup />
    </ThemeProvider>
  );
}

export default App;
