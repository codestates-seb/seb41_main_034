import styled from 'styled-components';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <>
      <TestBox>
        <LoginForm />
      </TestBox>
    </>
  );
};

const TestBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export default Login;
