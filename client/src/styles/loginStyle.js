import styled from 'styled-components';

const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin-top: 120px;
  margin-bottom: 240px;

  @media ${(props) => props.theme.mobile} {
    margin-bottom: 120px;
  }
`;

const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const LoginTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 12px;
`;

const ToSignupSpan = styled.span`
  font-size: 16px;
`;

const ToSignup = styled(ToSignupSpan)`
  margin-left: 4px;
  color: ${(props) => props.theme.primaryColor};
  transition: color 0.5s;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      color: ${(props) => props.theme.hoverColor};
    }
  }
`;

const LoginList = styled.ul`
  width: 100%;
  margin-bottom: 24px;
`;

const LoginItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 36px;
  }
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};

  &:focus {
    border: 1px solid ${(props) => props.theme.borderColor};
  }
`;

const TextLabel = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 16px 0;
  font-size: 16px;
  border-radius: 4px;
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.primaryColor};
  transition: background-color 0.5s;

  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
`;

export {
  LoginContainer,
  LoginHeader,
  LoginTitle,
  ToSignupSpan,
  ToSignup,
  LoginList,
  LoginItem,
  Input,
  TextLabel,
  LoginButton
};
