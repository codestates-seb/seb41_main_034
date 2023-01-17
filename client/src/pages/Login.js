import styled from 'styled-components';
import LoginForm from '../components/Sign/LoginForm';

const Login = () => {
  return (
    <LoginContainer>
      <LoginForm />
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Login;
