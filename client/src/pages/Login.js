import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  SignWrapper,
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
} from '../styles/signStyle';
import { ReactComponent as LogoIcon } from '../assets/icons/foodmeet.svg';
import { baseAPI } from '../api/customAxios';

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    id: '',
    password: ''
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    const body = JSON.stringify({
      username: form.id,
      password: form.password
    });

    try {
      const res = await baseAPI.post(`/user/login`, body);
      const authorization = `${res.headers.authorization}`;
      localStorage.setItem('accessToken', authorization);
      navigate('/');
      window.location.reload();
    } catch (err) {
      console.log(err);
      window.alert('아이디, 비밀번호를 확인해주세요.');
    }
  };

  return (
    <SignWrapper>
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
              onChange={(e) => setForm({ ...form, id: e.target.value })}
              value={form.id || ''}
            />
          </SignItem>
          <SignItem>
            <SignLabel htmlFor="id">비밀번호</SignLabel>
            <SignInput
              type="password"
              id="password"
              aria-label="비밀번호를 입력하세요."
              required
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              value={form.password || ''}
            />
          </SignItem>
        </SignList>
        <SignButton type="submit">로그인</SignButton>
      </SignContainer>
    </SignWrapper>
  );
};

export default Login;
