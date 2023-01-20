import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  SignContainer,
  SignHeader,
  SignLogo,
  SignTitle,
  SignSpan,
  ToSign,
  SignList,
  SignItem,
  SignLabel,
  SignInput,
  SignButton
} from '../../styles/signStyle';
import { ReactComponent as LogoIcon } from '../../assets/icons/foodmeet.svg';
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
      <SignContainer onSubmit={onSubmit}>
        <SignHeader>
          <SignLogo>
            <Link to={'/'}>
              <LogoIcon />
            </Link>
          </SignLogo>
          <SignTitle>로그인</SignTitle>
          <SignSpan>
            아직 계정이 없으신가요?{' '}
            <Link to="/signup">
              <ToSign aria-label="회원가입 페이지로 이동">회원가입</ToSign>
            </Link>
          </SignSpan>
        </SignHeader>
        <SignList>
          <SignItem>
            <SignLabel htmlFor="id">아이디</SignLabel>
            <SignInput
              type="text"
              id="id"
              aria-label="아이디를 입력하세요."
              required
              maxLength={12}
              minLength={4}
              onChange={(e) => setId(e.target.value)}
              value={id || ''}
            />
          </SignItem>
          <SignItem>
            <SignLabel htmlFor="id">비밀번호</SignLabel>
            <SignInput
              type="password"
              id="password"
              aria-label="비밀번호를 입력하세요."
              required
              maxLength={12}
              minLength={4}
              onChange={(e) => setPassword(e.target.value)}
              value={password || ''}
            />
          </SignItem>
        </SignList>
        <SignButton type="submit">로그인</SignButton>
      </SignContainer>
    </>
  );
}

export default LoginForm;
