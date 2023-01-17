import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a,
  input,
  textarea,
  button {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  a {
    color: initial;
    text-decoration: none;
  }

  input,
  textarea {
    padding: 0;
    outline: none;
    border: none;
    border-radius: 0;
    box-shadow: none;
  }

  input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
  }

  button {
    padding: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
    background-color: inherit;
    cursor: pointer;
  }
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 122px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 64px;

  @media ${(props) => props.theme.tablet} {
    padding: 0 32px;
  }

  @media ${(props) => props.theme.mobile} {
    padding: 0 16px;
  }
`;

export { GlobalStyle, Main, Container };
