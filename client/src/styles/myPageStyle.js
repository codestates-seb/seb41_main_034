import { Link } from 'react-router-dom';
import styled from 'styled-components';
//MyQuestionList
const ListHeader = styled.div`
  display: flex;
  width: 100%;
  max-width: 702px;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => props.theme.blackColor};
  border-radius: 4px;
  background-color: ${(props) => props.theme.activeColor};
  color: ${(props) => props.theme.whiteColor};

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    max-width: 399px;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const RightContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  svg {
    width: 1px;
    fill: ${(props) => props.theme.activeColor};
  }
`;

const LeftCotainer = styled.div`
  width: 100%;
  max-width: 363px;
`;

const Text = styled.div`
  font-size: 12px;

  @media ${(props) => props.theme.tablet} {
    font-size: 8px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 4px;
  }
`;
//MyQuestion
const ListHeader2 = styled.div`
  display: flex;
  width: 702px;
  padding: 12px 16px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => props.theme.blackColor};
  border-radius: 4px;
  color: ${(props) => props.theme.blackColor};

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    max-width: 399px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

const RightContainer2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
    fill: ${(props) => props.theme.blackColor};
  }
`;

const LeftCotainer2 = styled.div`
  width: 100%;
  max-width: 363px;
`;

const Text2 = styled.button`
  font-size: 12px;

  @media ${(props) => props.theme.tablet} {
    font-size: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 4px;
  }
`;

const MarginSpace = styled.div`
  height: 8px;
`;

const NavContainer = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  max-width: 1024px;

  @media ${(props) => props.theme.mobile} {
    display: flex;
  }
`;

const CatagoryBox = styled(Link)`
  display: flex;
  width: 100%;
  max-width: 160px;
  padding: 16px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  font-size: 12px;
  background-color: ${(props) => props.theme.whiteColor};

  svg {
    width: 10px;
    height: 10px;
  }

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
      color: ${(props) => props.theme.whiteColor};

      svg {
        fill: ${(props) => props.theme.whiteColor};
      }
    }
  }

  @media ${(props) => props.theme.tablet} {
    width: 120px;
    padding: 12px;
    font-size: 8px;

    svg {
      width: 8px;
      height: 8px;
    }
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    max-width: 100%;
    padding: 12px;
    margin-top: 19px;
    justify-content: center;
    align-items: center;
    font-size: 4px;
    zoom: 0.7;

    svg {
      display: none;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100px;
  padding: 30px;
`;

const Title = styled.div`
  width: 100%;
  height: 60px;
  font-size: 40px;

  @media ${(props) => props.theme.tablet} {
    font-size: 30px;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 30px;
    text-align: center;
  }
`;

const SubTitle = styled.div`
  width: calc(100% - 250px);
  height: 45px;
  font-size: 30px;
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  margin: 0px 0px 0px auto;

  @media ${(props) => props.theme.tablet} {
    width: calc(100% - 150px);
    font-size: 20px;
  }
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;
//UserInfo
const UserWrapper = styled.div`
  width: 100%;
  max-width: 602px;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
    max-width: 393px;
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
`;

const ImgContainer = styled.div`
  display: flex;
  width: 35%;
  justify-content: center;
  align-items: center;

  svg {
    width: 150px;
    height: 150px;

    @media ${(props) => props.theme.tablet} {
      width: 102px;
      height: 102px;
    }

    @media ${(props) => props.theme.mobile} {
      width: 102px;
      height: 102px;
    }
  }
`;

const InfoContainer = styled.div`
  display: grid;
  width: 65%;
`;

const NameText = styled.div`
  display: flex;
  padding: 12px 0 12px 0;
  font-size: 24px;
  align-items: center;

  @media ${(props) => props.theme.tablet} {
    font-size: 16px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 12px;
  }
`;

const OtherText = styled.div`
  display: flex;
  font-size: 12px;
  padding-bottom: 8px;
  align-items: center;

  @media ${(props) => props.theme.tablet} {
    font-size: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 8px;
  }
`;

const EditButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const EditButton = styled.button`
  width: 167px;
  height: 41px;
  margin: 12px 0 12px 0;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.whiteColor};
  font-size: 12px;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }

  @media ${(props) => props.theme.tablet} {
    width: 96px;
    height: 29px;
    font-size: 8px;
  }

  @media ${(props) => props.theme.mobile} {
    width: 88px;
    height: 28px;
    font-size: 8px;
  }
`;
//UserInfoEdit
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
export {
  ListHeader,
  RightContainer,
  LeftCotainer,
  Text,
  ListHeader2,
  RightContainer2,
  LeftCotainer2,
  Text2,
  MarginSpace,
  NavContainer,
  CatagoryBox,
  Container,
  Title,
  SubTitle,
  UserWrapper,
  UserInfoContainer,
  ImgContainer,
  InfoContainer,
  NameText,
  OtherText,
  EditButtonContainer,
  EditButton,
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
};
