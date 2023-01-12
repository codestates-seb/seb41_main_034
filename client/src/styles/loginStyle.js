import styled from 'styled-components';

export const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
`;

export const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

export const LoginTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 12px;
`;

export const ToSignupSpan = styled.span`
  font-size: 16px;
`;

export const ToSignup = styled(ToSignupSpan)`
  margin-left: 4px;
  color: ${(props) => props.theme.primaryColor};
  transition: color 0.5s;

  &:hover {
    color: ${(props) => props.theme.hoverColor};
  }
`;

export const LoginList = styled.ul`
  width: 100%;
  margin-bottom: 24px;
`;

export const LoginItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 36px;
  }
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};

  &:focus {
    border: 1px solid ${(props) => props.theme.borderColor};
  }
`;

export const TextLabel = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
`;

export const LoginButton = styled.button`
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
