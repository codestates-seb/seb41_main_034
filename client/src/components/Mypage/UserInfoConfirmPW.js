import MyPageHeader from './MyPageHeader';
import {
  UserModalContainer,
  EditTextContainer,
  TopText,
  BottomText,
  EditPasswordContainer,
  PasswordInput,
  EditButtonContainer,
  EditUserButton
} from '../../styles/myPageStyle';
import { useState } from 'react';
import { authAPI } from '../../api/customAxios';
import { useNavigate } from 'react-router-dom';

const UserInfoConfirmPW = () => {
  const [password, setPassword] = useState(null);
  const navigate = useNavigate();

  const Confirm = () => {
    const ConfirmAPI = async (password) => {
      try {
        await authAPI.get(`/user/password-check?password=${password}`);
        navigate(`/mypage/edit`);
      } catch (error) {
        alert('비밀번호가 일치하지 않습니다.');
        console.log(error);
      }
    };
    ConfirmAPI(password);
  };

  return (
    <>
      <MyPageHeader title={'회원정보수정'}></MyPageHeader>
      <UserModalContainer>
        <EditTextContainer>
          <TopText>비밀번호 재확인</TopText>
          <BottomText>
            회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번
            확인해주세요.
          </BottomText>
        </EditTextContainer>
        <EditPasswordContainer>
          <TopText>비밀번호*</TopText>
          <PasswordInput
            aria-label="비밀번호를 입력해주세요."
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </EditPasswordContainer>
        <EditButtonContainer>
          <EditUserButton
            onClick={Confirm}
            aria-label="비밀번호 입력완료 후 누르는 확인버튼입니다."
          >
            확인
          </EditUserButton>
        </EditButtonContainer>
      </UserModalContainer>
    </>
  );
};

export default UserInfoConfirmPW;
