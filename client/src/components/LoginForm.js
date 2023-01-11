import {
  Header,
  Loginbody,
  LoginTextMain,
  LoginButton,
  LoginInform,
  SignupQuest,
  SignupButton,
  IdInput,
  IdText,
  PassWordInput,
  PassWordText,
  FindPassWordButton,
  Footer
} from '../styles/loginStyle';

function LoginForm() {
  return (
    <>
      <Header></Header>
      <Loginbody>
        <LoginTextMain>로그인</LoginTextMain>
        <SignupQuest>
          아직 계정이 없으신가요? <SignupButton>회원가입</SignupButton>
        </SignupQuest>
        <LoginInform>
          <IdText>아이디</IdText>
          <IdInput></IdInput>
          <PassWordText>비밀번호</PassWordText>
          <PassWordInput></PassWordInput>
        </LoginInform>
        <FindPassWordButton>비밀번호찾기</FindPassWordButton>
        <LoginButton>로그인</LoginButton>
      </Loginbody>
      <Footer></Footer>
    </>
  );
}

export default LoginForm;
