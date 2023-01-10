import {
  Header,
  Loginbody,
  LoginTextMain,
  LoginButton,
  LoginInform,
  SignupQuest,
  SignupButton,
  EmailInput,
  EmailText,
  PassWordInput,
  PassWordText,
  FindPassWordButton,
  SocialLoginText,
  SocialLogin,
  GoogleLogin,
  FacebookLogin,
  Footer
} from '../styles/loginStyle';

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
