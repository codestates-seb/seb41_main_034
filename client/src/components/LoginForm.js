import {
  Header,
  LoginContainer,
  LoginHeader,
  LoginTitle,
  LoginButton,
  LoginList,
  LoginItem,
  ToSignupSpan,
  ToSignup,
  Input,
  TextLabel,
  FindPassWordButton
} from '../styles/loginStyle';
// import Footer from '../styles/footerStyle';

function LoginForm() {
  return (
    <>
      <Header></Header>
      <LoginContainer>
        <LoginHeader>
          <LoginTitle>로그인</LoginTitle>
          <ToSignupSpan>
            아직 계정이 없으신가요?{' '}
            <ToSignup aria-label="회원가입 페이지로 이동">회원가입</ToSignup>
          </ToSignupSpan>
        </LoginHeader>
        <LoginList>
          <LoginItem>
            <TextLabel htmlFor="id">아이디</TextLabel>
            <Input type="text" id="id" aria-label="아이디를 입력하세요." />
          </LoginItem>
          <LoginItem>
            <TextLabel htmlFor="id">비밀번호</TextLabel>
            <Input
              type="text"
              id="password"
              aria-label="비밀번호를 입력하세요."
            />
          </LoginItem>
        </LoginList>
        <FindPassWordButton>비밀번호찾기</FindPassWordButton>
        <LoginButton type="submit">로그인</LoginButton>
      </LoginContainer>
      {/* <Footer></Footer> */}
    </>
  );
}

export default LoginForm;
