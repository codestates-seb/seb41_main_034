import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  SignWrapper,
  SignContainer,
  SignHeader,
  SignLogo,
  SignTitle,
  SignSpan,
  ToSign,
  SignList,
  SignButton,
  DisabledSignButton
} from '../styles/signStyle';
import Id from '../components/Sign/Id';
import Password from '../components/Sign/Password';
import Name from '../components/Sign/Name';
import Address from '../components/Sign/Address';
import Certification from '../components/Sign/Certification';
import AddressModal from '../components/Sign/AddressModal';
import { ReactComponent as LogoIcon } from '../assets/icons/foodmeet.svg';
// import { signupAPI } from '../../api/signup';

const Signup = () => {
  const [form, setForm] = useState({
    id: '',
    password: '',
    passwordConfirm: '',
    name: '',
    address: '',
    addressDetail: '',
    certification: false
  });
  const [valid, setValid] = useState({
    id: false,
    password: false,
    passwordConfirm: false,
    name: false
  });

  const [isOpenPost, setIsOpenPost] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    // const body = JSON.stringify({
    //   id: form.id,
    //   password: form.password,
    //   name: form.name,
    //   address: `${form.address} ${form.addressDetail}`
    // });

    // signupAPI(body);
  };

  return (
    <>
      <SignWrapper>
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
            <Id
              form={form}
              setForm={setForm}
              valid={valid}
              setValid={setValid}
            />

            <Password
              form={form}
              setForm={setForm}
              valid={valid}
              setValid={setValid}
            />

            <Name
              form={form}
              setForm={setForm}
              valid={valid}
              setValid={setValid}
            />

            <Address
              form={form}
              setForm={setForm}
              isOpenPost={isOpenPost}
              setIsOpenPost={setIsOpenPost}
            />

            <Certification form={form} setForm={setForm} />
          </SignList>

          {valid.id &&
          valid.password &&
          valid.passwordConfirm &&
          valid.name &&
          form.addressDetail &&
          form.certification ? (
            <SignButton type="submit">가입하기</SignButton>
          ) : (
            <DisabledSignButton disabled="disabaled">
              가입하기
            </DisabledSignButton>
          )}
        </SignContainer>
      </SignWrapper>

      <AddressModal
        form={form}
        setForm={setForm}
        isOpenPost={isOpenPost}
        setIsOpenPost={setIsOpenPost}
      />
    </>
  );
};

export default Signup;
