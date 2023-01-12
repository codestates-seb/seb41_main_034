import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  LoginContainer,
  LoginHeader,
  LoginTitle,
  LoginButton,
  LoginList,
  LoginItem,
  ToSignupSpan,
  ToSignup,
  Input,
  TextLabel
} from '../styles/loginStyle';
// import { loginAPI } from '../api/sign';

function LoginForm() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    // const body = JSON.stringify({
    //   id: id,
    //   password: password
    // });

    // loginAPI(body);
  };

  return (
    <>
      <LoginContainer onSubmit={onSubmit}>
        <LoginHeader>
          <LoginTitle>로그인</LoginTitle>
          <ToSignupSpan>
            아직 계정이 없으신가요?{' '}
            <Link to="/signup">
              <ToSignup aria-label="회원가입 페이지로 이동">회원가입</ToSignup>
            </Link>
          </ToSignupSpan>
        </LoginHeader>
        <LoginList>
          <LoginItem>
            <TextLabel htmlFor="id">아이디</TextLabel>
            <Input
              type="text"
              id="id"
              aria-label="아이디를 입력하세요."
              required
              maxLength={12}
              minLength={4}
              onChange={(e) => setId(e.target.value)}
              value={id || ''}
            />
          </LoginItem>
          <LoginItem>
            <TextLabel htmlFor="id">비밀번호</TextLabel>
            <Input
              type="password"
              id="password"
              aria-label="비밀번호를 입력하세요."
              required
              maxLength={12}
              minLength={4}
              onChange={(e) => setPassword(e.target.value)}
              value={password || ''}
            />
          </LoginItem>
        </LoginList>
        <LoginButton type="submit">로그인</LoginButton>
      </LoginContainer>
    </>
  );
}

export default LoginForm;
