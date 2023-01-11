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
  IdCheckButton,
  SignupButton
} from '../styles/signupStyle';

const SignupForm = () => {
  return (
    <SignupContainer>
      <SignupHeader>
        <SignupTitle>회원가입</SignupTitle>
        <ToLoginSpan>이미 계정이 있습니까?</ToLoginSpan>
        <ToLogin aria-label="로그인 페이지로 이동">로그인</ToLogin>
      </SignupHeader>
      <SignupList>
        <SignupItem>
          <SignupLabel for="id">아이디</SignupLabel>
          <SignupInput type="text" id="id" aria-label="아이디를 입력하세요." />
          <IdCheckButton>중복확인</IdCheckButton>
        </SignupItem>
        <SignupItem>
          <SignupLabel for="password">비밀번호</SignupLabel>
          <SignupInput
            type="password"
            id="password"
            aria-label="비밀번호를 입력하세요."
          />
        </SignupItem>
        <SignupItem>
          <SignupLabel for="passwordCheck">비밀번호 확인</SignupLabel>
          <SignupInput
            type="password"
            id="passwordCheck"
            aria-label="비밀번호를 한번 더 입력하세요."
          />
        </SignupItem>
        <SignupItem>
          <SignupLabel for="name">이름</SignupLabel>
          <SignupInput type="text" id="name" aria-label="이름을 입력하세요." />
        </SignupItem>
        <SignupItem>
          <SignupLabel for="address">주소</SignupLabel>
          <SignupInput
            type="text"
            id="address"
            aria-label="이름을 입력하세요."
          />
          <IdCheckButton>주소 검색</IdCheckButton>
        </SignupItem>
        <SignupItem>
          <SignupLabel for="phone">휴대폰</SignupLabel>
          <SignupInput type="tel" id="phone" aria-label="이름을 입력하세요." />
          <IdCheckButton>인증번호 받기</IdCheckButton>
        </SignupItem>
      </SignupList>
      <SignupButton type="submit">가입하기</SignupButton>
    </SignupContainer>
  );
};

export default SignupForm;
