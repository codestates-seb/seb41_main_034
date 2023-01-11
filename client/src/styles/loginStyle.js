import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
`;
export const Loginbody = styled.div`
  width: 100%;
  height: 300px;
  align-items: center;
  justify-content: center;
`;
export const LoginTextMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 20%; */
  padding: 10px;
  margin: 4px;
  font-size: 30px;
`;
export const SignupQuest = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  margin-left: 20px;
  padding-right: 10px;
`;
export const SignupButton = styled.button`
  /* display: flex; */
  align-items: center;
  justify-content: center;
  font-size: 17px;
  color: ${(props) => props.theme.primaryColor};
  padding-left: 10px;
`;
export const LoginInform = styled.div``;
export const IdText = styled.div`
  display: flex;
  font-size: 17px;
  align-items: center;
  justify-content: center;
  margin-right: 170px;
  margin-top: 30px;
  padding: 10px;
`;
export const IdInput = styled.input`
  width: 230px;
  display: flex;
  margin: auto;
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
`;
export const PassWordText = styled.div`
  display: flex;
  font-size: 17px;
  align-items: center;
  justify-content: center;
  margin-right: 170px;
  margin-top: 30px;
  padding: 10px;
`;
export const PassWordInput = styled.input`
  width: 230px;
  display: flex;
  margin: auto;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
`;
export const FindPassWordButton = styled.button`
  display: flex;
  font-size: 17px;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding-top: 25px;
  padding-right: 140px;
  padding-bottom: 10px;
`;
export const LoginButton = styled.button`
  display: flex;
  width: 230px;
  height: 30px;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 5px;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

export const Footer = styled.div`
  width: 100%;
  height: 320px;
  /* background-color: red; */
`;
