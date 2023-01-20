import styled from 'styled-components';

const SignWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignContainer = styled.form`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  border-radius: 4px;
  transform: translate(-50%, -50%);
  z-index: 70;
`;

const SignHeader = styled.div`
  text-align: center;
  margin-bottom: 48px;
`;

const SignLogo = styled.h1`
  position: relative;
  top: 8px;

  svg {
    width: 72px;
    height: 72px;
  }
`;

const SignTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 12px;
`;

const SignSpan = styled.span`
  font-size: 16px;
`;

const ToSign = styled(SignSpan)`
  margin-left: 4px;
  color: ${(props) => props.theme.primaryColor};
  transition: color 0.5s;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      color: ${(props) => props.theme.hoverColor};
    }
  }
`;

const SignList = styled.ul`
  width: 100%;
  margin-bottom: 24px;
`;

const SignItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 36px;
  }
`;

const SignLabel = styled.label`
  font-size: 14px;
  margin-bottom: 4px;
`;

const SignInput = styled.input`
  padding: 8px;
  border-radius: 4px;
  font-size: 14px;
  border: 1px solid ${(props) => props.theme.borderColor};
`;

const ConfirmButton = styled.button`
  position: absolute;
  top: -10px;
  right: 0;
  padding: 4px;
  font-size: 12px;
  color: ${(props) => props.theme.grayColor};
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 4px;
  transition: color 0.5s, border 0.5s;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      color: ${(props) => props.theme.hoverColor};
      border: 1px solid ${(props) => props.theme.hoverColor};
    }
  }
`;

const SignButton = styled.button`
  width: 100%;
  padding: 16px 0;
  font-size: 16px;
  border-radius: 4px;
  color: ${(props) => props.theme.whiteColor};
  background-color: ${(props) => props.theme.primaryColor};
  transition: background-color 0.5s;

  @media ${(props) => props.theme.desktop} {
    &:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }
  }
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${(props) => (props.isOpenPost ? 'block' : 'none')};
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 80;
`;

const ModalCancle = styled.button`
  position: absolute;
  top: 15%;
  left: 90%;
  background-color: rgba(0, 0, 0, 0);

  svg {
    width: 16px;
    height: 16px;
    fill: ${(props) => props.theme.whiteColor};
  }
`;

const AddressModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 768px;
  border-radius: 4px;
  transition: transform 0.5s;
  transform: translate(-50%, -50%)
    ${(props) => (props.isOpenPost ? 'translateY(0)' : 'translateY(-300%)')};
  overflow: hidden;
  z-index: 90;
`;

const ModalTitle = styled.h2`
  padding: 12px 0;
  border-bottom: 1px solid ${(props) => props.theme.blackColor};
  font-size: 24px;
  text-align: center;
  color: ${(props) => props.theme.primaryColor};
  background-color: ${(props) => props.theme.whiteColor};
`;

export {
  ModalCancle,
  ModalTitle,
  SignWrapper,
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
  ConfirmButton,
  SignButton,
  ModalBackground,
  AddressModal
};
