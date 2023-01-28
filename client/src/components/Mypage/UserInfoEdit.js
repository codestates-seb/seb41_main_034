import {
  UserEditWrapper,
  UserEditContainer,
  EditCotainer,
  RightBox,
  InputBox,
  PasswordContainer,
  PasswordText,
  ButtonContainer,
  ConfirmButton,
  UserOutButton,
  ConfirmMessage,
  DisabledButton
} from '../../styles/myPageStyle';
import { useState } from 'react';
import MyPageHeader from './MyPageHeader';
import { authAPI } from '../../api/customAxios';

const UserInfoEdit = () => {
  const [name, setName] = useState('');
  const [password] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPW, setConfirmPW] = useState('');
  const [isName, setIsName] = useState(false);
  const [isNewPW, setIsPW] = useState(false);
  const [isConfirmPW, setIsConfirmPW] = useState(false);
  const [vaild, setVaild] = useState({
    name: false,
    pw: false,
    newPw: false,
    newPwConfirm: false
  });
  const userId = localStorage.getItem('userId');

  const onEditComplete = () => {
    if (window.confirm('회원정보를 변경하시겠습니까?')) {
      const body = {
        displayName: name,
        oldPassword: password,
        newPassword: confirmPW
      };

      const EditAPI = async (userId, body) => {
        try {
          await authAPI.patch(`/user/${userId}`, body);
        } catch (error) {
          console.log(error);
        }
      };

      EditAPI(userId, body);
      alert('변경되었습니다');
    } else {
      alert('취소되었습니다.');
    }
  };

  const onUserOut = () => {
    if (window.confirm('탈퇴하시겠습니까?')) {
      const DeleteAPI = async (userId) => {
        try {
          await authAPI.delete(`user/${userId}`);
        } catch (error) {
          console.log(error);
        }
      };
      DeleteAPI(userId);
      alert('탈퇴되었습니다');
    } else {
      alert('취소되었습니다.');
    }
  };

  const VaildId = (e) => {
    const currentId = e.target.value;
    const idRegExp = /^(?=.*[a-zA-z])(?=.*[0-9]).{6,20}$/;
    setName(currentId);

    idRegExp.test(currentId)
      ? setVaild({ ...vaild, name: true }, setIsName(true))
      : setVaild({ ...vaild, name: false }, setIsName(false));
  };

  const VaildPW = (e) => {
    const currentPW = e.target.value;
    if (currentPW.length >= 1) {
      setVaild({ ...vaild, pw: true });
    } else {
      setVaild({ ...vaild, pw: false });
    }
  };

  const VaildNewPW = (e) => {
    const passwordRegExp =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    const currentNewPW = e.target.value;
    setNewPassword(e.target.value);
    if (passwordRegExp.test(currentNewPW)) {
      setIsPW(true);
      setVaild({ ...vaild, newPw: true });
    } else {
      setIsPW(false);
      setVaild({ ...vaild, newPw: false });
    }
  };

  const VaildConfirmPW = (e) => {
    setConfirmPW(e.target.value);
    const currentConfirmPW = e.target.value;

    if (currentConfirmPW === newPassword) {
      setVaild({ ...vaild, newPwConfirm: true });
      setIsConfirmPW(true);
    } else {
      setVaild({ ...vaild, newPwConfirm: false });
      setIsConfirmPW(false);
    }
  };

  return (
    <>
      <MyPageHeader title="회원정보수정" />
      <UserEditWrapper>
        <UserEditContainer>
          <EditCotainer>
            <PasswordContainer>
              <PasswordText htmlFor="number">이름</PasswordText>
              <InputBox
                onChange={VaildId}
                type="text"
                aria-label="이름을 입력해주세요"
                placeholder="이름을 입력해주세요"
                id="name"
              />
            </PasswordContainer>
          </EditCotainer>
          {isName ? (
            <ConfirmMessage />
          ) : (
            <ConfirmMessage>
              영문, 숫자를 포함한 6~20자를 입력하세요.
            </ConfirmMessage>
          )}
          <EditCotainer>
            <RightBox>
              <PasswordContainer>
                <PasswordText htmlFor="password1">현재 비밀번호</PasswordText>
                <InputBox
                  onChange={VaildPW}
                  type="password"
                  aria-label="현재 비밀번호를 입력해주세요"
                  placeholder="현재 비밀번호를 입력해주세요"
                  id="password1"
                />
              </PasswordContainer>
              <ConfirmMessage />
              <PasswordContainer>
                <PasswordText htmlFor="password2">새 비밀번호</PasswordText>
                <InputBox
                  onChange={VaildNewPW}
                  type="password"
                  aria-label="새 비밀번호를 입력해주세요"
                  placeholder="새 비밀번호를 입력해주세요"
                  id="password2"
                />
              </PasswordContainer>
              {isNewPW ? (
                <ConfirmMessage />
              ) : (
                <ConfirmMessage>
                  영문, 숫자, 특수문자를 포함한 8~20자를 입력하세요.
                </ConfirmMessage>
              )}
              <PasswordContainer>
                <PasswordText htmlFor="password3">
                  새 비밀번호 확인
                </PasswordText>
                <InputBox
                  onChange={VaildConfirmPW}
                  type="password"
                  aria-label="새 비밀번호를 다시 입력해주세요"
                  placeholder="새 비밀번호를 다시 입력해주세요"
                  id="password3"
                />
              </PasswordContainer>
              {isConfirmPW ? (
                <ConfirmMessage />
              ) : (
                <ConfirmMessage>동일한 비밀번호를 입력해주세요.</ConfirmMessage>
              )}
            </RightBox>
          </EditCotainer>
          <ButtonContainer>
            <UserOutButton
              aria-label="탈퇴하기 버튼입니다."
              onClick={onUserOut}
            >
              탈퇴하기
            </UserOutButton>
            {vaild.name && vaild.pw && vaild.newPw && vaild.newPwConfirm ? (
              <ConfirmButton
                aria-label="수정완료 버튼입니다."
                onClick={onEditComplete}
              >
                수정완료
              </ConfirmButton>
            ) : (
              <DisabledButton>수정완료</DisabledButton>
            )}
          </ButtonContainer>
        </UserEditContainer>
      </UserEditWrapper>
    </>
  );
};

export default UserInfoEdit;
