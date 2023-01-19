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
  UserOutButton
} from '../../styles/myPageStyle';

const UserInfoEdit = () => {
  return (
    <UserEditWrapper>
      <UserEditContainer>
        <EditCotainer>
          <LeftBox>이메일</LeftBox>
          <RightBox>
            <InputBox
              aria-label="이메일을 입력해주세요"
              placeholder="이메일을 입력해주세요"
            />
          </RightBox>
        </EditCotainer>
        <EditCotainer>
          <LeftBox>이름</LeftBox>
          <RightBox>
            <InputBox
              aria-label="이름을 입력해주세요"
              placeholder="이름을 입력해주세요"
            />
          </RightBox>
        </EditCotainer>
        <EditCotainer>
          <LeftBox>연락처</LeftBox>
          <RightBox>
            <InputBox
              aria-label="연락처를 입력해주세요"
              placeholder="연락처를 입력해주세요"
            />
          </RightBox>
        </EditCotainer>
        <EditCotainer>
          <LeftBox>비밀번호</LeftBox>
          <RightBox>
            <PasswordContainer>
              <PasswordText>현재 비밀번호</PasswordText>
              <InputBox
                aria-label="현재 비밀번호를 입력해주세요"
                placeholder="현재 비밀번호를 입력해주세요"
              />
            </PasswordContainer>
            <PasswordContainer>
              <PasswordText>새 비밀번호</PasswordText>
              <InputBox
                aria-label="새 비밀번호를 입력해주세요"
                placeholder="새 비밀번호를 입력해주세요"
              />
            </PasswordContainer>
            <PasswordContainer>
              <PasswordText>새 비밀번호 확인</PasswordText>
              <InputBox
                aria-label="새 비밀번호를 다시 입력해주세요"
                placeholder="새 비밀번호를 다시 입력해주세요"
              />
            </PasswordContainer>
          </RightBox>
        </EditCotainer>
      </UserEditContainer>
      <ButtonContainer>
        <ConfirmButton>확인</ConfirmButton>
        <UserOutButton>탈퇴하기</UserOutButton>
      </ButtonContainer>
    </UserEditWrapper>
  );
};

export default UserInfoEdit;
