import styled from 'styled-components';

const SignContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 300px;
  border-radius: 4px;
  margin: 60px 0;
`;

const SignHeader = styled.div`
  text-align: center;
  margin-bottom: 48px;
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
  border-bottom: 1px solid ${(props) => props.theme.borderColor};

  &:focus {
    border: 1px solid ${(props) => props.theme.borderColor};
  }
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
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 98;
`;

const AddressModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 768px;
  z-index: 99;
`;

export {
  SignContainer,
  SignHeader,
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
