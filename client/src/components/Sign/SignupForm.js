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
import Id from './Id';
import Password from './Password';
import Address from './Address';
import { ReactComponent as LogoIcon } from '../../assets/icons/foodmeet.svg';
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
    <SignContainer onSubmit={onSubmit}>
      <SignHeader>
        <SignLogo>
          <Link to={'/'}>
            <LogoIcon />
          </Link>
        </SignLogo>
        <SignTitle>회원가입</SignTitle>
        <SignSpan>이미 계정이 있으신가요?</SignSpan>
        <Link to="/login">
          <ToSign aria-label="로그인 페이지로 이동">로그인</ToSign>
        </Link>
      </SignHeader>
      <SignList>
        <Id id={id} setId={setId} />

        <Password
          password={password}
          passwordConfirm={passwordConfirm}
          setPassword={setPassword}
          setPasswordConfirm={setPasswordConfirm}
        />

        <SignItem>
          <SignLabel htmlFor="name">이름</SignLabel>
          <SignInput
            type="text"
            id="name"
            aria-label="이름을 입력하세요."
            onChange={(e) => setName(e.target.value)}
            value={name || ''}
            required
          />
        </SignItem>

        <Address
          address={address}
          addressDetail={addressDetail}
          setAddress={setAddress}
          setAddressDetail={setAddressDetail}
        />
      </SignList>
      <SignButton type="submit">가입하기</SignButton>
    </SignContainer>
  );
};

export default SignupForm;
