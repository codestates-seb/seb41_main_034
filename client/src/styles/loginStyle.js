import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
`;
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-width: 300px;
`;
export const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;
export const LoginTitle = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 4px;
  font-size: 32px;
`;
export const ToSignupSpan = styled.span`
  font-size: 15px;
`;
export const ToSignup = styled(ToSignupSpan)`
  /* display: flex; */
  align-items: center;
  justify-content: center;
  font-size: 17px;
  color: ${(props) => props.theme.primaryColor};
  &:hover {
    color: ${(props) => props.theme.hoverColor};
  }
  padding-left: 10px;
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
  width: 100%;
  padding: 4px;
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

export const FindPassWordButton = styled.button`
  display: flex;
  width: 100%;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  padding: 4px 0;
  &:hover {
    color: ${(props) => props.theme.hoverColor};
  }
`;
export const LoginButton = styled.button`
  display: flex;
  width: 230px;
  height: 30px;
  background-color: ${(props) => props.theme.primaryColor};
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
  }
  border-radius: 5px;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

// export const Footer = styled.div`
//   width: 100%;
//   height: 320px;
//   /* background-color: red; */
// `;
