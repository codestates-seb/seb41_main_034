import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 116px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  padding: 0 32px;

  @media ${(props) => props.theme.mobile} {
    padding: 0 16px;
  }
`;

export { Main, Container };
