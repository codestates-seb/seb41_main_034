import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  SignupContainer,
  SignupHeader,
  SignupTitle,
  ToLoginSpan,
  ToLogin,
  SignupList,
  SignupItem,
  SignupLabel,
  SignupInput,
  SignupButton
} from '../../styles/signupStyle';
import Id from './Id';
import Password from './Password';
import Address from './Address';
// import { signupAPI } from '../../api/signup';

const SignupForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    // const body = JSON.stringify({
    //   id: id,
    //   password: password,
    //   name: name,
    //   address: address,
    //   phone: phone
    // });

    // signupAPI(body);
  };

  return (
    <SignupContainer onSubmit={onSubmit}>
      <SignupHeader>
        <SignupTitle>회원가입</SignupTitle>
        <ToLoginSpan>이미 계정이 있으신가요?</ToLoginSpan>
        <Link to="/login">
          <ToLogin aria-label="로그인 페이지로 이동">로그인</ToLogin>
        </Link>
      </SignupHeader>
      <SignupList>
        <Id id={id} setId={setId} />

        <Password
          password={password}
          passwordConfirm={passwordConfirm}
          setPassword={setPassword}
          setPasswordConfirm={setPasswordConfirm}
        />

        <SignupItem>
          <SignupLabel htmlFor="name">이름</SignupLabel>
          <SignupInput
            type="text"
            id="name"
            aria-label="이름을 입력하세요."
            onChange={(e) => setName(e.target.value)}
            value={name || ''}
            required
          />
        </SignupItem>

        <Address
          address={address}
          addressDetail={addressDetail}
          setAddress={setAddress}
          setAddressDetail={setAddressDetail}
        />
      </SignupList>
      <SignupButton type="submit">가입하기</SignupButton>
    </SignupContainer>
  );
};

export default SignupForm;
