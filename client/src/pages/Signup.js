import styled from 'styled-components';
import SignupForm from '../components/Sign/SignupForm';

const Signup = () => {
  return (
    <SignupContainer>
      <SignupForm />
    </SignupContainer>
  );
};

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Signup;
