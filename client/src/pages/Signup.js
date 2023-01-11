import styled from 'styled-components';
import SignupForm from '../components/SignupForm';

const Signup = () => {
  return (
    <>
      <TestBox>
        <SignupForm />
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

export default Signup;
