import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
  background-color: blue;
`;
export const Loginbody = styled.div`
  width: 100%;
  height: 300px;
  align-items: center;
  justify-content: center;
  /* background-color: aqua; */
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
  color: #ffa8a8;
  padding-left: 10px;
`;
export const LoginInform = styled.div`
  /* background-color: pink; */
`;
export const EmailText = styled.div`
  display: flex;
  font-size: 17px;
  align-items: center;
  justify-content: center;
  margin-right: 100px;
  padding: 5px;
`;
export const EmailInput = styled.input`
  display: flex;
  margin: auto;
`;
export const PassWordText = styled.div`
  display: flex;
  font-size: 17px;
  align-items: center;
  justify-content: center;
  margin-right: 90px;
  padding: 5px;
`;
export const PassWordInput = styled.input`
  display: flex;
  margin: auto;
`;
export const FindPassWordButton = styled.button`
  display: flex;
  font-size: 17px;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding-top: 5px;
  padding-right: 60px;
`;
export const LoginButton = styled.button`
  display: flex;
  width: 320px;
  height: 30px;
  background-color: #ffa8a8;
  border-radius: 5px;
  font-size: 15px;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
`;
export const SocialLoginText = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  padding: 10px;
  margin: auto;
`;
export const SocialLogin = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  padding: 10.4px 0;
  margin: auto;
  border-radius: 5px;
`;
export const GoogleLogin = styled(SocialLogin)``;
export const FacebookLogin = styled(SocialLogin)``;
export const Footer = styled.div`
  width: 100%;
  height: 320px;
  background-color: red;
`;
