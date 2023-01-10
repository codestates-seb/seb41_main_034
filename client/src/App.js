import Dfooter from './components/Footer/Desktop';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/globalStyle';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Dfooter />
    </ThemeProvider>
  );
}

export default App;
