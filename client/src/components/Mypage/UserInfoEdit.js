import styled from 'styled-components';

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

const UserEditWrapper = styled.div`
  width: 100%;
  max-width: 602px;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    max-width: 393px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const UserEditContainer = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
`;

const EditCotainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const LeftBox = styled.div`
  display: flex;
  width: 100%;
  max-width: 137px;
  padding: 14px 0 14px 0;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  font-size: 12px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};

  @media ${(props) => props.theme.tablet} {
    max-width: 77px;
    padding: 12px 0 12px 0;
    font-size: 8px;
  }
`;

const RightBox = styled.div`
  display: grid;
  width: 100%;
  padding: 4px;
  align-items: center;
  border: 1px solid ${(props) => props.theme.borderColor};

  @media ${(props) => props.theme.mobile} {
    border: none;
  }
`;

const InputBox = styled.input`
  width: 100%;
  padding: 12px;
  margin: 2px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  font-size: 12px;

  @media ${(props) => props.theme.tablet} {
    padding: 8px;
    font-size: 12px;
    zoom: 0.9;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }
`;

const PasswordContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const PasswordText = styled.div`
  width: 60%;
  padding: 4px;
  font-size: 12px;

  @media ${(props) => props.theme.tablet} {
    font-size: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 4px;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media ${(props) => props.theme.mobile} {
    display: grid;
    justify-content: center;
  }
`;

const ConfirmButton = styled.button`
  width: 98px;
  height: 34px;
  margin: 4px 0 0 4px;
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 4px;
  font-size: 12px;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }

  @media ${(props) => props.theme.tablet} {
    width: 64px;
    height: 24px;
    font-size: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 220px;
    height: 28px;
    margin-top: 24px;
    font-size: 8px;
  }
`;

const UserOutButton = styled.button`
  width: 98px;
  height: 34px;
  margin: 4px 0 0 4px;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  color: ${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.whiteColor};
  font-size: 12px;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
      color: ${(props) => props.theme.whiteColor};
    }
  }

  @media ${(props) => props.theme.tablet} {
    width: 64px;
    height: 24px;
    font-size: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 220px;
    height: 28px;
    font-size: 8px;
  }
`;

export default UserInfoEdit;
