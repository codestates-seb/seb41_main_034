import {
  UserEditWrapper,
  UserEditContainer,
  EditCotainer,
  LeftBox,
  RightBox,
  InputBox,
  PasswordContainer,
  PasswordText,
  ButtonContainer,
  ConfirmButton,
  UserOutButton,
  ConfirmMessage
} from '../../styles/myPageStyle';
import { useState } from 'react';

const UserInfoEdit = () => {
  const [password, setPassword] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [ConfirmPW, setConfirmPW] = useState(null);
  const [isPassword, setIsPassword] = useState(false);
  const [isNewPW, setIsPW] = useState(true);
  const [isConfirmPW, setIsConfirmPW] = useState(false);

  console.log('PW,ConfirmPW :'[(password, ConfirmPW)]);

  const onEditComplete = () => {
    if (window.confirm('회원정보를 변경하시겠습니까?')) {
      alert('변경되었습니다');
    } else {
      alert('취소되었습니다.');
    }
  };

  const onUserOut = () => {
    if (window.confirm('탈퇴하시겠습니까?')) {
      alert('탈퇴되었습니다');
    } else {
      alert('취소되었습니다.');
    }
  };

  const VaildPW = async (e) => {
    const currentPW = e.target.value;
    setPassword(e.target.value);
    if (currentPW === 'API') {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  };

  const VaildNewPW = (e) => {
    const NewPasswordRegExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,}$/;
    const currentNewPW = e.target.value;
    setNewPassword(e.target.value);
    if (!NewPasswordRegExp.test(currentNewPW)) {
      setIsPW(true);
    } else {
      setIsPW(false);
    }
  };

  const VaildConfirmPW = (e) => {
    setConfirmPW(e.target.value);
    const currentConfirmPW = e.target.value;

    if (currentConfirmPW === newPassword) {
      setIsConfirmPW(false);
    } else {
      setIsConfirmPW(true);
    }
  };

  return (
    <UserEditWrapper>
      <UserEditContainer>
        <EditCotainer>
          <LeftBox htmlFor="name">이름</LeftBox>
          <RightBox>
            <InputBox
              type="text"
              aria-label="이름을 입력해주세요"
              placeholder="이름을 입력해주세요"
              id="name"
            />
          </RightBox>
        </EditCotainer>
        <EditCotainer>
          <LeftBox htmlFor="number">연락처</LeftBox>
          <RightBox>
            <InputBox
              type="text"
              aria-label="연락처를 입력해주세요"
              placeholder="연락처를 입력해주세요"
              id="number"
            />
          </RightBox>
        </EditCotainer>
        <EditCotainer>
          <LeftBox>비밀번호</LeftBox>
          <RightBox>
            <PasswordContainer>
              <PasswordText htmlFor="password1">현재 비밀번호</PasswordText>
              <InputBox
                onChange={VaildPW}
                type="text"
                aria-label="현재 비밀번호를 입력해주세요"
                placeholder="현재 비밀번호를 입력해주세요"
                id="password1"
              />
            </PasswordContainer>
            {isPassword ? (
              <ConfirmMessage>현재 비밀번호를 확인해주세요.</ConfirmMessage>
            ) : null}
            <PasswordContainer>
              <PasswordText htmlFor="password2">새 비밀번호</PasswordText>
              <InputBox
                onChange={VaildNewPW}
                type="text"
                aria-label="새 비밀번호를 입력해주세요"
                placeholder="새 비밀번호를 입력해주세요"
                id="password2"
              />
            </PasswordContainer>
            {isNewPW ? (
              <ConfirmMessage>
                영문, 숫자를 포함한 8자 이상 비밀번호를 입력해주세요.
              </ConfirmMessage>
            ) : null}
            <PasswordContainer>
              <PasswordText htmlFor="password3">새 비밀번호 확인</PasswordText>
              <InputBox
                onChange={VaildConfirmPW}
                type="text"
                aria-label="새 비밀번호를 다시 입력해주세요"
                placeholder="새 비밀번호를 다시 입력해주세요"
                id="password3"
              />
            </PasswordContainer>
            {isConfirmPW ? (
              <ConfirmMessage>동일한 비밀번호를 입력해주세요.</ConfirmMessage>
            ) : null}
          </RightBox>
        </EditCotainer>
      </UserEditContainer>
      <ButtonContainer>
        <UserOutButton aria-label="탈퇴하기 버튼입니다." onClick={onUserOut}>
          탈퇴하기
        </UserOutButton>
        <ConfirmButton
          aria-label="수정완료 버튼입니다."
          onClick={onEditComplete}
        >
          수정완료
        </ConfirmButton>
      </ButtonContainer>
    </UserEditWrapper>
  );
};

export default UserInfoEdit;
