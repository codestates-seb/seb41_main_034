// import { GlobalStyle } from './styles/globalStyle';
import styled from 'styled-components';
import React from 'react';

const Header = styled.div`
  display: flex;
  width: 100%;
  height: 130px;
  background-color: blue;
`;
const Loginbody = styled.div`
  width: 100%;
  height: 300px;
  align-items: center;
  justify-content: center;
  /* background-color: aqua; */
`;
const LoginTextMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 20%; */
  padding: 10.4px;
  margin: 4px;
  font-size: 30px;
`;
const SignupQuest = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  margin-left: 20px;
  padding-right: 10px;
`;
const SignupButton = styled.button`
  /* display: flex; */
  align-items: center;
  justify-content: center;
  font-size: 17px;
  color: #ffa8a8;
  padding-left: 10px;
`;
const LoginInform = styled.div`
  /* background-color: pink; */
`;
const EmailText = styled.div`
  display: flex;
  font-size: 17px;
  align-items: center;
  justify-content: center;
  margin-right: 100px;
  padding: 5px;
`;
const EmailInput = styled.input`
  display: flex;
  margin: auto;
`;
const PassWordText = styled.div`
  display: flex;
  font-size: 17px;
  align-items: center;
  justify-content: center;
  margin-right: 90px;
  padding: 5px;
`;
const PassWordInput = styled.input`
  display: flex;
  margin: auto;
`;
const FindPassWordButton = styled.button`
  display: flex;
  font-size: 17px;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding-top: 5px;
  padding-right: 60px;
`;
const LoginButton = styled.button`
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
const SocialLoginText = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  padding: 10px;
  margin: auto;
`;
const SocialLogin = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20%;
  padding: 10.4px 0;
  margin: auto;
  border-radius: 5px;
`;
const GoogleLogin = styled(SocialLogin)``;
const FacebookLogin = styled(SocialLogin)``;
const Footer = styled.div`
  width: 100%;
  height: 320px;
  background-color: red;
`;

function LoginPage() {
  return (
    <>
      <Header></Header>
      <Loginbody>
        <LoginTextMain>로그인</LoginTextMain>
        <SignupQuest>
          아직 계정이 없으신가요? <SignupButton>회원가입</SignupButton>
        </SignupQuest>
        <LoginInform>
          <EmailText>이메일</EmailText>
          <EmailInput></EmailInput>
          <PassWordText>비밀번호</PassWordText>
          <PassWordInput></PassWordInput>
        </LoginInform>
        <FindPassWordButton>비밀번호찾기</FindPassWordButton>
        <SocialLoginText>다음 계정으로 로그인하기 </SocialLoginText>
        <SocialLogin>
          <LoginButton>로그인</LoginButton>
          <GoogleLogin></GoogleLogin>
          <FacebookLogin></FacebookLogin>
        </SocialLogin>
      </Loginbody>
      <Footer></Footer>
    </>
  );
}

export default LoginPage;
