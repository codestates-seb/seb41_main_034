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

const UserInfoConfirmPW = () => {
  const [password, setPassword] = useState(null);

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
            aria-label="비밀번호 확인버튼입니다."
            type={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </EditPasswordContainer>
        <EditButtonContainer>
          <EditUserButton>확인</EditUserButton>
        </EditButtonContainer>
      </UserModalContainer>
    </>
  );
};

export default UserInfoConfirmPW;
